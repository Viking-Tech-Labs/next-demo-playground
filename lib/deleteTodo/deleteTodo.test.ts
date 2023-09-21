import deleteTodo from "./deleteTodo";

import { useMockServer } from "@/__tests__/__mocks__/server";
import { todoErrorHandlers } from "@/__tests__/__mocks__/todoFailHandlers";
import { todoSuccessHandlers } from "@/__tests__/__mocks__/todoSuccessHandlers";

const mockTodo = {
  userId: 1,
  title: "Wave hello! 👋",
  completed: false,
  id: 1,
};

describe("deleteTodo lib function", () => {
  describe("Happy Path: HTTP 200", () => {
    useMockServer(todoSuccessHandlers);

    it("should return the deleted todo id", async () => {
      const deletedTodo = await deleteTodo(mockTodo);
      expect(deletedTodo).toEqual({
        id: 1,
      });
    });
  });

  describe("Sad Path: HTTP 400", () => {
    useMockServer(todoErrorHandlers);

    it("should fail with an error", async () => {
      // Setup: Using 'expect.assertions' to ensure that the catch block gets executed
      // If this assertion count is not met, the test will fail.
      expect.assertions(1);

      try {
        await deleteTodo(mockTodo);
      } catch (e) {
        if (e instanceof Error) {
          expect(e.message).toEqual("Failed to delete todo");
        }
      }
    });
  });
});
