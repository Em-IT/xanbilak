import React, { useState } from "react";
import { BuyableItem } from "../../types/BuyableItem";
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
    <li className="mb-1 cursor-pointer">
      <div className="bg-my-silver p-1 rounded-md" onClick={() => setIsOpen(!isOpen)}>
        <input type="checkbox" onChange={() => onChange(id)}
          checked={isBought} />
        <span className="mr-1">
          {title.length > TITLE_MAX_LENGTH && !isOpen
            ? title.substring(TITLE_MIN_LENGTH, TITLE_MAX_LENGTH) + "..."
            : title
          }
        </span>
      </div>
      <div className={"flex flex-col bg-my-silver-dark p-1" + (isOpen ? "" : " hidden")}>
        <div className="text-xs text-red-700 text-center">
          {description}
        </div>
        <div className="flex flex-row justify-around text-xs text-gray-500">
          <div className="flex items-center">
            <BiCalendarPlus className="abc my-0 mx-1 text-gray-500 w-4 h-4" />
            {moment(createDate).format("dddd، jD jMMMM jYYYY")}
          </div>
          <div className="flex items-center">
            <BiTimeFive className="abc my-0 mx-1 text-gray-500 w-4 h-4" />
            {moment(createDate).format("HH:mm:ss")}
          </div>
        </div>
      </div>
    </li>
  );

};

export default ShoppingItem;
