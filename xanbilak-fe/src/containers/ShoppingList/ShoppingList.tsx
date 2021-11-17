import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import MainHeader from "../../components/MainHeader/MainHeader";
import NavBar from "../../components/NavBar/NavBar";
import { BuyableItem } from "../../types/BuyableItem";
import { getData, sendData } from "../../util/ApiTools";
import ShoppingItem from "./ShoppingItem";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

// eslint-disable-next-line max-lines-per-function
const ShoppingList = (): JSX.Element => {

  // Shopping Items
  const [items, setItems] = useState<BuyableItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Reference to add-box input
  const titleInputRef = React.useRef<HTMLInputElement>(null);

  const readShoppingItemsData = async () => {

    setIsLoading(true);
    try {

      const data = await getData("shoppingList");
      setItems(data);

    } catch (err) {

      // eslint-disable-next-line no-console
      console.log("Error in reading shopping list :", err);

    }
    setIsLoading(false);

  };

  const createShoppingItem = async (title: string) => {

    setIsLoading(true);
    try {

      const result = await sendData("shoppingItem/create", {
        "title": title || "<No Title>",
      });
      toast.success("«" + result.title + "» با موفقیت به لیست اضافه شد");
      // X console.log(result);

    } catch (err) {

      // eslint-disable-next-line no-console
      console.log("Error in creating shopping item :", err);

    }
    setIsLoading(false);

  };

  const ENTER_KEY_CODE = 13;
  const addClickHandle = async (event: any) => {

    if (event.charCode === ENTER_KEY_CODE) {

      await createShoppingItem(event.target.value);

      // Clear the add-box input
      if (titleInputRef !== null && titleInputRef.current !== null) {

        titleInputRef.current.value = "";

      }

      // Read the new added item
      readShoppingItemsData();

    }

  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shoppingItemCheckHandle = (itemId: number): void => {
    // X alert(itemId);
  };

  useEffect(() => {

    readShoppingItemsData();

    return () => {
      // Cleanup
    };

  }, []);

  return (
    <div className="h-full">
      <MainHeader />
      <div className="flex justify-center items-center p-4 sticky box-border top-0 w-full bg-my-violet">
        <input type="text"
          onKeyPress={addClickHandle}
          className="px-3 py-2 w-full border-none rounded-md"
          // eslint-disable-next-line no-return-assign
          // X ref={(el) => titleInputRef = el}
        />
      </div>
      <div className="w-full overflow-auto" style={{height: 'calc(100% - 74px - 60px)', top: '74px'}}>
        <ul className="list-none m-0 p-4">
          {
            isLoading ? <LoadingSpinner color={""} size={0} /> : null
          }
          {
            // eslint-disable-next-line no-magic-numbers
            !isLoading && items.length === 0
              ? <span>No Items in list</span>
              : null
          }
          {
            // eslint-disable-next-line no-magic-numbers
            !isLoading && items.length > 0
              ? items.map((item:any) => <ShoppingItem
                item={item}
                onChange={shoppingItemCheckHandle}
                key={item.id}
              />)
              : null
          }
        </ul>
      </div>
      <NavBar />
    </div>
  );

};

export default ShoppingList;
