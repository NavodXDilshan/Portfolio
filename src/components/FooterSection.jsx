import React from 'react'
import Image from "next/image"
import Link from "next/link"


const FooterSection = () => {
  return (
<section id="contact">
  <div className="flex flex-col bg-gradient-to-br from-purple-950 via-blue-950 to-pink-950 px-5 py-5">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Image  className="invert" src="/images/gmail.svg" alt="Gmail" width={50} height={50} />
        <p className="text-white text-base">k.m.navoddilshan@gmail.com</p>
      </div>

    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-11">
        <Link href="https://github.com/NavodXDilshan">
          <div className="flex items-center gap-2">
            <Image src="/images/github-icon.svg" alt="github" width={50} height={50} />
            <p className="text-white text-base">GitHub</p>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/navod-dilshan-105156225/">
          <div className="flex items-center gap-2">
            <Image src="/images/linkedin-icon.svg" alt="linkedin" width={50} height={50} />
            <p className="text-white text-base">Linkedin</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default FooterSection