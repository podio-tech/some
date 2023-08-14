import React, { useEffect } from "react";

export default function Card() {
    const url = new URL(location.href)
    const name = url.searchParams.get('name')
  return (
    <div className="flex p-4 bg-gray-50 rounded-md space-x-6">
      <p className="text-3xl font-bold">Hello world </p>
      <p>{name}</p>
      <button
        className="px-4 h-[30px] leading-[30px] font-bold text-xs rounded-full bg-indigo-500 text-gray-50"
      >
        Click me
      </button>
    </div>
  );
}
