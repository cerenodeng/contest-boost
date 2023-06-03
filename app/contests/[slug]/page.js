import { prisma } from '@/database/init';
import AnimatedTabs from '@/components/AnimatedTabs';

export default async function ContestPage({ params }) {
  const navTabs = await prisma.navTab.findMany();

  return (
    <main className="flex p-20 h-screen justify-center">
      <div className="flex flex-col gap-y-10 w-full items-center">
        <AnimatedTabs tabs={navTabs} />

        <hr />
      </div >
    </main>
  );
}