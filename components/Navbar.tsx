import { profile, nav } from "@/data/content";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="container-max">
        <div className="mt-6 card px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-[rgb(var(--cyan))] font-semibold">{profile.logo}</div>
          <nav className="hidden md:flex items-center gap-7">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="navlink">{n.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
