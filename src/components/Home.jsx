import './Home.css';
import '../assets/img.webp'
import MainLayout from '../layouts/Mainlayout.jsx';

const Home = (ChangeCurrentPage={ChangeCurrentPage}) => {
    return ( 
        <>
            <MainLayout ChangeCurrentPage>
                <h1>SHKN</h1>
            </MainLayout>
        </>
     );
}

export default Home;