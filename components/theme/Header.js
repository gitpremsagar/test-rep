import Link from "next/link";
import SearchForm from "./searchForm";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/sell`}>sell</Link>
          </li>
          <li>
            <SearchForm />
          </li>
        </ul>
      </nav>
    </header>
  );
}
