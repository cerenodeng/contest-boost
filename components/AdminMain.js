export default async function AdminMain({ children }) {

  return (
    <main className="flex flex-col p-10 w-4/5">
      {children}
    </main>
  );
}