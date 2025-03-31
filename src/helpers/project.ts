import { workHistoryData } from "@/data/workHistory";

export const getProject = (id: number) => {
  let res;
  res = workHistoryData.find((item) => {
    return item.id === id;
  });
  return res;
};
