import AdminEditor from "./AdminEditor";
import AdminInput from "./AdminInput";

export default function AdminContest() {

  return (
    <div className="flex flex-col gap-y-10">
      <AdminInput label="Tab Title" name="title" />
      <AdminEditor label="Tab Content" name="content" />
    </div>
  )
}