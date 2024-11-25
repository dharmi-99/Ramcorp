"use client";
import React, { useState, useEffect } from "react";
import SurvivorForm from "../components/SurvivorForm";
import { Survivor } from "../data/types";

const ITEMS_PER_PAGE = 5;

const SurvivorsPage: React.FC = () => {
  const [survivors, setSurvivors] = useState<Survivor[]>(() => {
    // Retrieve survivors from localStorage on load
    const savedSurvivors = localStorage.getItem("survivors");
    return savedSurvivors ? JSON.parse(savedSurvivors) : [];
  });

  const [currentPage, setCurrentPage] = useState(() => {
    // Retrieve the current page from localStorage on load
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  useEffect(() => {
    // Save survivors to localStorage whenever they change
    localStorage.setItem("survivors", JSON.stringify(survivors));
  }, [survivors]);

  useEffect(() => {
    // Save current page to localStorage whenever it changes
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const handleAddSurvivor = (survivor: Survivor) => {
    setSurvivors([...survivors, survivor]);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentSurvivors = survivors.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(survivors.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">List of Survivors</h1>
      <h2 className="text-lg mb-4">
        You have {survivors.filter((s) => !s.infected).length} healthy survivors
      </h2>

      <SurvivorForm onAddSurvivor={handleAddSurvivor} />

      <table className="min-w-full bg-white border border-gray-300 mb-4 mt-8">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Date Added</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentSurvivors.map((survivor) => (
            <tr
              key={survivor.id}
              className="border-b border-gray-300 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{survivor.name}</td>
              <td className="py-3 px-6">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    survivor.infected ? "bg-red-500" : "bg-green-500"
                  }`}
                ></span>
                {survivor.infected ? "Infected" : "Healthy"}
              </td>
              <td className="py-3 px-6">{survivor.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Previous
        </button>
        <span>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, survivors.length)} of {survivors.length}{" "}
          Results
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default SurvivorsPage;
