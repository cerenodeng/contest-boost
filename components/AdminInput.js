'use client';

import { useState } from "react";

export default function AdminInput({ label, name, placeholder }) {
  const [emptyInput, setEmptyInput] = useState(true);

  return (
    <div className="flex flex-col gap-y-2">
      <label className={emptyInput ? 'invisible' : 'visible'} htmlFor={name}>{label}</label>
      <input className="placeholder:italic" name={name} placeholder={placeholder} onChange={(event) => event.target.value == '' ? setEmptyInput(true) : setEmptyInput(false)} />
    </div>
  )
}