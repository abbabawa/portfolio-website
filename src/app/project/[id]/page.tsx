import Project from "@/components/pages/Project";
import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
const page: React.FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  return <Project id={Number(id)} />;
};

export default page;
