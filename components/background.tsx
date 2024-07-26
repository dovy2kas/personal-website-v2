import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    type ISourceOptions
  } from "@tsparticles/engine";

const Background = () => {
  
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadSlim(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);


    const options: ISourceOptions = useMemo(() => ({
        background: {
            color: {
                value: "#282a36",
            },
        },
        fullScreen: {
            enable: false,
            zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            collisions: {
                enable: true,
            },
            color: {
                value: ["#bd93f9", "#ff79c6", "#8be9fd", "#ff5555"],
            },
            move: {
                enable: true,
                speed: 1,
            },
            number: {
                density: {
                    enable: false,
                },
                value: 5,
            },
            opacity: {
                value: 0.8,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 300, max: 400 },
            },
        },

        detectRetina: false,
        }),
        [],
    );
    if (init){
        return (
            <Particles 
                options={options}
            />

        );
    }
    return <></>;

    }

export default Background;
