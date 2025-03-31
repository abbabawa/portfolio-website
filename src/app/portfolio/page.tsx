import WorkHistory from "@/components/pages/WorkHistory";
import { workHistoryData } from "@/data/workHistory";
import React from "react";

const page = () => {
  return <WorkHistory workHistory={workHistoryData} />;
};

export default page;
