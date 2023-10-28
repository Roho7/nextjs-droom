"use client";

import { useState } from "react";
import { uploadURL } from "../../config/URLs/URL";

export default function UploadPhoto() {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch(uploadURL, {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit" className="flex justify-center link bg-mango-500">
          Upload
        </button>
      </form>
    </main>
  );
}
