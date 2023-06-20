import Link from 'next/link';
import { prisma } from '@/database/init';
import AdminSearch from '@/components/AdminSearch';
import AdminDelete from '@/components/AdminDelete';

export default async function ContestsPage() {
  let contests = await prisma.contest.findMany();

  async function refreshContest(term) {
    'use server';

    const data = await prisma.contest.findMany({
      where: {
        title: {
          contains: term
        }
      }
    });

    console.log('data', data);
    return data;
  }

  return (
    <>
      <AdminSearch refreshContest={refreshContest} />

      <div className="flex flex-col divide-y">
        <div className="flex py-5">
          <div className="text-lg font-semibold w-1/4">Title</div>
          <div className="text-lg font-semibold w-1/4">Start Date & Time</div>
          <div className="text-lg font-semibold w-1/4">End Date & Time</div>
          <div className="w-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>

        {contests.map((contest) => (
          <div className="flex py-5 group hover:text-black/70" key={contest.id}>
            <Link href={`/admin/contests/${contest.id}`} className="w-1/4">{contest.title}</Link>
            <div className="w-1/4">{contest.startDatetime}</div>
            <div className="w-1/4">{contest.endDatetime}</div>

            <AdminDelete table='contest' id={contest.id} />
          </div>
        ))}
      </div>
    </>
  );
}