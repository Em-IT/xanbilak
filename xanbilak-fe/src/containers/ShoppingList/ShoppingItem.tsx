import React, { useState } from "react";
import { BuyableItem } from "../../types/BuyableItem";
import "./ShoppingItem.scss";
import moment from "moment-jalaali";
import { BiCalendarPlus } from "react-icons/bi";
// eslint-disable-next-line no-duplicate-imports
import { BiTimeFive } from "react-icons/bi";

interface inputProps {
    item:BuyableItem,
    onChange: any
}

const ShoppingItem = ({ item, onChange }: inputProps): JSX.Element => {

  const { id, title, isBought, description, createDate } = item;
  const [isOpen, setIsOpen] = useState(false);

  moment.loadPersian({ dialect: "persian-modern",
    usePersianDigits: true });

  const TITLE_MAX_LENGTH = 30;
  const TITLE_MIN_LENGTH = 0;

  return (
    <li className="shopping-item">
      <div className="main-info" onClick={() => setIsOpen(!isOpen)}>
        <input type="checkbox" onChange={() => onChange(id)}
          checked={isBought} />
        <span className="title">
          {title.length > TITLE_MAX_LENGTH && !isOpen
            ? title.substring(TITLE_MIN_LENGTH, TITLE_MAX_LENGTH) + "..."
            : title
          }
        </span>
      </div>
      <div className={"extra-info" + (isOpen ? "" : " is-collapse")}>
        <div className="description">
          {description}
        </div>
        <div className="date-and-time">
          <div>
            <BiCalendarPlus className="abc" />
            {moment(createDate).format("dddd، jD jMMMM jYYYY")}
          </div>
          <div>
            <BiTimeFive />
            {moment(createDate).format("HH:mm:ss")}
          </div>
        </div>
      </div>
    </li>
  );

};

export default ShoppingItem;
