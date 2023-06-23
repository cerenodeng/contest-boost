import AnimatedTabs from "@/components/AnimatedTabs";

export default async function User() {
  const tabs = [
    {
      id: 0,
      label: 'Information',
      content: '<form><label for="last-name">Last Name</label><input id="last-name" name="last-name" type="text" /></form>'
    },
    {
      id: 1,
      label: 'Submissions',
      content: '<ul><li>One submission</li><li>Two submission</li></ul>'
    }
  ];

  return (
    <main className="flex p-20 h-screen justify-center">
      <div className="flex flex-col gap-y-14 w-full items-center">
        <h1>My Profile</h1>
        <AnimatedTabs tabs={tabs} />
      </div >
    </main>
  );
}