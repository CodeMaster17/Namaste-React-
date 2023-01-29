import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
    "h1",
    {
        id: "title",
    },
    "Namaste everyone!"
);
const heading2 = React.createElement(
    "h1",
    {
        id: "title",
    },
    "Namaste everyone 2!"
);
const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1, heading2]
);
// since here we are modifying DOM, therefore we use ReactDOM library and use createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing element inside root
// react will replace everything present in html with all the things that we give in render
root.render(container);  