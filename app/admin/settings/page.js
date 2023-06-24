import { prisma } from '@/database/init';
import { redirect } from 'next/navigation';

async function Save(data) {
  'use server';

  const title = data.get('title');

  const contestContentType = await prisma.contestContentType.create({
    data: {
      title: title,
    }
  });

  redirect('/admin/contests');
}

export default async function Settings() {

  return (
    <form className="flex flex-col">
      <div className="flex gap-x-10">
        <label htmlFor="title" className="label-no-pb">Content Types</label>
        <div className="w-4/5">
          <input id="title" name="title" type="text" className="input-no-pb" />
        </div>
      </div>

      <div className="flex mt-10 justify-end">
        <button formAction={Save} className="button-primary">Save</button>
      </div>
    </form>
  );
}