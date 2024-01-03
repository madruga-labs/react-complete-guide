import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomeDesc() {
  return reactDescDescriptions[
    Math.floor(Math.random() * reactDescDescriptions.length)
  ];
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getRandomeDesc()} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
