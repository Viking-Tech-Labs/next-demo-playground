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
  describe("success case", () => {
    useMockServer(todoSuccessHandlers);

    it("should return the deleted todo id", async () => {
      const deletedTodo = await deleteTodo(mockTodo);
      expect(deletedTodo).toEqual({
        id: 1,
      });
    });
  });

  describe("error case", () => {
    useMockServer(todoErrorHandlers);

    it("should fail with an error", async () => {
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
