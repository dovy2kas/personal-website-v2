type Props = {
    url: string;
    text: string;
}

function Button(props: Props) {
    return <a className="px-6 py-2 bg-pink text-white font-bold rounded hover:bg-purple transition" href={props.url} target="_blank">{props.text}</a>
}

export default Button;