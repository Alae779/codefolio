import './Header.module.css';
export default function Header(props){
    return (
        <div className="headercontent">
            <h1>{props.name}'s Portfolio</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
        </div>
    )
}