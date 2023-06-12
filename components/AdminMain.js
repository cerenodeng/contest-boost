import AdminHeader from "./AdminHeader";
import AdminSearch from "./AdminSearch";

export default async function AdminMain({ children }) {

  return (
    <main className="flex flex-col gap-y-10 p-10 w-4/5">
      <AdminHeader />
      <AdminSearch />
      {children}
    </main>
  );
}