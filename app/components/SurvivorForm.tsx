// src/components/SurvivorForm.tsx

import React, { useState } from "react";
import { Survivor } from "../data/types";

interface SurvivorFormProps {
  onAddSurvivor: (survivor: Survivor) => void;
}

const SurvivorForm: React.FC<SurvivorFormProps> = ({ onAddSurvivor }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<"Male" | "Female" | "Other">("Male");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [infected, setInfected] = useState<boolean>(false);
  const [dateAdded, setDateAdded] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newSurvivor: Survivor = {
      id: Date.now(),
      name,
      age,
      gender,
      lastLocation: { latitude, longitude },
      inventory: [],
      infected,
      dateAdded,
    };

    onAddSurvivor(newSurvivor);

    // Reset form
    setName("");
    setAge(0);
    setLatitude(0);
    setLongitude(0);
    setInfected(false);
    setDateAdded("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Use flexbox to align all input fields and button in one row */}
      <div className="flex gap-x-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="flex-1 p-2 border rounded"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as "Male" | "Female" | "Other")}
          className="flex-1 p-2 border rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {/* <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(Number(e.target.value))}
          placeholder="Latitude"
          required
          className="flex-1 p-2 border rounded"
        />
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(Number(e.target.value))}
          placeholder="Longitude"
          required
          className="flex-1 p-2 border rounded"
        /> */}
        <input
          type="date"
          value={dateAdded}
          onChange={(e) => setDateAdded(e.target.value)}
          required
          className="flex-1 p-2 border rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={infected}
            onChange={(e) => setInfected(e.target.checked)}
            className="w-5 h-5"
          />
          <span>Infected</span>
        </label>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Survivor
        </button>
      </div>
    </form>
  );
};

export default SurvivorForm;
