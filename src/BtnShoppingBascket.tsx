import React, { useState } from "react";
import { ICoffeeStore } from "./coffeeStore";
// step 7 we have to interface here
interface IBtnShoppinBascketProps {
  items: ICoffeeStore[];
}
//step7-2 now we have to props it
export const BtnShoppingBascket: React.FC<IBtnShoppinBascketProps> = ({
  items,
}) => {
  const [bascket, setBascket] = useState<boolean>(false);
  const Click = () => {
    setBascket(!bascket);
  };
  return (
    <div>
      <button className="btn" onClick={Click}>
        {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-cart-shopping" /> */}
        bascket
      </button>
      {/* // step 8 */}
      {bascket && (
        <div className="shopping-bag-container">
          {items.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
