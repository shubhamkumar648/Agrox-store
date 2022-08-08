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
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1659976369/samples/ecomerce/assest/urea_gt88ry.jpg",
    categoryName: "Fertilizer",
    mrpPrice: 4500,
    discountPrice: 3850,
    title: "Bio ferilizer",
    discount: ["10% off"],
    rating: 3,
    qunatity:1
  },


  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1659976530/samples/ecomerce/assest/big_tdjddn.webp",
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
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1659975935/samples/ecomerce/assest/tool2_yepcno.jpg",
    categoryName: "Tools",
    mrpPrice: 3000,
    discountPrice: 2300,
    title: "Gardening Hoe",
    discount: ["10% off"],
    rating: 3,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1659980488/samples/ecomerce/assest/flower.jpg_dmt9rh.jpg",
    categoryName: "Seed",
    mrpPrice: 1000,
    discountPrice: 900,
    title: "flower",
    discount: ["10% off"],
    rating: 5,
    qunatity:1
  },

  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1648542517/samples/ecomerce/assest/pesticidecard_ajtaxq.jpg",
    categoryName: "Pesticide",
    mrpPrice: 3800,
    discountPrice: 3420,
    title: "Bio fertilizer",
    discount: ["10% off"],
    rating: 5,
    qunatity:1
  },

  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1659980365/samples/ecomerce/assest/cauli_mr2eej.jpg",
    categoryName: "Seed",
    mrpPrice: 1200,
    discountPrice: 1080,
    title: "Cauliflower",
    discount: ["10% off"],
    rating: 5,
    qunatity:1
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/e-comerce/image/upload/v1659975927/samples/ecomerce/assest/tool3_mhoell.jpg",
    categoryName: "Tools",
    mrpPrice: 4000,
    discountPrice: 4200,
    title: "Protection Suit",
    discount: ["10% off"],
    rating: 2,
    qunatity:1
  },

 
];
