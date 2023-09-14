import React from "react";

import TodoContainer from "@/components/todo/TodoContainer";
export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <TodoContainer />
      </div>
    </>
  );
}
