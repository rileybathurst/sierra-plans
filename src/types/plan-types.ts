export type PlanTypes = {
  name: string;
  slug: string;
  address: string;
  zip: number;
  areas: {
    name: string;
    state: string;
  }[];
  svg: string;
  notes: {
    data: {
      notes: string;
    };
  };
  jobber: number;
  jobbertakedown: number;
  timerHours: number;
  timerFallback: string;
  createdAt: string;
  updatedAt: string;
  takedownFlexOrder: string;
  takedownday: {
    date: string;
    crew: string;
  };
};
