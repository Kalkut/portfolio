import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4">
      <p>
        <strong>Wrong page</strong>: The requested project does not exist
      </p>
    </div>
  );
}
