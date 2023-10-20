import Link from "next/link";

export default function Navbar() {
  return (
    <header className="justify-self-start">
      <nav className="mx-auto flex max-w-2xl items-center justify-between gap-4 p-4">
        <Link href="/" className="text-2xl font-bold">
          T3 App
        </Link>
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
