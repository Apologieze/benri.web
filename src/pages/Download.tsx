import { System } from "@/types"
import DownloadButton from "@components/DownloadButton"
import Logo from "@components/Logo"
import { useState } from "react"
import { Download as DownloadIcon } from "@/components/icons"
import { Link } from "react-router-dom"

const SYSTEMS = ["windows", "mac", "linux"] as const

const Download = () => {
  const [system, setSystem] = useState<System>("windows")

  return <main className="flex flex-1 items-center lg:mx-auto lg:w-full lg:max-w-screen-pc">
    <section className="mx-4 mt-4 w-full sm:mx-10 md:mx-20 lg:mx-40 lg:w-auto">
      <h1 className="items-center gap-1 text-4xl sm:flex sm:text-5xl lg:text-6xl">
        Download
        <Logo size="lg" />
      </h1>
      <p className="mt-2 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link to="https://github.com/Apologieze/Benri/issues" target="_blank" className="mt-1 text-secondary underline">
        Troubleshooting?
      </Link>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row md:gap-9">
        {SYSTEMS.map(s => (
          <DownloadButton
            system={s}
            curr={system}
            onClick={() => setSystem(s)}
          />
        ))}
      </div>
      <Link target="_self" to="https://uwu.apologize.fr/download" download>
        <button className="mt-5 w-full rounded-md bg-secondary px-10 py-2 md:w-auto">
          <DownloadIcon className="mx-auto" />
        </button>
      </Link>
    </section>
  </main >
}

export default Download
