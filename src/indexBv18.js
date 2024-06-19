import React from "react";
// import ReactDOM from "react-dom/client"; //react v18
import ReactDOM from "react-dom";//react before v18

function App() {
    return <h1>React App !!!!</h1>;
}

//react v18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

//react before v18
ReactDOM.render(<App />, document.getElementById('root'));