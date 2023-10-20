import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="mx-auto flex max-w-2xl justify-between gap-4 p-4">
        <h2 className="text-2xl font-bold">T3 App</h2>
        <ul>
          <li>
            <Link
              href="/server_action"
              className="underline hover:text-blue-600"
            >
              Server Action
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
