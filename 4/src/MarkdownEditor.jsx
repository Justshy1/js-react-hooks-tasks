import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
const rootRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: rootRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });
  }, [onContentChange]);

  return <div ref={rootRef} />;
  // END
};

export default MarkdownEditor;
