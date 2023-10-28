export interface HousingLocation {//this is where the instance's structure is described, everyhouse has these properties.
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
  }
