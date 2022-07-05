import "./styles.css";
// import NavLink from "./components/pages/NavLink"
import Header from "./components/Header/Header.js"
import Collection from "./components/Main/Collection";
import HeroSection from "./components/hero/HeroSection"
export default function App() {
  const Products = [
    {
      id: "e1",
      name: "Fish",
      price: 30,
      weight: 1.5
    },

    {
      id: "e2",
      name: "chicken",
      price: 4000,
      weight: 35
    },
    {
      id: "e3",
      name: "Goat",
      price: 25000,
      weight: 60
    },
    {
      id: "e4",
      name: "Pig",
      price: 50000,
      weight: 90
    }
  ];
  return (
    <div>
      <Header headerText='FarmNet'/>
      <HeroSection/>
      <Collection pro={Products} />
    </div>
  );
}
