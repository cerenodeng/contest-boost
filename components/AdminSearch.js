'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminTable from './AdminTable';

export default function AdminSearch({ refreshContest, deleteItem }) {
  const sidebarNavs = ['contests', 'pages', 'users'];
  const pathname = usePathname();
  const lastSegment = pathname.split('/').at(-1);
  const searchClass = sidebarNavs.includes(lastSegment) ? '' : 'hidden';

  const [contests, setContests] = useState([]);

  async function search(term) {
    const response = await refreshContest(term);
    setContests(response);
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
      <AdminTable contests={contests} deleteItem={deleteItem} />
    </div>
  )
}