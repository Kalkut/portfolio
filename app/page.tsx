import Link from "next/link";
import Office from "./babylon/Office";

export default function Home() {
  return (
    <>
      <nav className="absolute text-white top-0 left-0 p-4 2xl:p-8 sm:text-2xl 2xl:text-3xl">
        <Link className="hover:font-semibold" href="/projects">
          Projects
        </Link>
      </nav>
    </>
  );
}
