const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "Hello i am child 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "Hello i am child 2")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
