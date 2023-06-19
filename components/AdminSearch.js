'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminTable from './AdminTable';

export default async function AdminSearch({ refreshContest }) {
  const sidebarNavs = ['contests', 'pages', 'users'];
  const pathname = usePathname();
  const lastSegment = pathname.split('/').at(-1);
  const searchClass = sidebarNavs.includes(lastSegment) ? '' : 'hidden';


  // let response = "";

  // async function search(term) {
  //   response = await refreshContest(term);
  //   console.log(new Date(), response)
  // }

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className={`w-1/5 ${searchClass}`}>
      {/* <input name="search" type="text" className="input" placeholder="Search..." onKeyUp={async (event) => { await search(event.target.value) }} /> */}
      <button onClick={handleClick}>
        You pressed me {count} times
      </button>
      {/* <div className='bg-gray-500 w-20 h-10'>{response}</div> */}

      {/* <AdminTable data={response} /> */}
    </div>
  )
}