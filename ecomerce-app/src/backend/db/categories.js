import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  
  {
    _id: uuid(),
    categoryImg:"https://res.cloudinary.com/e-comerce/image/upload/v1648542515/samples/ecomerce/assest/fertilizer_xad4ru.jpg",
    categoryName: "Fertilizer",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },

  {
    _id: uuid(),
    categoryImg:"https://res.cloudinary.com/e-comerce/image/upload/v1648542515/samples/ecomerce/assest/pesticide_aolzqq.jpg",
    categoryName: "Pesticide",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },

  {
    _id: uuid(),
    categoryImg:"https://res.cloudinary.com/e-comerce/image/upload/v1648542515/samples/ecomerce/assest/seed_psvhhy.jpg",
    categoryName: "Seed",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },

  {
    _id: uuid(),
    categoryImg:"https://res.cloudinary.com/e-comerce/image/upload/v1648542515/samples/ecomerce/assest/tools_fnql7a.jpg",
    categoryName: "Tools",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },

];
