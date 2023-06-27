import AdminContest from "@/components/AdminContest";
import PlusTabs from "@/components/PlusTabs";

export default async function Contest() {
  const tabs = [
    {
      id: 0,
      content: <AdminContest />
    },
    {
      id: 1,
      content: '<div>test2</div>'
    }
  ]

  return (
    <PlusTabs previousTabs={tabs} />
  );
}