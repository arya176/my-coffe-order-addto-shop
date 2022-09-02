import React, { useState } from "react";
import "./App.css";
import { BtnShoppingBascket } from "./BtnShoppingBascket";
import { MenuItem } from "./MenuItem";
import { ICoffeeStore } from "./coffeeStore";
import { coffeeType } from "./coffeeStore";

export const App: React.FC = () => {
  //step 4 since now we want try yo make it like wen you click on add button , then your object add to add to shp[[img button]]
  const [shoppingBagItem, setShoppingBagItem] = useState<ICoffeeStore[]>([]);
  const addToShoppingBag = (itemToAdd: ICoffeeStore) => {
    setShoppingBagItem([...shoppingBagItem, itemToAdd]);
  };
  return (
    <div className="App">
      <div>
        <header className="App-header">COFFEE ORDER</header>
        {/* step 5 below */}
        <BtnShoppingBascket items={shoppingBagItem} />
      </div>
      {/* step 6 */}
      {coffeeType.map((each) => (
        <MenuItem orders={each} addToShoppingBag={addToShoppingBag} />
      ))}
    </div>
  );
};
