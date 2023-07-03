'use client';

import * as React from 'react';
import { createEditor } from '@editablejs/models';
import { EditableProvider, ContentEditable, withEditable } from '@editablejs/editor';
import { withPlugins, MarkEditor } from '@editablejs/plugins';
import { ToolbarComponent, useToolbarEffect, withToolbar, Toolbar } from '@editablejs/plugin-toolbar';

export default function AdminEditor({ label, name }) {
  const editor = React.useMemo(() => {
    let editor = withEditable(createEditor());
    editor = withPlugins(editor);
    return withToolbar(editor);
  }, []);

  const marks = ['bold', 'italic', 'underline', 'strikethrough', 'sub', 'sup'];
  useToolbarEffect(() => {
    Toolbar.setItems(editor, marks.map(mark => ({
      type: 'button',
      children: mark,
      active: MarkEditor.isActive(editor, mark),
      onToggle: () => {
        MarkEditor.toggle(editor, mark)
      }
    })))
  }, editor);

  const [emptyInput, setEmptyInput] = React.useState(true);

  return (
    <div className="flex flex-col gap-y-2">
      <label className={emptyInput ? 'invisible' : 'visible'} htmlFor={name}>{label}</label>
      <div className="editor">
        <EditableProvider editor={editor}>
          <ToolbarComponent editor={editor} />
          <ContentEditable name={name} placeholder={label} />
        </EditableProvider>
      </div>
    </div>
  );
}