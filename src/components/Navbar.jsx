import './Header.module.css';
export default function Navbar(ChangeCurrentPage){
    return (
        <div className="headercontent">
            {/* <h1>Alae's Portfolio</h1> */}
            <button onClick={ () =>ChangeCurrentPage("Home")}>Home</button>
            <button onClick={ () =>ChangeCurrentPage("Expe")}>Expe</button>
            <button onClick={ () =>ChangeCurrentPage("About")}>About</button>
        </div>
    )
}