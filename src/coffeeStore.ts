import React from "react";

export interface ICoffeeStore {
  id: number;
  imgURL: string;
  name: string;
  price: number;
}

export const coffeeType: ICoffeeStore[] = [
  {
    id: 1,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNp5ytUK4zXErXX8ymqxuAk7TbePvfjL_DUg&usqp=CAU",
    name: "Latte",
    price: 3,
  },
  {
    id: 2,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6VvpdsWJ8I96yzgzUssGI1TyPsseX8SqZg&usqp=CAU",
    name: "Macchiato",
    price: 5,
  },
  {
    id: 3,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7gTipxoaJN6icRFvG1LGsdtg0FOdOcn9tw&usqp=CAU",
    name: "Espresso",
    price: 8,
  },
  {
    id: 4,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjj1MANR2P_Ib0IraQOvbk5PO1YWJCgpe81A&usqp=CAU",
    name: "Mocha",
    price: 7,
  },
  {
    id: 5,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9ivjJFB_H5IZz4TNp7OhrDWFm1RFYKnT9w&usqp=CAU",
    name: "Long Black",
    price: 10,
  },
  {
    id: 6,
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4V2p15peSO31oZSDvdrEk9HXVtxBcEoqwQw&usqp=CAU",
    name: "cappuccino",
    price: 2,
  },
];
