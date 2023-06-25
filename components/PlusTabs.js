'use client';

import { useState } from "react";

export default function PlusTabs({ previousTabs }) {
  const [tabs, setTabs] = useState(previousTabs);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  function addTab() {
    const newTab = {
      id: tabs.length,
      content: `test ${tabs.length + 1}`
    };

    setTabs([...tabs, newTab]);
  }

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex gap-x-10 border-b-2 border-gray-500">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? "text-black border-b-white" : "text-indigo-900 border-b-gray-500 hover:text-indigo-900/60"} relative -bottom-0.5 text-base font-medium px-7 py-2.5 border-2 border-gray-500 rounded-t`}
          >
            {tab.id + 1}
          </button>
        ))}

        <button onClick={() => addTab()} className="relative -bottom-0.5 flex text-white bg-indigo-900 px-7 py-2.5 items-center border-2 border-b-0 border-transparent rounded-t hover:text-indigo-900 hover:bg-white hover:border-indigo-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <span className="text-base font-medium">Add Tab</span>
        </button>
      </div>

      <div className="py-10">
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? "" : "hidden"}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>

  );
}
