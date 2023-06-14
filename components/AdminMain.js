import AdminHeader from "./AdminHeader";
import AdminSearch from "./AdminSearch";

export default async function AdminMain({ children }) {

  return (
    <main className="flex flex-col gap-y-10 p-8 w-full">
      <AdminHeader />
      <AdminSearch />
      {children}
    </main>
  );
}