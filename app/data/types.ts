// src/data/types.ts

export interface Item {
    id: number;
    name: "Water" | "Food" | "Medication" | "C-Virus Vaccine";
    description: string;
    quantity: number;
  }
  
  export interface Survivor {
    id: number;
    name: string;
    age: number;
    gender: "Male" | "Female" | "Other";
    lastLocation: {
      latitude: number;
      longitude: number;
    };
    inventory: Item[];
    infected: boolean;
    dateAdded: string; // Add dateAdded here
  }
  