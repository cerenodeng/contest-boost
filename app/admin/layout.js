import AdminSidebar from "@/components/AdminSidebar";
import AdminMain from "@/components/AdminMain";

export default async function AdminLayout({ children }) {

  return (
    <div class="flex">
      <AdminSidebar />
      <AdminMain>
        {children}
      </AdminMain>
    </div>
  );
}