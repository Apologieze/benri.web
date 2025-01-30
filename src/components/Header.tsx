import { Github } from "./icons"
import Logo from "./Logo"

const Header = () => {
  return <header className="relative z-[1] flex max-w-screen-pc items-center justify-between px-[25px] py-1">
    <div className="absolute left-0 top-0 z-[-1] h-52 w-full max-w-52 bg-primary blur-[300px]" />
    <Logo link size="sm" />
    <Github
      className="size-5 fill-primary"
      url="https://github.com/Apologieze/AnimeGUI"
    />
  </header>
}

export default Header