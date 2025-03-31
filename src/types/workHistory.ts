export interface IWorkHistoryData {
  id: number;
  name: string;
  client: string;
  url: string;
  period: string;
  screenshots: string[];
  details: string[];
}

export interface IWorkHistory {
  workHistory: IWorkHistoryData[];
}
