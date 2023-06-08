import Link from 'next/link';
import { prisma } from '@/database/init';

export default async function ContestsPage() {
  const contests = await prisma.contest.findMany();

  return (
    <div className="flex flex-col divide-y">
      {contests.map((contest) => (
        <div className="flex py-5" key={contest.id}>
          <Link href={`/admin/contests/${contest.id}`} className="w-1/4">{contest.title}</Link>
          <div className="w-1/4">{contest.startDatetime}</div>
          <div className="w-1/4">{contest.endDatetime}</div>
          <div className="w-1/4">{JSON.parse(contest.content).goals}</div>
        </div>
      ))}
    </div>
  );
}