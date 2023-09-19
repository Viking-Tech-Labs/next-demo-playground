import { rest } from "msw";

import updateTodo from "./updateTodo";

import { useFakeServer } from "@/__tests__/__mocks__/server";

const mockTodo = {
  userId: 1,
  title: "Wave hello! 👋",
  completed: false,
  id: 1,
};

describe("updateTodo lib function", () => {
  const server = useFakeServer();

  it("should return the updated todo item", async () => {
    const updatedTodo = await updateTodo(mockTodo);
    expect(updatedTodo).toEqual({
      userId: 1,
      title: "Wave hello! 👋",
      completed: true,
      id: 1,
    });
  });

  it("should fail with an error", async () => {
    server.use(
      rest.put("/todos/1", (req, res, ctx) => {
        return res(ctx.status(400));
      }),
    );
    expect.assertions(1);
    try {
      await updateTodo(mockTodo);
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toEqual("Failed to update todo");
      }
    }
  });
});
