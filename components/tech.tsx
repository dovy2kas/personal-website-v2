import ScrollAnimation from 'react-animate-on-scroll';

type Props = {
    img: string;
    title: string;
}

function getRandomDelay() {
    let min: number = 50;
    let max: number = 1000;
    return Math.random() * (max - min) + min;
}

function Tech(props: Props) {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={getRandomDelay()}>
            <div className="flex flex-col justify-center items-center size-24 rounded-xl border-2 border-pink bg-background bg-opacity-30 p-5 mb-3">
                <p className="font-bold text-white">{props.title}</p>
                <img className="h-auto max-w-full" src={props.img}></img>
            </div>
        </ScrollAnimation>
    )
}

export default Tech;