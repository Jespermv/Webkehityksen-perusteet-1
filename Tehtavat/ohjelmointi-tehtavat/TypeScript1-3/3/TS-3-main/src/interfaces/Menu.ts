export interface Course {
    name: string;
    diets?: string[];
    price?: number;
  }

  export interface Menu {
    courses: Course[];
  }
