import React from "react";
import  ReactDOM  from "react-dom/client";

const head = <h1> Hello world using React </h1>;//single line jsx
const head1 = (
    <h2 className="head1">
        H2 element
    </h2>
)
const head2 =(  //multi line jsx
    <div>
        <h3 className="head2">
            I am in h3             
        </h3>
    </div>
);


const Title = () => {  return <h1>Title component</h1> }
const FunComponent = () =>(
    <div>
        {head1} //acessing js code using "{}"
        {head2}
        {Title()}
        <Title/>
        <h1>Example functional component</h1>
    </div>
);
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
const root1 = ReactDOM.createRoot(
    document.getElementById("root1")
)
const root2= ReactDOM.createRoot(
    document.getElementById("root2")
)
const root3= ReactDOM.createRoot(
    document.getElementById("root3")
)
root.render(head);
root1.render(head1);
root2.render(head2);
root3.render(<FunComponent/>);