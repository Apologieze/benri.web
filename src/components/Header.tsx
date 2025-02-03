import { Github } from "./icons"
import Logo from "./Logo"

const Header = () => {
  return <header className="relative z-[2] mx-auto flex w-full max-w-screen-pc items-center justify-between px-[25px] py-1">
    {/* <div className="absolute left-0 top-0 h-40 w-full max-w-40 bg-primary blur-[150px] md:block lg:size-52 lg:max-w-none lg:blur-[180px] xl:blur-[230px]" /> */}
    <Logo link size="sm" />
    <Github
      className="size-5 fill-primary"
      url="https://github.com/Apologieze/AnimeGUI"
    />
  </header>
}

export default Header