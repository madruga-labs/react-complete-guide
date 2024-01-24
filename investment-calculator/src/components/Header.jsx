import investentLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investentLogo} alt="investment calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
