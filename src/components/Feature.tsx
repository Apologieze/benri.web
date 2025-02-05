import { FC } from "react"

type Props = {
  imgUrl: string
  align: "left" | "right"
  heading: string
  text: string
  className?: string
}

const Feature: FC<Props> = ({ imgUrl, align, className = "", heading, text }) => {
  return (
    <div className={
      `sm:flex sm:items-center ${className
      } ${align === "left" ? "" : "float-right sm:float-none sm:flex-row-reverse"}`
    }>
      <div className={`max-w-md p-2 md:max-w-lg lg:max-w-xl xl:max-w-2xl ${align === "left" ? "mr-5 rounded-r-md bg-primary sm:mr-2" : "ml-5 rounded-l-md bg-secondary sm:ml-2"}`}>
        <img className="rounded-md" src={imgUrl} alt="" />
      </div>
      <div className={`mx-3 mt-3 max-w-md md:max-w-sm lg:mx-6 xl:mx-20 xl:max-w-md ${align === "right" ? "text-right sm:text-left" : null}`}>
        <h2 className={`text-xl sm:text-2xl xl:text-4xl ${align === "left" ? "text-secondary" : "text-primary"}`}>
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