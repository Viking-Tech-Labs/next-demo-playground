import { RestHandler } from "msw";
import { setupServer } from "msw/node";

/**
 * Utility function for setting up a mock server for API testing.
 *
 * This function uses Mock Service Worker (MSW) to intercept and mock
 * HTTP requests made during tests. It provides lifecycle hooks to
 * manage the mock server state before, during, and after all tests.
 *
 * Example:
 * ```typscript
 * const handlers = [
 *   rest.get('/api/todos', (req, res, ctx) => res(ctx.json([{ id: 1, name: 'Test Todo' }])))
 * ];
 * const server = useMockServer(handlers);
 * ```
 */
export function useMockServer(handlers: RestHandler[]) {
  const server = setupServer(...handlers);

  // Establish API mocking before all tests.
  // This enables the mock server to start intercepting requests.
  beforeAll(() => server.listen());

  /**
   * Reset any runtime request handlers to avoid tests affecting each other.
   * This ensures that only the handlers provided at setup are used unless
   * specifically overridden within a test.
   */
  afterEach(() => server.resetHandlers());

  // Clean up and stop intercepting API requests after all tests are complete.
  afterAll(() => server.close());

  return server;
}
