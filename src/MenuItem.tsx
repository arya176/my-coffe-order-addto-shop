import React from "react";
import { ICoffeeStore } from "./coffeeStore";
import { BtnAddToShoppingBag } from "./BtnAddToShoppingBag";
interface IMenuItemProps {
  orders: ICoffeeStore;
  addToShoppingBag: (itemToAdd: ICoffeeStore) => void; //button important here step 1.
}
//export const MenuItem: React.FC<IMenuItemProps> = ({ orders }) => { //step 2: this will change to line below.
export const MenuItem: React.FC<IMenuItemProps> = ({
  orders,
  addToShoppingBag,
}) => {
  return (
    <div className="CoffeeOrderMenuApperience">
      <img src={orders.imgURL} alt="coffee" />
      <h4>Name: {orders.name}</h4>
      <p>Price: {orders.price} $</p>
      <br></br>
      {/* step 3 now we start to make a button */}
      <button className="btn" onClick={() => addToShoppingBag(orders)}>
        ADD TO BAG
      </button>
    </div>
  );
};
