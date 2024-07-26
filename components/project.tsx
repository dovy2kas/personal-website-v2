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

    return <div className="flex justify-center space-between p-5">
        <ScrollAnimation animateIn={props.animateIn} animateOut={props.animateOut} offset={500}>
        <div className="mt-20 flex md:flex-row flex-col">
            <div className="flex justify-center items-center">
                <img src={props.image} alt={props.desc} className="object-scale-down aspect-video rounded-lg shadow-xl"></img>
            </div>

            <div className="md:ml-10">
                <p className="text-3xl text-white font-bold">{props.title}</p>
                <p className="text-2xl text-white mb-3">{props.desc}</p>
                <Button url={props.url} text="Learn more" ></Button>
            </div>
            
        </div>
        </ScrollAnimation>

        
        </div>
}

export default Project;