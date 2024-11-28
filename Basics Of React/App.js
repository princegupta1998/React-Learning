import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Logo from "./src/assets/Devoprince-logo-.png";
import User from "./src/assets/icon_user.svg";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement("h1", {}, "Hello i am child 1")
//   ),
//   React.createElement(
//     "div",
//     { id: "newChild" },
//     React.createElement("h2", {}, "Hello i am child 2")
//   ),
// ]);

// JSX
// const JsxCode = () => (
//   <h1>
//     Hello from JSX
//     <p>i dont know what you are saying</p>
//   </h1>
// );

// const Title = () => (
//   <div>
//     <h3>Hello Title</h3>
//     <JsxCode />
//     {JsxCode()}
//     <JsxCode></JsxCode>
//   </div>
// );
// // console.log(typeof heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Title />);

// using React.createElement
// const title = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "Hello i am from H1"),
//   React.createElement("h2", {}, "I am from H2"),
//   React.createElement("h3", {}, "Hello i am from h3"),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);

// // Using JSX
// const title2 = (
//   <div className="title">
//     {title}
//     <h1>Hello i am from JSX H1</h1>
//     <h2>Hello i am from JSX H2</h2>
//     <h3>Hello i am from JSX H2</h3>
//   </div>
// );

// root.render(title2);

// // using functional component
// const TitleFunction = () => {
//   return (
//     <div className="title">
//       {title2}
//       <h1>Hello I am from functional base component h1</h1>
//       <h2>Hello I am from functional base component h2</h2>
//       <h3>Hello I am from functional base component h3</h3>
//     </div>
//   );
// };

// root.render(<TitleFunction />);

// Header using JSX and functional based component

const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Devoprince" loading="lazy" />
        </a>
      </div>
      <div className="search_bar">
        <input type="search" placeholder="Search for my skills" />
        <button type="submit" className="button">
          Search
        </button>
      </div>
      <div className="usericon">
        <img src={User} alt="Login" loading="lazy" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
