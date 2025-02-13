import Logo from "@components/Logo"
import { Link } from "react-router-dom"

const Download = () => {
  return <main className="flex flex-1 items-center">
    <section className="mx-4 sm:mx-10 md:mx-40">
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
    </section>
  </main>
}

export default Download
