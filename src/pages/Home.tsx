import Logo from "@components/Logo"
import { Link } from "react-router-dom"
import girlUrl from "@assets/girlie.jpg"
import appUrl from "@assets/app.jpg"
import { Download } from "@components/icons"

const Home = () => {
  return <main className="relative z-[1] mt-14">
    <section className="mx-auto flex min-h-fit max-w-screen-pc flex-col-reverse items-center justify-center md:flex-row md:px-5">
      <div className="px-3 sm:px-24 md:max-w-md md:px-0 lg:max-w-[580px]">
        <Logo size="lg" />
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/download">
          <button className="mt-5 flex gap-1 rounded-md bg-secondary px-4 py-2">
            <p>Download</p>
            <Download />
          </button>
        </Link>
      </div>
      <div className="relative z-[-1] after:absolute after:inset-0 after:shadow-girl md:max-w-sm lg:max-w-max lg:after:shadow-girl-lg">
        {/* <div className="absolute left-1/2 top-1/2 z-[1] h-52 w-full max-w-52 -translate-x-1/2 -translate-y-1/2 bg-secondary blur-[220px]" /> */}
        <img src={girlUrl} className="" alt="" />
      </div>
    </section>
    <section className="mx-auto mt-16 md:max-w-[920px] lg:max-w-screen-pc-block">
      <div className="mx-3 max-h-[660px] overflow-hidden rounded-t-lg bg-gradient-to-bl from-primary to-secondary sm:mx-7 md:mx-5">
        <img src={appUrl} alt="" className="mx-auto mt-3 w-[90%] rounded-t-sm sm:mt-6 md:mt-10 lg:mt-12" />
      </div>
    </section>
  </main>
}

export default Home
