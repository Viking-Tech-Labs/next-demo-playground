import postTodo from "./postTodo";

import { useMockServer } from "@/__tests__/__mocks__/server";
import { todoErrorHandlers } from "@/__tests__/__mocks__/todoFailHandlers";
import { todoSuccessHandlers } from "@/__tests__/__mocks__/todoSuccessHandlers";

describe("postTodo lib function", () => {
  describe("Happy Path: HTTP 200", () => {
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

  describe("Sad Path: HTTP 400", () => {
    useMockServer(todoErrorHandlers);

    it("should fail with an error", async () => {
      // Setup: Using 'expect.assertions' to ensure that the catch block gets executed
      // If this assertion count is not met, the test will fail.
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
