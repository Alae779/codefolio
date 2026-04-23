import Header from '../components/Navbar.jsx';
function MainLayout({}){
    return (
        <div>
            <Header/>
                <div>
                    {children}
                </div>
        </div>
    )
}
export default MainLayout;
