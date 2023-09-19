import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

beforeAll(() =>
  console.log("This is executed before any tests are run, per test suit"),
);

afterEach(() => console.log("This is executed after every test"));

afterAll(() =>
  console.log("This is executed after all tests are run, per test suit"),
);
