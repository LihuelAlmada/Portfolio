import React from "react";
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Lihuel Almada",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
  ],
  loop: true,
  delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://lh3.googleusercontent.com/GtRYBjGDFoHrrFj83I3zcSc7JEW9e5p3heKb8z8zCgPDkb6SkeGjZeYw9szKfLHIrgPUNCgkpTSekJApcwJR9bN_d-BpX7iPM57gHmlGpvI6yFSvtHSYp8sDmIq53s0mqQ=w1280"
        alt=""
        />
      <h1>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  )
  }
export default Hero;