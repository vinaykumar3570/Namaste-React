/* <div id="parent">
  <div class="child">
    <h1> This is a heading. </h1>
  </div>
</div>; */

let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "heading" }, "This is a heading"),
    React.createElement("h2", { id: "heading" }, "This is a heading2")
  ])
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
