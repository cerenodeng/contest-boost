import { prisma } from '@/database/init';
import AnimatedTabs from '@/components/AnimatedTabs';

export default async function Page({ params }) {
  const navTabs = await prisma.navTab.findMany();

  return (
    <div className="flex flex-col gap-y-10 w-full items-center">
      <AnimatedTabs tabs={navTabs} />

      <hr />
    </div >
  );
}