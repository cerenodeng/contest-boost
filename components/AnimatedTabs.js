'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedTabs({ tabs }) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex gap-x-10 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? "text-white" : "text-gray-900 hover:text-gray-900/60"} relative rounded px-7 py-2 text-base font-medium outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-black mix-blend-difference"
                style={{ borderRadius: 4 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-10">
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? "" : "hidden"}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>

  );
}
