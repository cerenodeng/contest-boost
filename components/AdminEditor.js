'use client';

import * as React from 'react';
import { createEditor } from '@editablejs/models';
import { EditableProvider, ContentEditable, withEditable } from '@editablejs/editor';

export default function AdminEditor() {
  const editor = React.useMemo(() => withEditable(createEditor()), []);

  return (
    <div className="editor">
      <EditableProvider editor={editor}>
        <ContentEditable placeholder="Tab Content" />
      </EditableProvider>
    </div>
  );
}