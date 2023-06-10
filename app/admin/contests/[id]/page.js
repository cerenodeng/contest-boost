import { prisma } from '@/database/init';
import { redirect } from 'next/navigation';

export default async function Contest({ params }) {
  const id = Number(params.id);
  const contest = await prisma.contest.findUnique({
    where: {
      id: id,
    },
  });
  const { goals } = JSON.parse(contest.content);

  async function Save(data) {
    'use server';

    const title = data.get('title');
    const startDatetime = data.get('startDatetime');
    const endDatetime = data.get('endDatetime');
    const goals = data.get('goals');

    const contest = await prisma.contest.update({
      where: {
        id: id
      },
      data: {
        title: title,
        startDatetime: startDatetime,
        endDatetime: endDatetime,
        content: JSON.stringify({ goals: goals })
      }
    });

    redirect('/admin/contests');
  }

  return (
    <form className="flex flex-col">
      <div className="flex gap-x-10">
        <label htmlFor="title" className="label">Title</label>
        <div className="w-4/5">
          <input id="title" name="title" type="text" className="input" defaultValue={contest.title} />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="startDatetime" className="label">Start</label>
        <div className="w-4/5">
          <input id="startDatetime" name="startDatetime" type="datetime-local" className="input" defaultValue={contest.startDatetime} />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="endDatetime" className="label">End</label>
        <div className="w-4/5">
          <input id="endDatetime" name="endDatetime" type="datetime-local" className="input" defaultValue={contest.endDatetime} />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="goals" className="label">Goals</label>
        <div className="w-4/5">
          <textarea id="goals" name="goals" className="input">{goals}</textarea>
        </div>
      </div>

      <div className="flex gap-x-5 mt-10 justify-end">
        <button formAction={Save} className="button-primary">Save</button>
        <button type="button" className="button-primary">Publish</button>
      </div>
    </form>
  );
}