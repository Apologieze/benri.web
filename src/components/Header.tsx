import { Github } from "./icons"
import Logo from "./Logo"

const Header = () => {
  return <header className="relative z-[2] mx-auto flex w-full max-w-screen-pc items-center justify-between px-[25px] py-1">
    <div className="absolute left-20 top-20 shadow-[0_0_400px_60px_#9CBE5D] sm:shadow-[0_0_400px_80px_#9CBE5D] lg:shadow-[0_0_600px_120px_#9CBE5D]" />
    <Logo link size="sm" />
    <Github
      className="size-5 fill-primary md:size-6"
      url="https://github.com/Apologieze/Benri"
    />
  </header>
}

export default Header