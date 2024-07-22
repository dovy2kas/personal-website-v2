import '../styles/index.css'
import '../styles/App.scss'

type Props = {
    title: string
}

function SectionTitle(props: Props) {
    return (
        <div className="flex w-full justify-center items-center">
            <h1 className="section-title text-6xl font-bold text-white mt-40">{props.title}</h1>
        </div>
        
        
    );
}

export default SectionTitle;