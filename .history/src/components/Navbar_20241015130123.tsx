// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-purple-900 text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">Survival Nexus</div>
    <div className="space-x-6">
      <Link href="/report">
        <a className="hover:underline">Report</a>
      </Link>
      <Link href="/survivors">
        <a className="hover:underline">Survivors</a>
      </Link>
      <Link href="/inventory">
        <a className="hover:underline">Inventory</a>
      </Link>
    </div>
    <div className="rounded-full w-10 h-10 bg-gray-400"></div>
  </nav>
);

export default Navbar;
