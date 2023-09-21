import postTodo from "./postTodo";

import { useMockServer } from "@/__tests__/__mocks__/server";
import { todoErrorHandlers } from "@/__tests__/__mocks__/todoFailHandlers";
import { todoSuccessHandlers } from "@/__tests__/__mocks__/todoSuccessHandlers";

describe("postTodo lib function", () => {
  describe("success case", () => {
    useMockServer(todoSuccessHandlers);

    it("should return the posted todo item", async () => {
      const postedTodo = await postTodo("write tests");
      expect(postedTodo).toEqual({
        userId: 1,
        title: "write tests",
        completed: false,
        id: 5,
      });
    });
  });

  describe("error case", () => {
    useMockServer(todoErrorHandlers);

    it("should fail with an error", async () => {
      expect.assertions(1);
      try {
        await postTodo("write tests");
      } catch (e) {
        if (e instanceof Error) {
          expect(e.message).toEqual("Failed to post new todo");
        }
      }
    });
  });
});
