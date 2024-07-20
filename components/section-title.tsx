import '../styles/index.css'
import '../styles/App.scss'

interface SectionTitleProps {
    title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div>
            <h1 className="section-title text-6xl font-bold text-white mt-40">{title}</h1>
        </div>
        
    );
}

export default SectionTitle;