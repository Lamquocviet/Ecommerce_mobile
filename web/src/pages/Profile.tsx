import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export const ProfilePage = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-4xl border border-white/10 bg-card p-10 shadow-glow">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">My profile</p>
              <h1 className="text-3xl font-semibold text-white">My space</h1>
            </div>
            <div className="rounded-4xl bg-white/5 px-4 py-3 text-sm text-white/80">Member</div>
          </div>
          <SignedIn>
            <div className="rounded-4xl border border-white/10 bg-[#101010] p-6">
              <p className="text-sm text-white/60">Account details</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <UserButton />
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="rounded-4xl border border-white/10 bg-[#101010] p-6 text-white/70">
              Please sign in to view profile details.
            </div>
          </SignedOut>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
          <h2 className="text-xl font-semibold text-white">Quick actions</h2>
          <div className="mt-6 space-y-4 text-sm text-white/70">
            <p>Manage your orders, saved items, and payment methods from one place.</p>
            <p>Keep your account secure with Clerk authentication.</p>
          </div>
        </div>
        <div className="rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
          <h2 className="text-xl font-semibold text-white">Recent orders</h2>
          <p className="mt-4 text-sm text-white/70">View your latest purchase history in the orders section.</p>
        </div>
      </aside>
    </div>
  );
};
