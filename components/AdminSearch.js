'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminTable from './AdminTable';

export default function AdminSearch({ refreshContest }) {
  const sidebarNavs = ['contests', 'pages', 'users'];
  const pathname = usePathname();
  const lastSegment = pathname.split('/').at(-1);
  const searchClass = sidebarNavs.includes(lastSegment) ? '' : 'hidden';

  const [contests, setContests] = useState([]);

  async function search(term) {
    console.log(new Date(), contests);
    const response = await refreshContest(term);
    setContests(response);
    console.log(new Date(), contests);
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-1/5">
        <input
          name="search"
          type="text"
          className={`input w-1/5 ${searchClass}`}
          placeholder="Search..."
          onKeyUp={async (event) => { await search(event.target.value) }}
        />
      </div>
      <AdminTable contests={contests} />
    </div>
  )
}