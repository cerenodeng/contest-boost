import { prisma } from '@/database/init';
import AnimatedTabs from '@/components/AnimatedTabs';

export default async function ContestPage({ params }) {
  const contest = await prisma.contest.findUnique({
    where: {
      id: Number(params.slug),
    },
  });
  const content = JSON.parse(contest.content);

  const tabs = [];
  for (let key in content) {
    tabs.push({ label: key[0].toUpperCase() + key.slice(1), content: content[key] });
  }

  return (
    <main className="flex p-20 h-screen justify-center">
      <div className="flex flex-col gap-y-10 w-full items-center">
        <AnimatedTabs tabs={tabs} />

        <hr />
      </div >
    </main>
  );
}