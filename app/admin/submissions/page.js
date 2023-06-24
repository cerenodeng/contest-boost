import { prisma } from '@/database/init';
import AdminTable from '@/components/AdminTable';

export default async function Submissions() {
  const contests = await prisma.contest.findMany();

  async function refreshContest(term) {
    'use server';

    const data = await prisma.contest.findMany({
      where: {
        title: {
          contains: term
        }
      }
    });

    return data;
  }

  async function deleteItem(id) {
    'use server';

    const data = await prisma.contest.delete({
      where: { id: id },
    });

    return data;
  }

  return (
    <AdminTable originalContests={contests} refreshContest={refreshContest} deleteItem={deleteItem} />
  );
}