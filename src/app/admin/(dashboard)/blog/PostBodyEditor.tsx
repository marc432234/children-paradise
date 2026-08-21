"use client";

import { useCallback, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";

const btn = "rounded px-2 py-1 text-sm text-[#5b564c] hover:bg-[#211f1a]/5 disabled:opacity-40";
const btnActive = "bg-[#ba923a] text-white hover:bg-[#ba923a]";

function ToolbarButton({
  label,
  onClick,
  isActive,
  title,
}: {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`${btn} ${isActive ? btnActive : ""}`}
    >
      {label}
    </button>
  );
}

function Divider() {
  return <span className="mx-1 h-5 w-px bg-[#211f1a]/15" />;
}

export function PostBodyEditor({ initialHtml }: { initialHtml: string }) {
  const [html, setHtml] = useState(initialHtml);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false, HTMLAttributes: { rel: "noopener" } },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image.configure({ HTMLAttributes: { class: "post-image" } }),
    ],
    content: initialHtml,
    editorProps: {
      attributes: {
        class:
          "prose max-w-none min-h-[420px] rounded-b-md bg-white border border-[#211f1a]/15 px-4 py-3 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => setHtml(editor.getHTML()),
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previous = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", previous ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const src = window.prompt("Image URL", "https://");
    if (!src) return;
    const alt = window.prompt("Alt text (describe the image)", "") ?? "";
    editor.chain().focus().setImage({ src, alt }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="rounded-md border border-[#211f1a]/15">
      <div className="sticky top-0 z-20 flex flex-wrap items-center gap-1 rounded-t-md border-b border-[#211f1a]/15 bg-[#f7f3ec] px-2 py-1.5">
        <ToolbarButton title="Bold" label="B" isActive={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} />
        <ToolbarButton title="Italic" label="I" isActive={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} />
        <Divider />
        <ToolbarButton title="Heading 2" label="H2" isActive={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
        <ToolbarButton title="Heading 3" label="H3" isActive={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        <Divider />
        <ToolbarButton title="Align left" label="⟸" isActive={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} />
        <ToolbarButton title="Align center" label="≡" isActive={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} />
        <ToolbarButton title="Align right" label="⟹" isActive={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} />
        <Divider />
        <ToolbarButton title="Bullet list" label="• List" isActive={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} />
        <ToolbarButton title="Numbered list" label="1. List" isActive={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
        <ToolbarButton title="Quote" label="❝" isActive={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
        <Divider />
        <ToolbarButton title="Link" label="Link" isActive={editor.isActive("link")} onClick={setLink} />
        <ToolbarButton title="Image" label="🖼" onClick={addImage} />
        <Divider />
        <ToolbarButton title="Undo" label="↶" onClick={() => editor.chain().focus().undo().run()} />
        <ToolbarButton title="Redo" label="↷" onClick={() => editor.chain().focus().redo().run()} />
      </div>

      <EditorContent editor={editor} />
      <input type="hidden" name="body" value={html} />
    </div>
  );
}
