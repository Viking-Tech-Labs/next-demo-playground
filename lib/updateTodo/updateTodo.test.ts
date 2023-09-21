import updateTodo from "./updateTodo";

import { useMockServer } from "@/__tests__/__mocks__/server";
import { todoErrorHandlers } from "@/__tests__/__mocks__/todoFailHandlers";
import { todoSuccessHandlers } from "@/__tests__/__mocks__/todoSuccessHandlers";

const mockTodo = {
  userId: 1,
  title: "Wave hello! 👋",
  completed: false,
  id: 1,
};

/**
 * Test Suite for the `updateTodo` library function.
 *
 * This suite is divided into two subsections:
 * 1. Tests for successful API requests
 * 2. Tests for API request failures
 *
 * It utilizes a mock server set up using `useMockServer` utility function.
 */
describe("updateTodo lib function", () => {
  describe("Happy Path: HTTP 200", () => {
    useMockServer(todoSuccessHandlers);

    // Test to validate that the function returns the updated todo item
    it("should return the updated todo item", async () => {
      const updatedTodo = await updateTodo(mockTodo);
      expect(updatedTodo).toEqual({
        userId: 1,
        title: "Wave hello! 👋",
        completed: true,
        id: 1,
      });
    });
  });

  describe("Sad Path: HTTP 400", () => {
    useMockServer(todoErrorHandlers);

    // Test to validate that the function throws an appropriate error
    it("should fail with an error", async () => {
      // Setup: Ensure that an assertion will be made in this test
      expect.assertions(1);

      // Act & Assert: Attempt to update and catch the expected error
      try {
        await updateTodo(mockTodo);
      } catch (e) {
        if (e instanceof Error) {
          expect(e.message).toEqual("Failed to update todo");
        }
      }
    });
  });
});
