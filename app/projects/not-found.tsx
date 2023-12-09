import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Project Not Found</h2>
      <p>
        Sure of your url ? Nevermind, just try one of the link above or{" "}
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
