export default function Page({ params }) {
  // get contest data


  return (
    <div className="flex flex-col gap-y-10 w-full">
      <div className="flex gap-x-20 border-b border-gray-300 mx-20">
        <div className="relative w-full h-96">
          <label htmlFor="goals" className="flex justify-center cursor-pointer p-3 hover:bg-gray-200">Goals</label>
          <input id="goals" className="hidden peer/goals" type="radio" name="nav" defaultChecked />
          <div className="invisible absolute inset-x-0 bottom-0 top-20 bg-white peer-checked/goals:visible">the content of goals</div>
        </div>

        <div className="relative w-full h-96">
          <label htmlFor="rules" className="flex justify-center cursor-pointer p-3 hover:bg-gray-200">Rules</label>
          <input id="rules" className="hidden peer/rules" type="radio" name="nav" />
          <div className="invisible absolute inset-x-0 bottom-0 top-20 bg-white peer-checked/rules:visible">the content of rules</div>
        </div>

        <div className="relative w-full h-96">
          <label htmlFor="prizes" className="flex justify-center cursor-pointer p-3 hover:bg-gray-200">Prizes</label>
          <input id="prizes" className="hidden peer/prizes" type="radio" name="nav" />
          <div className="invisible absolute inset-x-0 bottom-0 top-20 bg-white peer-checked/prizes:visible">the content of prizes</div>
        </div>
      </div>

      <hr />
    </div >
  );
}