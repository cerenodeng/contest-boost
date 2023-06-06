export default async function ContestsAdd() {

  return (
    <form className="flex flex-col">
      <div className="flex gap-x-10">
        <label htmlFor="title" className="label">Title</label>
        <div className="w-4/5">
          <input id="title" name="title" type="text" className="input" />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="start-datetime" className="label">Start</label>
        <div className="w-4/5">
          <input id="start-datetime" name="start-datetime" type="datetime-local" className="input" />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="end-datetime" className="label">End</label>
        <div className="w-4/5">
          <input id="end-datetime" name="end-datetime" type="datetime-local" className="input" />
        </div>
      </div>

      <div className="flex gap-x-10">
        <label htmlFor="goals" className="label">Goals</label>
        <div className="w-4/5">
          <textarea id="goals" name="goals" className="input"></textarea>
        </div>
      </div>

      <div className="flex gap-x-5 mt-10 justify-end">
        <button type="button" className="button-primary">Save</button>
        <button type="button" className="button-primary">Publish</button>
      </div>
    </form>
  );
}