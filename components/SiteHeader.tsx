// Shared navigation component
import Link from "next/link";

type SiteHeaderProps = {
  active: "/" | "/projects";
};

const navItems = [
  { href: "/" as const, label: "Home" },
  { href: "/projects" as const, label: "Projects" },
];

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="sticky top-4 z-20 mb-16">
      <div className="flex items-center justify-between gap-4 rounded-full border border-(--border) bg-[rgba(250,248,243,0.86)] px-4 py-3 shadow-sm backdrop-blur md:px-6">
        <Link href="/" className="min-w-0">
          <p className="truncate text-[11px] font-semibold tracking-[0.22em] text-(--muted) uppercase">
            Selene Andrade Lopez
          </p>
          <p className="truncate text-xs text-foreground/60">
            Data engineer · AI systems
          </p>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-(--border) bg-white/60 p-1">
          {navItems.map((item) => {
            const isActive = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-foreground text-background font-medium"
                    : "text-(--muted) hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

