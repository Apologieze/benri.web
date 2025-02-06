import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
  link?: boolean
  size?: "sm" | "lg"
  className?: string
}

type Size = {
  size: "sm" | "lg"
}

const Logo: FC<Props> = ({ link = false, size = "sm", className = "" }) => link
  ? <Link to="/" className={`z-[2] ${className}`}><Content size={size} /></Link>
  : <><Content size={size} /></>

const Content: FC<Size> = ({ size }) => {
  return <p className={`flex items-center text-primary ${size === "sm" ? "gap-0.5 text-base" : "gap-1 text-4xl sm:text-5xl lg:text-6xl"}`}>
    Benri <Icon size={size} />
  </p>
}

const Icon: FC<Size> = ({ size }) => {
  return <svg viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-primary ${size === "sm" ? "w-4" : "w-10 sm:w-12 lg:w-16"}`}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.73958 12.1875C4.36564 12.1875 4.0625 12.4906 4.0625 12.8646V52.1354C4.0625 52.5094 4.36564 52.8125 4.73958 52.8125H60.2604C60.6344 52.8125 60.9375 52.5094 60.9375 52.1354V12.8646C60.9375 12.4906 60.6344 12.1875 60.2604 12.1875H4.73958ZM0 12.8646C0 10.247 2.12198 8.125 4.73958 8.125H60.2604C62.878 8.125 65 10.247 65 12.8646V52.1354C65 54.753 62.878 56.875 60.2604 56.875H4.73958C2.12198 56.875 0 54.753 0 52.1354V12.8646Z" />
    <path d="M24.375 42.2071V22.7929C24.375 21.7215 25.5602 21.0744 26.4614 21.6538L41.5614 31.3609C42.3906 31.894 42.3906 33.106 41.5614 33.6391L26.4614 43.3462C25.5602 43.9256 24.375 43.2785 24.375 42.2071Z" />
  </svg>
}

export default Logo