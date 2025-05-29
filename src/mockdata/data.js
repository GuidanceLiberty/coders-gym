import { info } from "autoprefixer";
import Image1 from "../assets/hero/yoga-mat2.jpeg"
import Image2 from "../assets/hero/fitness.jpeg"
import Image3 from "../assets/hero/yoga-mat2.jpeg"
import Image4 from "../assets/hero/fitness2.jpeg"
import { delay } from "framer-motion";


export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Trainer",
    link: "#",
  },
  {
    id: 3,
    title: "Program",
    link: "#",
  },
  {
    id: 4,
    title: "Blog",
    link: "#",
  },
  {
    id: 5,
    title: "Pricing",
    link: "#",
  },
];


export const ProductData = [
    {
        id: 1,
        category: "Yoga",
        image: Image1,
        title: "Yoga Mat",
        info: "info",
        price: "price",
    },
    {
        id: 2,
        category: "Fitness",
        image: Image2,
        title: "Dumbells",
        info: "info",
        price: "$100",
    },
    {
        id: 3,
        category: "Yoga",
        image: Image3,
        title: "Yoga Mat",
        info: "info",
        price: "$100",
    },
    {
        id: 4,
        category: "Fitness",
        image: Image4,
        title: "Dumbell",
        info: "info",
        price: "$100",
    },
    {
        id: 5,
        category: "Yoga Mat",
        image: Image1,
        title: " ",
        info: "info",
        price: "$100",
    },
    {
        id: 6,
        category: "Muscles",
        image: Image2,
        title: "",
        info: "info",
        price: "$100",
    },
    {
        id: 7,
        category: "Yoga",
        image: Image3,
        title: "Yoga Mat",
        info: "info",
        price: "$100",
    },
];

export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "This gym completely changed my life! The trainers are knowledgeable, friendly, and always push me to do my best. I've lost 20 pounds and gained a ton of confidence. Highly recommend to anyone looking to get serious about their health.",
    img: "https://picsum.photos/id/1011/100/100"
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "This gym completely changed my life! The trainers are knowledgeable, friendly, and always push me to do my best. I've lost 20 pounds and gained a ton of confidence. Highly recommend to anyone looking to get serious about their health.",
    img: "https://picsum.photos/id/1012/100/100",
    delay: 0.5
  },
  {
    id: 3,
    name: "Kristen",
    text: "This gym completely changed my life! The trainers are knowledgeable, friendly, and always push me to do my best. I've lost 20 pounds and gained a ton of confidence. Highly recommend to anyone looking to get serious about their health.",
    img: "https://picsum.photos/id/1013/100/100",
    delay: 0.8
  },
  {
    id: 4,
    name: "Ariana",
    text: "This gym completely changed my life! The trainers are knowledgeable, friendly, and always push me to do my best. I've lost 20 pounds and gained a ton of confidence. Highly recommend to anyone looking to get serious about their health.",
    img: "https://picsum.photos/id/1014/100/100",
    delay: 0.2
  }
];


