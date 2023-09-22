let lastID = 0;
export const generateId = () => ++lastID;
const HomePageCardData = [
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "See terms and conditions",
    title: "We have a surprise for you",
  },
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "Start streaming now",
    title: "Watch The Rings of Power",
  },
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "Find out more",
    title: "Unlimited Streaming",
  },
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "Browse Kindle Unlimited",
    title: "More titles to explore",
  },
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "See more",
    title: "Browse Kindle Unlimited",
  },
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "See the deals",
    title: "Spring Sale",
  },
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "See more",
    title: "Echo Buds",
  },
  {
    id: generateId(),
    image: `../images/home_grid_${lastID}.jpg`,
    link: "Learn more",
    title: "Family Plan: 3 months free",
  },
];
export default HomePageCardData;
