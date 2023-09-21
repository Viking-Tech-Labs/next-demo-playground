import fetchTodos from "./fetchTodos";

import { useMockServer } from "@/__tests__/__mocks__/server";
import { todoErrorHandlers } from "@/__tests__/__mocks__/todoFailHandlers";
import { todoSuccessHandlers } from "@/__tests__/__mocks__/todoSuccessHandlers";

describe("fetchTodos lib function", () => {
  describe("success case", () => {
    useMockServer(todoSuccessHandlers);

    it("should return the correct number of todo items", async () => {
      const todosArray = await fetchTodos();
      expect(todosArray.length).toBe(4);
    });
  });

  describe("error case", () => {
    useMockServer(todoErrorHandlers);

    it("should return an empty array with an error", async () => {
      const todosArray = await fetchTodos();
      expect(todosArray.length).toBe(0);
    });
  });
});
