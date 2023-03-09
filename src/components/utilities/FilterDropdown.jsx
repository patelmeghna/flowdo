import React, { useState, useEffect } from "react";

function FilterDropdown(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState(props.options);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Reorder the options array based on the selected value
    if (selectedOption && options.includes(selectedOption)) {
      setOptions([
        selectedOption,
        ...options.filter((option) => option !== selectedOption),
      ]);
    }
  }, [selectedOption, options]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (props.onOptionSelect) {
      props.onOptionSelect(option);
    }
    setToggle(false);
  };

  const placeholder =
    props.placeholder || (options.length > 0 ? options[0] : "");

  return (
    <div className="dropdown">
      <button
        className="dropdown__button d-flex justify-content-between"
        onClick={() => setToggle(!toggle)}
      >
        {selectedOption || placeholder}{" "}
        <span className={toggle && "rotate"}>
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6304 21.0315L25.2136 13.4348C25.3394 13.3101 25.4392 13.1616 25.5074 12.9981C25.5755 12.8345 25.6106 12.6591 25.6106 12.4819C25.6106 12.3047 25.5755 12.1293 25.5074 11.9657C25.4392 11.8022 25.3394 11.6537 25.2136 11.529C24.9621 11.279 24.6219 11.1387 24.2674 11.1387C23.9128 11.1387 23.5726 11.279 23.3211 11.529L16.6103 18.1727L9.96662 11.529C9.71515 11.279 9.37497 11.1387 9.02039 11.1387C8.66581 11.1387 8.32564 11.279 8.07417 11.529C7.94735 11.6533 7.84646 11.8015 7.77734 11.9651C7.70822 12.1287 7.67226 12.3043 7.67152 12.4819C7.67226 12.6595 7.70822 12.8351 7.77734 12.9987C7.84646 13.1623 7.94735 13.3105 8.07417 13.4348L15.6574 21.0315C15.7831 21.1677 15.9356 21.2764 16.1054 21.3508C16.2752 21.4252 16.4585 21.4636 16.6439 21.4636C16.8292 21.4636 17.0126 21.4252 17.1824 21.3508C17.3521 21.2764 17.5047 21.1677 17.6304 21.0315Z"
              fill="#09C4FF"
            />
          </svg>
        </span>
      </button>
      <ul className={toggle ? "dropdown__menu show" : "dropdown__menu"}>
        {options.map((option) => (
          <li
            key={option}
            className="dropdown__item"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterDropdown;
