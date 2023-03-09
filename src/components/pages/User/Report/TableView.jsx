import React, { useState } from "react";
import FilterDropdown from "../../../utilities/FilterDropdown";
import icon from "../../../../assets/icons/calendar.png";

const data = [
  { date: "2022-01-01", value: 10 },
  { date: "2022-01-02", value: 20 },
  { date: "2022-01-03", value: 15 },
  { date: "2022-01-04", value: 35 },
  { date: "2022-01-05", value: 25 },
  { date: "2022-01-06", value: 30 },
  { date: "2022-01-07", value: 20 },
];

const TableView = () => {
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

  return (
    <>
      <div className="table-filter-header">
        <div className="date-range d-flex align-items-end justify-content-between">
          <div>
            <label className="input-label">Device</label>
            <FilterDropdown
              options={["dw7457asf5", "v57sdf4sdg", "a4sf7a5f5a", "45dfvsd7av"]}
              placeholder="Select Device"
              onOptionSelect={(option) =>
                console.log(`Selected option: ${option}`)
              }
            />
          </div>

          <div>
            <label className="input-label">Interval</label>
            <FilterDropdown
              options={["Flow Report", "pump hour report"]}
              placeholder="Select"
              onOptionSelect={(option) =>
                console.log(`Selected option: ${option}`)
              }
            />
          </div>
          <div className="date-input-wrap m-0">
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

          <div className="date-input-wrap m-0">
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

          <div>
            <label className="input-label">Report Type</label>
            <FilterDropdown
              options={["Per hour", "Per day", "Per month"]}
              placeholder="Select Type"
              onOptionSelect={(option) =>
                console.log(`Selected option: ${option}`)
              }
            />
          </div>

          <button onClick={applyDateRange} className="white-btn">
            Submit
          </button>
        </div>
      </div>

      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th width="25%">Date / Time</th>
              <th width="25%">Flow</th>
              <th width="25%">Totalizer</th>
              <th width="25%">Cumulative Totalizer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="date">13/05/2023</span>
                <span className="time">04:26:23</span>
              </td>
              <td>8 L/M</td>
              <td>3562845 L</td>
              <td>3596471 L</td>
            </tr>

            <tr>
              <td>
                <span className="date">13/05/2023</span>
                <span className="time">04:26:23</span>
              </td>
              <td>8 L/M</td>
              <td>3562845 L</td>
              <td>3596471 L</td>
            </tr>

            <tr>
              <td>
                <span className="date">13/05/2023</span>
                <span className="time">04:26:23</span>
              </td>
              <td>8 L/M</td>
              <td>3562845 L</td>
              <td>3596471 L</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableView;
