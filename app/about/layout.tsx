import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 top-0 w-full h-full xl:bg-white/80 bg-white flex flex-col xl:w-1/3">
      <h1 className="mb-6 text-2xl font-black flex justify-between p-4 2xl:pt-8 2xl:px-8 pb-0">
        About
        <BackToHome />
      </h1>
      <div className="pt-0 2xl:px-8 2xl:pb-8 p-4 overflow-auto">{children}</div>
    </div>
  );
}

function BackToHome() {
  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Link>
  );
}
