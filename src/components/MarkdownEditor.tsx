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
  InsertImage,
  imagePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { imageUploadHandler } from "@/lib/utils";

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
          imagePlugin({
            imageUploadHandler: imageUploadHandler,
            imageAutocompleteSuggestions: [
              "https://picsum.photos/200/300",
              "https://picsum.photos/200",
            ],
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <div className="w-full flex justify-between items-center">
                <div className="w-full flex">
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <CreateLink />
                  <BlockTypeSelect />
                  <InsertImage />
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

MarkdownEditor.displayName = "MarkdownEditor";

export default MarkdownEditor;
