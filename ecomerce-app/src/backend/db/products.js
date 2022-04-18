import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542477/samples/asspee_arng45.png",
    categoryName: "Tools",
    mrpPrice: 5000,
    discountPrice: 5200,
    title: "Spray Machine",
    discount: ["10% off"],
    rating: 4,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542517/samples/ecomerce/assest/seedcard_vke0ta.jpg",
    categoryName: "Seed",
    mrpPrice: 3500,
    discountPrice: 3150,
    title: "Carrot",
    discount: ["10% off"],
    rating: 5,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542516/samples/ecomerce/assest/ferilizercard_jhklrc.jpg",
    categoryName: "Pesticide",
    mrpPrice: 4500,
    discountPrice: 3850,
    title: "Root nurture",
    discount: ["10% off"],
    rating: 3,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542517/samples/ecomerce/assest/pesticidecard_ajtaxq.jpg",
    categoryName: "Fertilizer",
    mrpPrice: 5000,
    discountPrice: 4500,
    title: "Bio ferilizer ",
    discount: ["10% off"],
    rating: 4,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542477/samples/asspee_arng45.png",
    categoryName: "Tools",
    mrpPrice: 3000,
    discountPrice: 2300,
    title: "Spray Machine",
    discount: ["10% off"],
    rating: 3,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542517/samples/ecomerce/assest/pesticidecard_ajtaxq.jpg",
    categoryName: "Fertilizer",
    mrpPrice: 3800,
    discountPrice: 3420,
    title: "Bio fertilizer",
    discount: ["10% off"],
    rating: 5,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542477/samples/asspee_arng45.png",
    categoryName: "Tools",
    mrpPrice: 4000,
    discountPrice: 4200,
    title: "Seed",
    discount: ["10% off"],
    rating: 2,
    qunatity:1
  },

 
];
