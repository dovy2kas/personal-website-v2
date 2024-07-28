import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

function getRandomDelay() {
    let min: number = 100;
    let max: number = 300;
    return Math.random() * (max - min) + min;
}

type Props = {
    icon: string;
    title: string;
    content: string;
}

function Service(props: Props) {
    return <ScrollAnimation className="flex-1 w-full" animateIn="fadeInUp" animateOut="fadeOutUp" delay={getRandomDelay()}>
    <div className="flex flex-col justify-center items-center  rounded-2xl p-5 border-pink border-4 mt-10 h-full">
        <img src={props.icon} className="max-w-48 text-white"></img>
        <h2 className="text-3xl text-white font-bold">{props.title}</h2>
        <p className="text-lg text-white">{props.content}</p>
    </div>
    </ScrollAnimation>

}

export default Service;