'use client';

import Link from 'next/link';
// import AdminDelete from '@/components/AdminDelete';

export default function AdminTable({ contests }) {

  return (
    <div class="flex flex-col gap-y-2">
      {contests.map((contest) => (
        <div className="flex py-5 group hover:text-black/70" key={contest.id}>
          <Link href={`/admin/contests/${contest.id}`} className="w-1/4">{contest.title}</Link>
          <div className="w-1/4">{contest.startDatetime}</div>
          <div className="w-1/4">{contest.endDatetime}</div>

          {/* <AdminDelete table='contest' id={contest.id} /> */}
        </div>
      ))}
    </div>
  )
}