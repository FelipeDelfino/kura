"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

import Image from "next/image";
import LogoKura from '../../../public/logo-kura.png'
import LogoKuraB from '../../../public/logo-kura-black.png'
import LogoKuraW from '../../../public/logo-kura-white.png'



export default function Cubic() {
    const ref = useRef<HTMLDivElement>(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 20000) * 200
        const y = (1 + Math.sin(t / 2000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front">
                    <Image
                        src={LogoKuraB}
                        alt="Logo Kura"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="side left">
                    <Image
                        src={LogoKura}
                        alt="Logo Kura"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="side right">
                    <Image
                        src={LogoKura}
                        alt="Logo Kura"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="side top">
                    <Image
                        src={LogoKuraW}
                        alt="Logo Kura"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="side bottom">
                    <Image
                        src={LogoKuraW}
                        alt="Logo Kura"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="side back">
                    <Image
                        src={LogoKura}
                        alt="Logo Kura"
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`

        :root {
            --hue-1-transparent: rgb(220, 163, 4);
            --hue-3-transparent: rgba(220, 163, 4);
            --hue-2-transparent: rgba(100, 100, 100);
            --hue-4-transparent: rgba(100, 100, 100);
            --hue-5-transparent: rgba(0, 0, 0);
            --hue-6-transparent: rgba(0, 0, 0);
        }

            
        .container {
            perspective: 1000px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.95;
            display:flex;
            align-items: center;
            justify-content: center;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: var(--hue-1-transparent);
            display:flex;
            align-items: center;
            justify-content: center;
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: var(--hue-2-transparent);
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: var(--hue-3-transparent);
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: var(--hue-4-transparent);
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background-color: var(--hue-5-transparent);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background-color: var(--hue-6-transparent);
        }

    `}</style>
    )
}