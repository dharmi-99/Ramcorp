// src/components/Navbar.tsx

import Link from "next/link";

const Navbar: React.FC = () => (
  <nav className="bg-purple-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">Survival Nexus</h1>
      <div>
        <Link href="/report" className="mr-4">
          Report
        </Link>
        <Link href="/survivors" className="mr-4">
          Survivors
        </Link>
        <Link href="/inventory">
          Inventory
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
