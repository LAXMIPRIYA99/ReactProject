import React from "react";
import  ReactDOM  from "react-dom";

const head = React.createElement(
    "h1", {} , "Hello world using React"
)
const head1= [React.createElement(
    "h1", {id:"head1"} , "h1 element"
), React.createElement(
    "h2" , {id:"head2"}, "h2 element"
)]
const head2 = React.createElement(
    "div", {} , React.createElement(
      "h3", {}, "I am in h3 inside div"
    )
)
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
const root1 = ReactDOM.createRoot(
    document.getElementById("root1")
)
const root2= ReactDOM.createRoot(
    document.getElementById("root2")
)
root.render(head);
root1.render(head1);
root2.render(head2);