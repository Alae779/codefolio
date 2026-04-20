import './Home.css';
import '../assets/img.webp'
const Home = (props) => {
    return ( 
        <div className="infos">
        <h2>Hello, <br />
         I'm {props.name} Amimi <br />
         I am a Full Stack Developer who builds modern and responsive web applications, focusing on clean code, performance, and delivering a smooth user experience.</h2>
        <section className='pic'></section>
        </div>
     );
}

export default Home;