import AdminContest from "@/components/AdminContest";
import AdminFooter from "@/components/AdminFooter";
import PlusTabs from "@/components/PlusTabs";

export default async function Contest() {
  const tabs = [
    {
      id: 0,
      content: <AdminContest />
    },
  ]

  return (
    <>
      <PlusTabs previousTabs={tabs} template={<AdminContest />} />
      <AdminFooter />
    </>
  );
}