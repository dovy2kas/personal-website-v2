import './styles/App.scss';
import Background from './components/background';
import Title from './components/title';
import Navbar from './components/navbar';
import SectionTitle from './components/section-title';
import Project from './components/project';
import tThumb from './img/transacto/landing.jpg';
import gThumb from './img/gambtopia/roulette.jpg';
import './styles/index.css';
import About from './components/about';
import Footer from './components/footer';

function App() {
  
  return (
      <div id="home">
        <section className="flex text-center w-full h-screen justify-center items-center">
          <div className='relative w-full h-screen'>
            <Title></Title>
            <Background />
          </div>

        </section>
        <Navbar></Navbar>
        <section id="about" className="w-full">
          <SectionTitle title={"About"}></SectionTitle>
          <About></About>
        </section>
        <section id="projects" className="w-full">
          <SectionTitle title="Projects"></SectionTitle>
            <Project title="Transacto" desc="A banking website which allows it's users to send and receive, as well as deposit and withdraw funds. This project was made using flask-socketio, nginx, gunicorn and a MySQL database." image={tThumb} alt="Transacto thumbnail" animateIn="fadeInLeft" animateOut="fadeOutRight" url="https://github.com/dovy2kas/transacto"></Project>
            <Project title="Gambtopia" desc="A gambling website which has two modes: roulette and crash. While building it I learned how to transfer live data, verify the user actions and prove that bets were fair using cryptography. This project was made using flask-socketio, nginx, gunicorn, MySQL and ReCaptcha." image={gThumb} alt="Gambtopia thumbnail" animateIn="fadeInRight" animateOut="fadeOutLeft" url="https://github.com/dovy2kas/gambtopia"></Project>

        </section>
        <section id="services" className="flex text-center w-full justify-center">
          <SectionTitle title="Services"></SectionTitle>
        </section>
        <section id="contact" className="flex text-center w-full justify-center">
          <SectionTitle title="Contact"></SectionTitle>
        </section>
        <Footer></Footer>
      </div>
  );
}

export default App;
