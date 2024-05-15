import { useContext, useState } from "react";
import ShopPageContext from "../../UseContext/ShopPageContext";

const SideTabListInput = ({ children, headerTitle }) => {
  return (
    <li className="border-b-2 text-left space-y-1 pb-2">
      <span className="font-medium tracking-wide text-center">
        {headerTitle}
      </span>
      <ul className="space-y-1">{children}</ul>
    </li>
  );
};

export const SideTabInput = ({ name, type, label, value, placeHolder }) => {
  const { search, handleQueries, handleNavigate, location } =
    useContext(ShopPageContext);
  const lastEndPoint = location.pathname.split("/").pop();
  const [priceValue, setPriceValue] = useState(search.getAll(name));

  let styles = "";
  let isChecked;
  let inputToShow;

  switch (type) {
    case "checkbox":
      styles = "form-checkbox rounded";
      if (
        search.getAll(name).includes(value) ||
        lastEndPoint == value.toLowerCase() + "s"
      )
        isChecked = true;
      break;
    case "radio":
      styles = "form-radio";
      if (lastEndPoint == value) isChecked = true;
      break;
    case "number":
      styles = "form-input text-black";
      break;
    default:
      console.warning("only checkbox, radio, and number are accepted");
  }

  switch (type) {
    case "radio":
    case "checkbox":
      inputToShow = (
        <li className="space-x-2">
          <input
            id={label}
            name={name}
            type={type}
            className={`${styles} text-cyan-500`}
            value={value}
            onChange={(e) => {
              switch (type) {
                case "radio":
                  handleNavigate(`collections/${e.target.value}`);
                  break;

                case "checkbox":
                  handleQueries(
                    e.target.name,
                    e.target.value,
                    e.target.checked
                  );
                  break;

                default:
                  console.error("no function found in onchange");
              }
            }}
            checked={isChecked}
          />
          <label htmlFor={label}>{label}</label>
        </li>
      );
      break;
    case "number":
      inputToShow = (
        <li className="space-x-2">
          <input
            id={label}
            name={name}
            type={type}
            className={`${styles}`}
            value={priceValue}
            placeholder={placeHolder}
            onChange={(e) => setPriceValue(e.target.value)}
            onBlur={(e) => {
              handleQueries(e.target.name, priceValue);
            }}
          />
        </li>
      );
      break;

    default:
      inputToShow = <h1>nothing to show</h1>;
  }

  return inputToShow;
};

export default SideTabListInput;
