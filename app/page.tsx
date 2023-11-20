import Link from "next/link";
import Office from "./babylon/Office";

export default function Home() {
  return (
    <>
      <menu className="absolute text-white top-0 left-0 p-4 2xl:p-8 sm:text-2xl 2xl:text-3xl hover:font-semibold">
        <ul>
          <Link className="" href="/projects">
            Projects
          </Link>
        </ul>
      </menu>
      <header className="absolute right-0 bottom-0 p-4 2xl:p-8">
        <h1 className="text-white text-3xl sm:text-4xl 2xl:text-6xl font-bold text-end">
          Bérenger Makita
        </h1>
        <h2 className="text-end sm:text-2xl 2xl:text-3xl">
          Fullstack & 3D/XR Web Development
        </h2>
      </header>
    </>
  );
}
