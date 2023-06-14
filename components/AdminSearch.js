'use client';

import { usePathname } from 'next/navigation';

export default async function AdminSidebar() {
  const sidebarNavs = ['contests', 'pages', 'users'];
  const pathname = usePathname();
  const lastSegment = pathname.split('/').at(-1);

  const searchClass = sidebarNavs.includes(lastSegment) ? '' : 'hidden';

  return (
    <div className={`w-1/5 ${searchClass}`}>
      <input name="search" type="text" className="input" placeholder="Search..." />
    </div>
  )
}