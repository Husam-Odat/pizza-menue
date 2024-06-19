import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

function App() {
    return (
        <div className='card'>
            <Avatar />
            <div className='data'>
                <Intro />
                <Skillslist />
            </div>
        </div>
    );
}

function Avatar() {
    return (<div className='avatar'> <img className='avatar' src='./DSC05702000.jpg' alt='Avatar' /> </div>);
}
function Intro() {
    return (
        <div>
            <h1>Husam Odat</h1>
            <p>
                Passionate Full Stack Web Developer with a strong foundation in both front-end and back-end Technologies.
                I learned in Active learning, dynamic environments and delivered 12 projects with high-quality, user-focused
                solutions. I'm always eager to learn, adapt, and take on new challenges to stay at the forefront of this ever
                evolving field.
            </p>
        </div>
    );

}
function Skillslist() {
    return (
        <div className='skill-list'>
            <Skill skill="Full Stack Developer" emoji="😀" color="#147852" />
            <Skill skill="AI Tools" emoji="😎" color="#9ad831" />
            <Skill skill="React Js" emoji="👍" color="#1eb0d2" />
            <Skill skill="Laravel" emoji="💪" color="rgb(200,200,5)" />
            <Skill skill="Python" emoji="👏" color="#228855" />
            <Skill skill="WordPress" emoji="🤞👨‍💻" color="#604789" />
            <Skill skill="Database Administrator" emoji=" 🌹" color="#777777" />
            <Skill skill="PHP" emoji="📌" color="lightblue" />
            <Skill skill="Power BI" emoji="📢" color="#ced831" />
            <Skill skill="AWS Certified" emoji="💎" color="#887799" />
        </div>

    );
}//colorHelper.pickerForm
function Skill(props) {
    return (
        <div className='skill' style={{ backgroundColor: props.color }} ><span>{props.skill} </span><span>{props.emoji} </span></div>
    );

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


