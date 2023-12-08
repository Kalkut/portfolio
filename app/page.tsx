import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className="absolute text-white top-0 left-0 p-4 2xl:p-8 2xl:text-3xl flex">
        <Link
          className="hover:font-semibold mr-4 hover:2xl:mr-2.5"
          href="/projects"
        >
          Projects
        </Link>
        <a
          className="hover:font-semibold mr-4 hover:2xl:mr-[0.78rem]"
          href="https://github.com/Kalkut"
        >
          Github
        </a>
        <a
          className="hover:font-semibold mr-4"
          href="https://www.linkedin.com/in/beremaki"
        >
          Linkedin
        </a>
        <Link className="hover:font-semibold" href="/about">
          About
        </Link>
      </nav>
    </>
  );
}
