import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#football", label: "Football" },
  { href: "/#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-6 lg:px-8">
      <Link
        className="text-sm font-semibold tracking-tight text-titanium-50 transition hover:text-white"
        href="/"
      >
        Metin Berat Dönmez
      </Link>
      <nav aria-label="Main">
        <ul className="flex items-center gap-5 text-sm text-titanium-300 sm:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link className="transition hover:text-white" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
