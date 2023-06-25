'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();
  const navs = [
    { id: 1, name: 'Contest', href: '/admin/contest' },
    { id: 2, name: 'Submissions', href: '/admin/submissions' },
    { id: 3, name: 'Users', href: '/admin/users' },
    { id: 4, name: 'Settings', href: '/admin/settings' },
  ];

  return (
    <aside className="flex flex-col bg-indigo-900 w-72 h-screen shadow-2xl shadow-indigo-900/50">
      <Link href="/admin" className="text-gray-500 px-8 py-10">Contest Boost</Link>

      <nav className="flex flex-col grow gap-y-px">
        {navs.map((data) => (
          <Link
            key={data.id}
            href={data.href}
            className={`${pathname == data.href ? "text-indigo-900 bg-white" : "text-white bg-indigo-900 hover:text-indigo-900 hover:bg-white"} font-semibold px-8 py-5`}>
            {data.name}
          </Link>
        ))}
      </nav>

      <a href="#" className="text-gray-100 font-semibold px-8 py-5 hover:text-indigo-900 hover:bg-white">
        Me
      </a>
    </aside >
  );
}