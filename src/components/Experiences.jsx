import MainLayout from "../layouts/Mainlayout";
function Experiences({changeCurrentPage}){
    const projects = [];
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => projects = data);
    return (
       <>
       <MainLayout changeCurrentPage={changeCurrentPage}>
        <h1>Projects</h1>
        {
            projects.map(item => {return <h1>{item.title}</h1>})
        }
       </MainLayout>
       </>
    )
}