import Link from "next/link";

type SiteHeaderProps = {
  active: "/" | "/projects" | "/chat";
};

const navItems = [
  { href: "/" as const, label: "home" },
  { href: "/projects" as const, label: "projects" },
  { href: "/chat" as const, label: "ai chat" },
];

const iconLinks = [
  {
    href: "mailto:selene.andradelopez@gmail.com",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/SAndrade2209",
    label: "GitHub",
    external: true,
    icon: (
      <svg viewBox="0 0 16 16" width="17" height="17" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/selene-andrade-a23367163/",
    label: "LinkedIn",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    href: "/cv07052026.pdf",
    label: "Download CV",
    download: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
  },
];

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="flex flex-col gap-4 py-6 mb-12 sm:flex-row sm:items-center sm:justify-between sm:py-8 sm:mb-16">
      <Link href="/" className="text-[15px] font-semibold text-foreground hover:text-primary transition-colors tracking-tight">
        selene andrade
      </Link>

      <div className="flex items-center gap-4 sm:gap-6">
        <nav className="flex items-center gap-4 sm:gap-7">
          {navItems.map((item) => {
            const isActive = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] transition-colors ${
                  isActive ? "text-primary" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-1">
          {iconLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              {...(link.download ? { download: true } : {})}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:text-primary hover:bg-surface"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
