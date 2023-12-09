import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-8">Project Not Found</h2>
      <p className="mb-2">Sure of your url ?</p>
      <p>
        Nevermind, just try one of the link above or{" "}
        <Link
          className="underline"
          href="/projects/webxr-google-drive-client#description"
        >
          check my latest entry out
        </Link>{" "}
        !
      </p>
    </div>
  );
}
