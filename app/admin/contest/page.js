import AdminContest from "@/components/AdminContest";
import PlusTabs from "@/components/PlusTabs";

export default async function Contest() {
  const tabs = [
    {
      id: 0,
      content: <AdminContest />
    },
  ]

  return (
    <PlusTabs previousTabs={tabs} template={<AdminContest />} />
  );
}