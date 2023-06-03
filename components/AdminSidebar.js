// 'use client';

export default async function AdminSidebar() {

  return (
    <aside className="flex flex-col bg-indigo-900 w-1/4 h-screen shadow-2xl shadow-indigo-500/50">
      <div className="text-gray-500 p-10">Contest Boost</div>

      <nav className="flex flex-col grow">
        <a href="#" className="text-white font-semibold px-10 py-5 hover:text-indigo-900 hover:bg-white">Contests</a>
        <a href="#" className="text-white font-semibold px-10 py-5 hover:text-indigo-900 hover:bg-white">Pages</a>
        <a href="#" className="text-white font-semibold px-10 py-5 hover:text-indigo-900 hover:bg-white">Users</a>
      </nav>

      <a href="#" className="text-gray-100 font-semibold px-10 py-5 hover:text-indigo-900 hover:bg-white">
        Me
      </a>
    </aside>
  );
}