import AdminSidebar from "@/components/AdminSidebar";
import AdminMain from "@/components/AdminMain";

export default async function AdminLayout({ children }) {

  return (
    <div className="flex">
      <AdminSidebar />
      <AdminMain>
        {children}
      </AdminMain>
    </div>
  );
}