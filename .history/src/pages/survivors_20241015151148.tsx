// pages/survivors.tsx
import Navbar from '../components/Navbar';
import { survivors } from '../data/survivors';

const Survivors: React.FC = () => (
  <div>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Survivors</h1>
      <ul className="space-y-4">
        {survivors.map((survivor) => (
          <li key={survivor.id} className="bg-white p-4 rounded shadow">
            <p className="text-xl font-bold">{survivor.name}</p>
            <p>Status: {survivor.infected ? 'Infected' : 'Healthy'}</p>
            <p>Inventory: {JSON.stringify(survivor.inventory)}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Survivors;
