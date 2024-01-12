
const parent = React.createElement(
    "div",{id : "parent" },
    React.createElement("div",{id : "child 1"},
    [React.createElement("h1",{},"I am an H1 tag"),
    React.createElement("h2",{},"I am H2 tag")],
    React.createElement("div",{id : "child 2"},
    [React.createElement("h1",{},"I am an H1 tag"),
    React.createElement("h2",{},"I am H2 tag")])
        
    
    )
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);