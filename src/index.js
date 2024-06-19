import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className="container">
            <h1>React App !!!!</h1>
            <Header />
            <Menu />
            <Footer />
        </div>
    );

}

function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
    const style = {};
    // return <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>Fast React Pizza Co.</h1>

    return (
        <header className="header">

            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );

};

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const pizzaslen = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {/* end operator */}
            {/* {pizzaslen > 0 &&
                <ol className="pizzas">
                    {pizzaData.map(pizza => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
                </ol>
            } */}

            {/* ternary operator */}

            {pizzaslen > 0 ? (
                // react fregmint
                // <React.Fragment key={'jjfdndf'}>
                <>
                    {/* ctrl i // for imojies */}
                    <p>
                        Authenic Italian cuisine. 6 creative dishes to choose from.All from our stone even,all organic, all delicious .
                        😋</p>

                    <ol className="pizzas">
                        {pizzaData.map(pizza => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
                    </ol>
                </>

            )

                : (< p > We are still working in our menu. Please come back later :) </p>)
            }




            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                price={10}
                photoName="pizzas/spinaci.jpg"
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                price={12}
                photoName="pizzas/funghi.jpg"

            /> */}

        </main >
    );
};

function Pizza({ pizzaObj }) {
    // console.log(props);

    // if (props.pizzaObj.soldOut) {
    // if (pizzaObj.soldOut) {
    //     return null;
    // }
    return (
        <li className={`pizza  ${pizzaObj.soldOut ? "sold-out" : ""}`} >
            {/* <div class="image-container"></div> */}
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>

                <h3>{pizzaObj.name}</h3>
                <p>
                    {pizzaObj.ingredients}
                </p>
                {/* <span>{Number(props.price) + 3}</span> */}
                {/* <span>{Number(pizzaObj.price)}</span> */}
                {
                    pizzaObj.soldOut ? (<span>SOLD OUT</span>) : (<span>{pizzaObj.price}</span>)


                }
            </div>
        </li>
    );
}
function Footer() {
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 2;
    const closeHour = 7;
    const isOpen = hour > openHour && hour < closeHour;
    console.log(isOpen);
    // if (hour > openHour && hour < closeHour) {
    //     alert("We are currently Open so Welcome !!!! ");
    // }
    // else {
    //     alert("Sorry !! We are closed . ");
    // };
    // if (!isOpen) {
    //     return (<p> We are happy to welcome you between {openHour}:00 to {closeHour}:00</p>);
    // }

    return (
        <footer className="footer">
            {/* that means if true execute the componenet  */}
            {/* {isOpen && ( */}
            {isOpen ? (
                <Order openHour={openHour} closeHour={closeHour} />


                // <div className="order">
                //     <p>
                //         We are open until {closeHour}:00. come visit us or order online.
                //     </p>
                //     <button type="button" className="btn">Order</button>
                //     {/* {new Date().toLocaleTimeString()} We are Currently Open */}

                // </div>
            ) : (<p> We are happy to Welcome you between {openHour}:00 to {closeHour}:00</p>)}
        </footer>
        // return React.createElement("footer", null, "We are Currently Open");
    );
};

function Order({ openHour, closeHour }) {
    return (

        <div className="order">
            <p>
                We are open from {openHour}:00 to {closeHour}:00. come visit us or order online.
            </p>
            <button type="button" className="btn">Order</button>
            {/* {new Date().toLocaleTimeString()} We are Currently Open */}

        </div>
    );


}
// const Footer0 = () => { };


// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


