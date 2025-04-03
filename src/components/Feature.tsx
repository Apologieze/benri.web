/* eslint-disable tailwindcss/no-custom-classname */
import React, { FC } from "react"

type Props = {
  imgUrl: string
  align: "left" | "right"
  heading: string
  text: React.ReactNode
  className?: string
}

const Feature: FC<Props> = ({ imgUrl, align, className = "", heading, text }) => {
  return (
    <div className={
      `sm:flex sm:items-center ${className
      } ${align === "left" ? "" : "self-end sm:float-none sm:flex-row-reverse"}`
    }>
      <div className={`relative max-w-md p-2 md:max-w-lg lg:max-w-xl xl:max-w-2xl ${align === "left" ? "mr-5 rounded-r-md bg-primary sm:mr-2" : "ml-5 rounded-l-md bg-secondary sm:ml-2"}`}>
        <div className={`sm:shadow-[0_0_170px_80px_#9CBE5D absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2 ${align === "left" ? "shadow-[0_0_170px_80px_#CEBB5B] xs:shadow-[0_0_170px_120px_#CEBB5B] md:shadow-[0_0_170px_120px_#CEBB5B] lg:shadow-[0_0_700px_160px_#CEBB5B]" : "shadow-[0_0_170px_80px_#9CBE5D] xs:shadow-[0_0_170px_120px_#9CBE5D] md:shadow-[0_0_170px_120px_#9CBE5D] lg:shadow-[0_0_700px_160px_#9CBE5D]"}`} />
        <img className="rounded-md" src={imgUrl} alt="" />
      </div>
      <div className={`mx-3 mt-3 max-w-md md:max-w-sm lg:mx-6 xl:mx-20 xl:max-w-md ${align === "right" ? "text-right sm:text-left" : null}`}>
        <h2 className={`mb-1 text-xl sm:text-2xl xl:text-4xl ${align === "left" ? "text-secondary" : "text-primary"}`}>
          {heading}
        </h2>
        <p className="xl:text-xl">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Feature