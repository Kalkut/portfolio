export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-white/80 p-4 flex flex-col xl:w-1/4 xl:[clip-path:polygon(0%_0%,75%_0%,100%_100%,0%_100%,0%_0%)] xl:[shape-outside:polygon(0%_0%,75%_0%,100%_100%,0%_100%,0%_0%)]">
      {children}
    </div>
  );
}
