import clinicPlus from "../static/images/clinicplus.jpg";
import thriveco from "../static/images/thriveco.jpg";
import reddy from "../static/images/reddy.jpg";
import godrej from "../static/images/godrej.jpg";
import forest from "../static/images/forest.jpg";
import trayashamp from "../static/images/trayashamp.jpg";
import kit from "../static/images/kit.webp";
import biotin from "../static/images/biotin.jpg";

let Products = [
  {
    id: 1,
    name: "Clinic Plus Shampoo",
    img: clinicPlus,
    manufacturer: "HUL",
    price: "₹100",
    stars: 4,
    total_ratings: 51,
    category: "Shampoo",
    display: "block",
  },
  {
    id: 2,
    name: "Thriveco Hair Growth Serum",
    img: thriveco,
    manufacturer: "Thriveco",
    price: "₹530",
    stars: 3,
    total_ratings: 234,
    category: "Solution",
    display: "block",
  },
  {
    id: 3,
    name: "Dr. Reddy's Minoxidil Solution",
    img: reddy,
    manufacturer: "Dr. Reddy",
    price: "₹250",
    stars: 3,
    total_ratings: 60,
    category: "Solution",
    display: "block",
  },
  {
    id: 4,
    name: "Godrej Hair Color",
    img: godrej,
    manufacturer: "Godrej",
    price: "₹50",
    stars: 4,
    total_ratings: 32,
    category: "Color",
    display: "block",
  },
  {
    id: 5,
    name: "Forest Essentials Hair Thickening Solution",
    img: forest,
    manufacturer: "Forest Essentials",
    price: "₹400",
    stars: 2,
    total_ratings: 10,
    category: "Solution",
    display: "block",
  },
  {
    id: 6,
    name: "Traya's Anti-Dandruff Shampoo",
    img: trayashamp,
    manufacturer: "Traya Health",
    price: "₹200",
    stars: 3,
    total_ratings: 40,
    category: "Shampoo",
    display: "block",
  },
  {
    id: 7,
    name: "Traya's All in One Hair-Caring Kit",
    img: kit,
    manufacturer: "Traya Health",
    price: "₹2000",
    stars: 3,
    total_ratings: 15,
    category: "All",
    display: "block",
  },
  {
    id: 8,
    name: "Biotin Gummies",
    img: biotin,
    manufacturer: "BodyWise",
    price: "₹80",
    stars: 5,
    total_ratings: 20,
    category: "Edible",
    display: "block",
  },
];

export default Products;
