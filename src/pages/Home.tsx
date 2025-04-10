import Logo from "@components/Logo"
import { Link } from "react-router-dom"
import girlUrl from "@assets/girlie2.jpg"
import appUrl from "@assets/app2.jpg"
import speedBenri from "@assets/speedBenri.png"
import { Download } from "@components/icons"
import Feature from "@components/Feature"
import {ScrollTopArrowDown} from "@components/icons/ArrowDown.tsx"

const Home = () => {
  return <main className="relative z-[1] mb-20 mt-14">
    <section className="mx-auto flex min-h-fit max-w-screen-pc flex-col-reverse items-center justify-center sm:h-[83vh] sm:min-h-[660px] md:flex-row md:px-5">
      <div className="px-3 sm:px-24 md:max-w-md md:px-0 lg:max-w-[580px]">
        <Logo size="lg" />
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
          Open-source, cross-platform Anime streaming and tracking native app, built with Go
        </p>
        <Link to="/download" className="block w-fit">
          <button className="mt-5 flex gap-1 rounded-md bg-secondary px-5 py-2.5">
            <p>Download</p>
            <Download />
          </button>
        </Link>
      </div>
      <div className="relative z-[-1] after:absolute after:inset-0 after:shadow-girl md:max-w-sm lg:max-w-max lg:after:shadow-girl-lg">
        <div className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 sm:shadow-[0_0_500px_120px_#CEBB5B] lg:shadow-[0_0_600px_120px_#CEBB5B]" />
        <img src={girlUrl} className="" alt="" />
      </div>
    </section>
    <section className="mx-auto mt-16 md:max-w-[920px] lg:max-w-screen-pc-block">
      <div className="mx-3 overflow-hidden rounded-lg bg-gradient-to-bl from-primary to-secondary sm:mx-7 md:mx-5">
        <div className="relative mx-3 mb-0 mt-3 rounded-md sm:mx-6 sm:mt-6">
          <img
            src={appUrl}
            alt=""
            className="size-full rounded-md object-cover"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.1) 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)", maskSize: "100% 100%", WebkitMaskSize: "100% 100%"
            }}
          />
        </div>
      </div>
    </section>
    <section className="mx-auto mt-28 flex max-w-screen-pc flex-col">
      <Feature
        imgUrl={appUrl}
        align="left"
        heading="Integration with AniList"
        text={<div>Seamlessly integrates with AniList.<br></br>✅ Sync Your Watchlist, 📺 Track Episodes,<br></br>🔎 Search new anime and more.</div>}
      />
      <Feature
        imgUrl={speedBenri}
        align="right"
        className="mt-10"
        heading="Very Performant 🚀"
        text={<div>Benri was designed to be fast and efficient<br></br>100% made in Go without any web frontend technologies to ensure an extremely smooth experience on every platform.</div>}
      />
      <Feature
        imgUrl={appUrl}
        align="left"
        className="mt-10"
        heading="03 Feature"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </section>
    <ScrollTopArrowDown />
  </main>
}

export default Home
