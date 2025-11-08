import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
    { href: '#projects', label: 'Projects' },
    { href: '#team', label: 'Team' },
  ];

  return (
    <header className={`fixed left-0 right-0 top-0 z-40 transition ${atTop ? 'bg-transparent' : 'bg-black/70 backdrop-blur'} `}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-wider text-white">Q⟂C</a>

        <button onClick={() => setOpen(!open)} className="sm:hidden text-white/90">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden gap-6 sm:flex">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="text-sm text-white/80 hover:text-white">{i.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <ul className="mx-auto max-w-6xl px-6 py-3">
            {items.map((i) => (
              <li key={i.href} className="py-2">
                <a href={i.href} className="block text-white/90" onClick={() => setOpen(false)}>{i.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
