"use client";

import React, { useState, useEffect, FC, ReactNode, forwardRef } from "react";
import {
  MDXEditor as Editor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  BlockTypeSelect,
  CreateLink,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
  CodeToggle,
  CodeBlockNode,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

interface Props extends MDXEditorProps {
  children?: ReactNode;
}

const MarkdownEditor = forwardRef<MDXEditorMethods, Props>((props, ref) => {
  return (
    <div className="relative w-full h-full bg-white shadow-md rounded-lg p-6 overflow-hidden">
      <Editor
        {...props}
        ref={ref}
        className="markdown-editor markdown-content border border-gray-300 rounded-md p-4 !w-full !h-full overflow-y-auto" // Enable scroll for editor
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <div className="w-full flex justify-between items-center">
                <div className="w-full flex">
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <CreateLink />
                  <BlockTypeSelect />
                </div>
                {props.children}
              </div>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
        ]}
      />
    </div>
  );
});

export default MarkdownEditor;
