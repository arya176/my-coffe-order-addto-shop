import React, { useState } from "react";

export const BtnAddToShoppingBag: React.FC = () => {
  const [add, SetAdd] = useState<boolean>(false);
  const Click = () => {
    SetAdd(!add);
  };
  return (
    <button className="btn" onClick={Click}>
      Add to Bag
    </button>
  );
};
