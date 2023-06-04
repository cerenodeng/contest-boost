import AdminSidebar from "@/components/AdminSidebar";

export default async function AdminLayout({ children }) {

  return (
    <div class="flex">
      <AdminSidebar />
      {children}
    </div>
  );
}