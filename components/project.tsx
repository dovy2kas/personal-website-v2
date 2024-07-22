import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Button from './button';
type Props = {
    title: string;
    desc: string;
    image: string;
    alt: string;
    animateIn: string;
    animateOut: string;
    url: string;
}

function Project(props: Props) {

    return <div className="flex justify-center space-between">
        <ScrollAnimation animateIn={props.animateIn} animateOut={props.animateOut} offset={500}>
        <div className="mt-20 flex flex-row">
            <img src={props.image} alt={props.desc} className="max-w-4xl rounded-lg shadow-xl"></img>
            <div className="ml-20 max-w-2xl">
                <p className="text-3xl text-white font-bold">{props.title}</p>
                <p className="text-2xl text-white mb-3">{props.desc}</p>
                <Button url={props.url} text="Learn more" ></Button>
            </div>
            
        </div>
        </ScrollAnimation>

        
        </div>
}

export default Project;