import { FC } from "react"

type Props = {
  imgUrl: string
  align: "left" | "right"
  className?: string
}

const Feature: FC<Props> = ({ imgUrl, align, className = "" }) => {
  return (
    <div className={
      `sm:flex sm:items-center sm:justify-start ${className
      } ${align === "left" ? "" : ""}`
    }>
      <div className="mr-5 rounded-r-md bg-primary p-2 sm:mr-2 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <img src={imgUrl} alt="" />
      </div>
      <div className="mx-3 mt-3 md:max-w-sm lg:max-w-md">
        <h2 className="text-xl text-secondary sm:text-2xl xl:text-4xl">
          01 Feature
        </h2>
        <p className="xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  )
}

export default Feature