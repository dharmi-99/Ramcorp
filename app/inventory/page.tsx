// pages/inventory.tsx
"use client"
import React, { useState } from 'react';

interface InventoryItem {
  id: number;
  name: string;
  items: string;
}

const InventoryPage: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([
    { id: 1, name: 'Ellie Williams', items: '1 Shotgun, 5 Bottled Water, 1 Helmet, 5 Canned Food, 1 Tent, 2 Radios' },
    { id: 2, name: 'Joel Miller', items: '1 Pistol, 1 Shotgun, 12 Bottled Water, 2 Gloves, 15 Canned Food, 2 Radios' },
    { id: 3, name: 'Tommy Miller', items: '1 Sniper, 1 Radio' },
    { id: 4, name: 'Abby Anderson', items: '1 Pistol, 16 Bottled Water, 1 Radio' },
    { id: 5, name: 'Lev Cheng', items: '1 Bow, 15 Arrows, 6 Canned Food' },
    { id: 6, name: 'Lev Cheng', items: '1 Bow, 15 Arrows, 6 Canned Food' },

  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = inventoryItems.length;

  const handleRequestItem = (itemName: string) => {
    alert(`Requested item: ${itemName}`);
  };
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventoryItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">List of Survivors Inventories</h1>
      <p className="mb-4">You have {totalItems} Inventories logged</p>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Inventories</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-100">
              <td className="py-3 px-6">{item.name}</td>
              <td className="py-3 px-6">{item.items}</td>
              <td className="py-3 px-6">
                <button 
                  className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded" 
                  onClick={() => handleRequestItem(item.items)}
                >
                  Request Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button 
         className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      <p className="mt-4">Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalItems)} of {totalItems} Results</p>

        <button 
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
          onClick={nextPage}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryPage;
