'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminHeader() {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').at(-1);

  function firstUpperCase(text) {
    return text[0].toUpperCase() + text.slice(1)
  }

  let title = firstUpperCase(lastSegment);
  let actionsClass = 'hidden';
  let addUrl = '#';

  if (lastSegment == "add") {
    title = `Add ${firstUpperCase(pathname.split('/').at(-2)).slice(0, -1)}`;
  } else if (parseInt(lastSegment) == lastSegment) {
    title = `${firstUpperCase(pathname.split('/').at(-2)).slice(0, -1)} Detail`;
  } else if (lastSegment == 'submissions' || lastSegment == 'users') {
    actionsClass = 'flex';
    addUrl = `/admin/${lastSegment}/add`;
  }

  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>

      <div className={`${actionsClass} gap-x-5`}>
        <Link href={addUrl} className="flex text-white bg-indigo-900 px-5 py-2.5 items-center border-2 border-transparent rounded hover:text-indigo-900 hover:bg-white hover:border-2 hover:border-indigo-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <span className="text-base font-medium">Add</span>
        </Link>
      </div>
    </div >
  )
}