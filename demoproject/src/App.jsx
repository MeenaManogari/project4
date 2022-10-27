import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import Cards from "./components/cards";
import Colors from "./components/color";
import Lapmodels from "./components/nextcards";
import Appp from "./components/todolist";
import Notify from "./components/imgtodo";
function App() {
  const products = [
    { name: "Nike Shoes", price: 560 },
    { name: "Puma Shoes", price: 590 },
    { name: "Addidas Shoes", price: 600 },
    { name: "Van heusan Shoes", price: 980 },
  ];

  const people = [
    { Name: "Akshaya", Place: "Tirunelveli" },
    { Name: "Abi", Place: "Chennai" },
    { Name: "Aravind", Place: "Bangalore" },
    { Name: "Kalyani", Place: "Delhi" },
  ];

  const [sidebarIsOn, setSidebarState] = React.useState(false);

  const hamburger = (
    <b
      className="hamburger"
      onClick={(e) => {
        e.preventDefault();
        setSidebarState(true);
      }}
    >
      MENU
    </b>
  );

  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_menu">
        <h4>Menu</h4>
        <b
          onClick={(e) => {
            e.preventDefault();
            setSidebarState(false);
          }}
        >
          close
        </b>
      </div>
    </div>
  );

  const navbar = (
    <div className="App">
      <div className="header">
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <div className="links" id="links">
          <a href="#">Home</a>
          <a href="#">Aboutus</a>
          <a href="#">Contactus</a>
          <a href="#">Help</a>
          <button>Login</button>
          {hamburger}
        </div>
      </div>
    </div>
  );

  const hero = (
    <div className="hero_main">
      <h1>Hero</h1>
    </div>
  );

  const features = (
    <div>
      <h1>Features</h1>
    </div>
  );

  const footer = (
    <div>
      <h1>footer</h1>
    </div>
  );

  return (
    <React.Fragment>
      {sidebarIsOn && sidebar}
      {navbar}
      {hero}
      <Colors />
      {features}

      <div className="person">
        {people.map((persons, index) => {
          return (
            <Lapmodels key={index} Name={persons.Name} Place={persons.Place} />
          );
        })}
      </div>
      {footer}

      <div className="card_holder">
        {products.map((product, index) => {
          return (
            <Cards key={index} name={product.name} price={product.price} />
          );
        })}
      </div>
      <Appp />
      <Notify />
    </React.Fragment>
  );
}

export default App;
