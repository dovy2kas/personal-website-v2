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
import Service from './components/service';
import FRONTEND from './img/tech/frontend.svg';
import BACKEND from './img/tech/backend.svg';
import PENTEST from './img/tech/pentest.svg';

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
        <section id="services" className="w-full">
          <SectionTitle title="Services"></SectionTitle>
          <div className="flex md:flex-row flex-col justify-between md:space-x-8 p-10 flex-1">
            <Service icon={FRONTEND} title="Frontend development" content="In the realm of frontend development, I specialize in creating visually appealing, user-friendly, and responsive web interfaces. Utilizing modern frameworks and technologies I ensure that the websites I develop are not only aesthetically pleasing but also provide a seamless user experience across all devices and browsers. My focus is on crafting clean, efficient, and maintainable code that brings designs to life and enhances user engagement."></Service>
            <Service icon={BACKEND} title="Backend development" content="On the backend side, I offer robust and scalable solutions that power the core functionality of web applications. My expertise includes working with server-side languages such as Node.js or Python as well as frameworks like Express and Flask. I am proficient in designing and managing databases, ensuring data integrity, security, and performance. By implementing RESTful APIs and integrating third-party services, I build backend systems that are reliable, efficient, and ready to scale."></Service>
            <Service icon={PENTEST} title="Penetration testing" content="In addition to web development, I provide comprehensive penetration testing services to identify and mitigate security vulnerabilities in your systems. With a strong background in ethical hacking and cybersecurity, I conduct thorough assessments of your network, applications, and infrastructure."></Service>
          </div>

        </section>
        <section id="contact" className="flex text-center w-full justify-center">
          <SectionTitle title="Contact"></SectionTitle>
        </section>
        <Footer></Footer>
      </div>
  );
}

export default App;
