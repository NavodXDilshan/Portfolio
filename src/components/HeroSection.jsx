import React from 'react'
import Image from "next/image"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT: Text */}
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Navod</h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Tailwind won’t automatically know about CSS variables, so you may need to
            integrate them into the Tailwind config if you want to use them in
            class utilities.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#e8e8e8] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.png"
              alt="hero"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
