import { rest } from "msw";

import fetchTodos from "./fetchTodos";

import { useMockServer } from "@/__tests__/__mocks__/server";
import { todoSuccessHandlers } from "@/__tests__/__mocks__/todoSuccessHandlers";

describe("fetchTodos lib function", () => {
  const server = useMockServer(todoSuccessHandlers);

  it("should return the correct number of todo items", async () => {
    const todosArray = await fetchTodos();
    expect(todosArray.length).toBe(4);
  });

  it("should return an empty array with an error", async () => {
    server.use(
      rest.get("/todos", (req, res, ctx) => {
        return res(ctx.status(400));
      }),
    );

    const todosArray = await fetchTodos();
    expect(todosArray.length).toBe(0);
  });
});
