export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 top-0 w-full h-full xl:bg-white/80 bg-white flex flex-col xl:w-1/3">
      {children}
    </div>
  );
}
