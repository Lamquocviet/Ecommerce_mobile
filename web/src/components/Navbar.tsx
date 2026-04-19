import { Link, NavLink } from 'react-router-dom';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Wishlist', path: '/wishlist' },
  { label: 'Orders', path: '/orders' },
  { label: 'Profile', path: '/profile' }
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-[0.25em] text-white/90 uppercase">
          Luminous
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-2 text-sm transition ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="rounded-2xl border border-white/10 bg-card px-4 py-2 text-sm text-white transition hover:bg-white/5">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
