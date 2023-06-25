import PlusTabs from "@/components/PlusTabs";

export default async function Contest() {
  const tabs = [
    {
      id: 0,
      content: '<div>test1</div>'
    },
    {
      id: 1,
      content: '<div>test2</div>'
    }
  ]

  return (
    <div>
      <PlusTabs previousTabs={tabs} />
    </div>
  );
}