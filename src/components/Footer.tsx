import { Github } from "./icons"
import Logo from "./Logo"
import { Link } from "react-router-dom"

const Footer = () => {
  return <footer className="relative z-[2] mx-auto mb-2 mt-10 flex w-full max-w-screen-pc flex-col justify-between px-[25px] py-1 sm:flex-row sm:items-center">
    <div className="flex w-full justify-between sm:hidden">
      <Logo link size="sm" />
      <Github
        className="size-5 fill-primary"
        url="https://github.com/Apologieze/AnimeGUI"
      />
    </div>

    <Logo link size="sm" className="hidden sm:block" />

    <div className="mt-1 flex size-full w-fit sm:mt-0 sm:items-center sm:gap-2">
      <Github
        className="hidden size-5 fill-primary sm:block"
        url="https://github.com/Apologieze/AnimeGUI"
      />
      <div className="hidden h-5 w-px bg-primary sm:block" />
      <p className="text-sm text-primary sm:text-base">
        by
        <Link target="_blank" to="https://github.com/Apologieze" className="mx-1 text-secondary">
          @apologieze
        </Link>
        and
        <Link target="_blank" to="https://github.com/vshakitskiy" className="mx-1 text-secondary">
          @wiskiy
        </Link>
      </p>
    </div>
  </footer>
}

export default Footer