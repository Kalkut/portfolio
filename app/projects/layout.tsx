export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-white/60">
      {children}
    </div>
  );
}
