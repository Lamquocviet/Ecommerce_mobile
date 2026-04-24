import { Link, NavLink } from 'react-router-dom';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Wishlist', path: '/wishlist' },
  { label: 'Orders', path: '/orders' },
  { label: 'Profile', path: '/profile' }
];

export const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', search);
    // TODO: navigate(`/search?q=${search}`)
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="text-lg font-bold tracking-[0.25em] text-white/90 uppercase">
          Luminous
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-2 text-sm transition ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* SEARCH */}
        <form
          onSubmit={handleSearch}
          className="hidden w-80 md:flex items-center gap-2 rounded-2xl border border-white/10 bg-card px-3 py-2"
        >
          <Search className="h-4 w-4 text-white/50" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-white outline-none placeholder:text-white/40"
          />
        </form>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* CART */}
          <Link
            to="/cart"
            className="relative rounded-2xl border border-white/10 bg-card p-2 hover:bg-white/5 transition"
          >
            <ShoppingCart className="h-5 w-5 text-white" />
            {/* badge */}
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] text-black">
              2
            </span>
          </Link>

          {/* AUTH */}
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