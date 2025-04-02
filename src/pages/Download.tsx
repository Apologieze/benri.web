import { System } from "@/types"
import DownloadButton from "@components/DownloadButton"
import Logo from "@components/Logo"
import { useState } from "react"
import { Download as DownloadIcon } from "@/components/icons"
import { Link } from "react-router-dom"

const SYSTEMS = ["Windows", "Mac", "Linux"] as const
const SystemToLink = new Map<System, string>([
  ["Windows", "download"],
  ["Mac", "git"],
  ["Linux", "git"]
])

const Download = () => {
  const [system, setSystem] = useState<System>("Windows")

  return <main className="flex flex-1 items-center lg:mx-auto lg:w-full lg:max-w-screen-pc">
    <section className="mx-4 mt-4 w-full sm:mx-10 md:mx-20 lg:mx-40 lg:w-auto">
      <h1 className="items-center gap-1 text-4xl sm:flex sm:text-5xl lg:text-6xl">Download
        <Logo size="lg" />
      </h1>
      <p className="mt-2 max-w-md">
        Download the latest version of Benri for your platform
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
      <div className="flex w-full">
        <Link target="_self" to={`https://uwu.apologize.fr/${SystemToLink.get(system)}`} download>
          <button className="mt-6 flex w-full gap-1 rounded-md bg-secondary px-4 py-2.5 md:w-auto">
            Download for {system}
            <DownloadIcon className="mx-auto"/>
          </button>
        </Link>
      </div>
    </section>
  </main >
}

export default Download
