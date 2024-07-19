import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
    rectBounce,
} from "@tsparticles/engine";

function Background() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        background: {
            color: {
                value: "#282a36",
            },
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
                    enable: true,
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

        detectRetina: true,
        }
    return (
        <Particles options={options} />
    );
    }

export default Background;
