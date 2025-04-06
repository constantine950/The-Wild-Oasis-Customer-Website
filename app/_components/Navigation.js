import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="md:text-lg lg:text-xl">
      <ul className="flex gap-2 items-center sm:gap-4 md:gap-7">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              <img
                src={session.user.image}
                className="h-5 rounded-full"
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
