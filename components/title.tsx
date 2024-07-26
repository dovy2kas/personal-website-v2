import '../styles/index.css'
import AnimatedText from 'react-animated-text-content';

function Title() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
            <AnimatedText
                type="words" // animate words or chars
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="lights"
                interval={0.06}
                duration={1}
                tag="p"
                className="animated-paragraph text-6xl font-bold text-white"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
                >
                Hello, my name is Dovydas!
                </AnimatedText>
                <AnimatedText
                type="words" // animate words or chars
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="lights"
                interval={0.06}
                duration={1}
                tag="p"
                className="animated-paragraph text-4xl text-white"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
                >
                I'm a web developer and a cybersecurity enthusiast.
                </AnimatedText>
        </div>
        
    );
}

export default Title;