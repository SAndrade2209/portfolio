// Shared navigation component
import Link from "next/link";

type SiteHeaderProps = {
  active: "/" | "/projects" | "/chat";
};

const navItems = [
  { href: "/" as const, label: "Home" },
  { href: "/projects" as const, label: "Projects" },
  { href: "/chat" as const, label: "AI Chat" },
];

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="sticky top-5 z-20 mb-20">
      <div className="flex items-center justify-between gap-6 rounded-full border border-border/80 bg-[rgba(245,241,232,0.9)] px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <Link href="/" className="min-w-0">
          <p className="truncate text-[13px] font-semibold tracking-tight text-primary">
            Selene Andrade López
          </p>
        </Link>

        <nav className="flex items-center gap-0.5 rounded-full bg-background/60 p-1">
          {navItems.map((item) => {
            const isActive = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-1.5 text-[13px] transition-all ${
                  isActive
                    ? "bg-primary text-white font-medium shadow-sm"
                    : "text-muted hover:text-primary"
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
