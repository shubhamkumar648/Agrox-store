import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542477/samples/asspee_arng45.png",
    title: "tools",
    mrpPrice: "5000",
    discountPrice: "5200",
    categoryName: "Spray Machine",
    discount: ["10% off"],
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542517/samples/ecomerce/assest/seedcard_vke0ta.jpg",
    title: "Spray Machine",
    mrpPrice: "3500",
    discountPrice: "3150",
    categoryName: "Seed",
    discount: ["10% off"],
    rating: 5,
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542516/samples/ecomerce/assest/ferilizercard_jhklrc.jpg",
    title: "tools",
    mrpPrice: "4500",
    discountPrice: "3850",
    categoryName: "Seed",
    discount: ["10% off"],
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542477/samples/asspee_arng45.png",
    title: "tools",
    mrpPrice: "5000",
    discountPrice: "4500",
    categoryName: "Seed",
    discount: ["10% off"],
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542477/samples/asspee_arng45.png",
    title: "Pesticide",
    mrpPrice: "3000",
    discountPrice: "2300",
    categoryName: "Pesticide",
    discount: ["10% off"],
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542477/samples/asspee_arng45.png",
    title: "tools",
    mrpPrice: "4000",
    discountPrice: "4200",
    categoryName: "Seed",
    discount: ["10% off"],
    rating: 2,
  },
];
