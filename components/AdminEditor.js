'use client';

import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AdminEditor({ label, name, placeholder }) {
  const [content, setContent] = useState('');
  const [emptyContent, setEmptyContent] = useState(true);

  useEffect(() => {
    if (content == '') {
      setEmptyContent(true)
    } else {
      setEmptyContent(false)
    }
    console.log(content)
  }, [content])

  return (
    <div className="flex flex-col gap-y-2">
      <label className={emptyContent ? 'invisible' : 'visible'} htmlFor={name}>{label}</label>
      <div className="editor">
        <ReactQuill placeholder={placeholder} theme="snow" value={content} onChange={setContent} />
      </div>
    </div>
  );
}