import AdminEditor from "./AdminEditor";
import AdminInput from "./AdminInput";

export default function AdminContest() {

  return (
    <div className="flex flex-col gap-y-12">
      <AdminInput label="Title" name="title" placeholder="The title for this section, such as objectives, rules and prizes" />
      <AdminEditor label="Content" name="content" placeholder="The detail for this section" />
    </div>
  )
}