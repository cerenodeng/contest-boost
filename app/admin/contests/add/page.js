export default async function ContestsAdd() {

  return (
    <form className="flex flex-col">
      <div className="flex gap-x-10">
        <label htmlFor="title" className="w-1/5 pb-10 border-r border-gray-200">Title</label>
        <div className="w-4/5">
          <input id="title" name="title" type="text" className="w-full p-2 border border-indigo-900/50 focus:border-indigo-900" />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="start-datetime" className="w-1/5 pb-10 border-r border-gray-200">Start</label>
        <div className="w-4/5">
          <input id="start-datetime" name="start-datetime" type="datetime-local" className="w-full p-2 border border-indigo-900/50 focus:border-indigo-900" />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="end-datetime" className="w-1/5 pb-10 border-r border-gray-200">End</label>
        <div className="w-4/5">
          <input id="end-datetime" name="end-datetime" type="datetime-local" className="w-full p-2 border border-indigo-900/50 focus:border-indigo-900" />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="goals" className="w-1/5 pb-10 border-r border-gray-200">Goals</label>
        <div className="w-4/5">
          <textarea id="goals" name="goals" className="w-full p-2 border border-indigo-900/50 focus:border-indigo-900"></textarea>
        </div>
      </div>

      <div className="flex gap-x-5 mt-10 justify-end">
        <button type="button" className="button-primary">Save</button>
        <button type="button" className="button-primary">Publish</button>
      </div>
    </form>
  );
}