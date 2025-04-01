import { workHistoryData } from "@/data/workHistory";

export const getProject = (id: number) => {
  const res = workHistoryData.find((item) => {
    return item.id === id;
  });
  return res;
};
