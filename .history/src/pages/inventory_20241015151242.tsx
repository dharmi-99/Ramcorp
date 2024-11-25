// pages/inventory.tsx
import Navbar from '../components/Navbar';

const Inventory: React.FC = () => (
  <div>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
      <p>Manage resources and track item requests here.</p>
    </div>
  </div>
);

export default Inventory;
