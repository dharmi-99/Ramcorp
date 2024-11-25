// data/survivors.ts
export interface Survivor {
    id: number;
    name: string;
    infected: boolean;
    inventory: { [key: string]: number };
  }
  
  export const survivors: Survivor[] = [
    { id: 1, name: 'John Doe', infected: false, inventory: { water: 5, food: 10 } },
    { id: 2, name: 'Jane Smith', infected: true, inventory: { medicine: 2, food: 3 } },
  ];
  