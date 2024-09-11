"use client";
import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export const Editor: React.FC<ReactQuillProps> = (props) => {
  return <QuillEditor {...props} />;
};
