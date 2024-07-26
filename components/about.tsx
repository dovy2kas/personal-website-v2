import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Tech from './tech';
import HTML from '../img/tech/html.png';
import JS from '../img/tech/js.png';
import CSS from '../img/tech/css.png';
import GIT from '../img/tech/git.png';
import REACT from '../img/tech/react.png';
import PY from '../img/tech/py.png';
import TAILWIND from '../img/tech/tailwind.png';
import MYSQL from '../img/tech/mysql.png';
import NODE from '../img/tech/node.png';

function About() {

    return <div className="flex md:flex-row flex-col  justify-center space-between">
        {/*<ScrollAnimation animateIn={props.animateIn} animateOut={props.animateOut} offset={500}>*/}
        <div className="w-2/4 mt-20 flex flex-row">
            <div className="ml-20 max-w-2xl">
                <p className="text-3xl text-white font-bold">Welcome to my website</p>
                <p className="text-2xl text-white mb-3">I specialize in building modern websites. My fascination with technology began at a young age, that's why I am always looking to learn new things. As a curious problem solver, I thrive diving into the intricacies of code, hardware and networking, always seeking for new challenges.</p>
            </div>
            
        </div>
        <div className="w-2/4 mt-20 flex flex-row">
        
            <div className="ml-20 max-w-2xl">
                <Tech img={HTML} title="HTML"></Tech>
                <Tech img={CSS} title="CSS"></Tech>
                <Tech img={JS} title="JavaScript"></Tech>
            </div>
            <div className="ml-20 max-w-2xl">
                <Tech img={PY} title="Python"></Tech>
                <Tech img={REACT} title="React"></Tech>
                <Tech img={TAILWIND} title="Tailwind"></Tech>
            </div>
            <div className="ml-20 max-w-2xl">
                <Tech img={MYSQL} title="MySQL"></Tech>
                <Tech img={GIT} title="Git"></Tech>
                <Tech img={NODE} title="Node"></Tech>
            </div>
            
            
        </div>
        {/*</ScrollAnimation>*/}

        
        </div>
}

export default About;