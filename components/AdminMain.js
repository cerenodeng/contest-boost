import AdminHeader from "./AdminHeader";

export default async function AdminMain({ children }) {

  return (
    <main className="flex flex-col gap-y-10 p-10 w-4/5">
      <AdminHeader title="Welcome to Admin" />
      {children}
    </main>
  );
}