import { rest } from "msw";

export const todoErrorHandlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.status(400));
  }),
  rest.post("/todos", async (req, res, ctx) => {
    return res(ctx.status(400));
  }),
  rest.put("/todos/:id", async (req, res, ctx) => {
    return res(ctx.status(400));
  }),
  rest.delete("/todos/:id", (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
