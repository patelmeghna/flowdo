import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import icon from "../../../../assets/icons/calendar.png";
import RadioCard from "./RadioCard";
import FilterDropdown from "../../../utilities/FilterDropdown";
import ExcelJS from "exceljs";
import jsPDF from "jspdf";
import "jspdf-autotable";
import excel from "../../../../assets/icons/Excel.svg";
import pdf from "../../../../assets/icons/Pdf.svg";

const data = [
  { date: "2022-01-01", value: 10 },
  { date: "2022-01-02", value: 20 },
  { date: "2022-01-03", value: 15 },
  { date: "2022-01-04", value: 35 },
  { date: "2022-01-05", value: 25 },
  { date: "2022-01-06", value: 30 },
  { date: "2022-01-07", value: 20 },
];

function exportToExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet 1");
  const columns = [
    { header: "X Axis", key: "x" },
    { header: "Y Axis", key: "y" },
  ];
  worksheet.columns = columns;
  data.forEach((item) => {
    worksheet.addRow(item);
  });
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chart-data.xlsx";
    link.click();
  });
}

const ChartView = () => {
  const [start, setStart] = useState(data[0].date);
  const [end, setEnd] = useState(data[data.length - 1].date);
  const [filteredData, setFilteredData] = useState(data);
  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const applyDateRange = () => {
    const filtered = data.filter(
      (item) => item.date >= start && item.date <= end
    );
    setFilteredData(filtered);
  };

  function exportToPDF() {
    const doc = new jsPDF();
    const tableData = [];

    // loop through the chart data and add it to the tableData array
    data.forEach((item) => {
      const rowData = [item.date, item.value];
      tableData.push(rowData);
    });

    // add the table to the PDF document
    doc.autoTable({
      head: [["X Axis", "Y Axis"]],
      body: tableData,
    });

    // save the PDF file
    doc.save("chart-data.pdf");
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <FilterDropdown
          options={["Avg Flow", "Total Flow"]}
          onOptionSelect={(option) => console.log(`Selected option: ${option}`)}
        />

        <div className="export-btn">
          Export
          <button onClick={exportToExcel}>
            <img src={excel} alt="excel" />
          </button>
          <button onClick={exportToPDF}>
            <img src={pdf} alt="pdf" />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={filteredData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#09c4ff"
            fill="#09c4ff"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="date-range d-flex align-items-end">
        <div className="date-input-wrap">
          <label className="input-label">Start date</label>
          <div className="date-input-group">
            <input
              className="date-input"
              type="date"
              id="start-date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <input
              className="time-input"
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={handleTimeChange}
              step="30"
            />
            <label htmlFor="start-date" className="calendar-label">
              <img src={icon} alt="" />
            </label>
          </div>
        </div>

        <div className="date-input-wrap">
          <label className="input-label">End date</label>
          <div className="date-input-group">
            <input
              className="date-input"
              type="date"
              value={end}
              id="end-date"
              onChange={(e) => setEnd(e.target.value)}
            />
            <input
              className="time-input"
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={handleTimeChange}
              step="30"
            />
            <label htmlFor="end-date" className="calendar-label">
              <img src={icon} alt="" />
            </label>
          </div>
        </div>

        <button onClick={applyDateRange} className="white-btn">
          Submit
        </button>
      </div>

      <h6 className="title">activate device</h6>
      <div className="fluid-detail-wrap">
        <RadioCard
          name="Turbo Fluidity"
          date="23 Aug 2023"
          flow="100.98"
          totalFlow="2100.98"
          radioName="chart"
          radioId="fluid"
        />
      </div>
    </div>
  );
};

export default ChartView;
