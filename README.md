<a href="https://precedent.dev">
  <img alt="Precedent – Building blocks for your Next project" src="https://precedent.dev/opengraph-image">
  <h1 align="center">Viking Teck Labs</h1>
</a>

<p align="center">
  Building blocks for your Next project
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#one-click-deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [Storybook](https://storybook.js.org/) – Building UI components and pages in isolation.
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://beta.nextjs.org/docs/api-reference/image-response) – Generate dynamic Open Graph images at the edge
- [`react-wrap-balancer`](https://github.com/shuding/react-wrap-balancer) – Simple React component that makes titles more readable

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
- [Husky](https://typicode.github.io/husky/) – git hooks
- [Jest](https://jestjs.io/) – Delightful JavaScript Testing Framework with a focus on simplicity

### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way

### Conventions

#### Git Strategy

In this project, we adopt a specific commit message convention to ensure that our Git history is readable and that our changelogs can be easily generated. Following this format not only makes the repository maintainable but also sets a clear communication pattern for the developers.

Commit Message Format
Each commit message consists of a type, an optional scope, and a subject:

<b><a href="#types">&lt;type&gt;</a></b></font>(<b><a href="#scopes">&lt;optional scope&gt;</a></b>): <b><a href="#subject">&lt;subject&gt;</a></b>

##### Types

These categorize the nature of the change:

- API relevant changes
  - `feat` Commits, that adds a new feature
  - `fix` Commits, that fixes a bug
- `refactor` Commits, that rewrite/restructure your code, however does not change any behaviour
  - `perf` Commits are special `refactor` commits, that improve performance
- `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- `test` Commits, that add missing tests or correcting existing tests
- `docs` Commits, that affect documentation only
- `build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- `ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- `chore` Miscellaneous commits e.g. modifying `.gitignore`

##### Scopes

The `scope` provides additional contextual information.

- It is optional.
- The allowed scope values will vary based on the specific project, but they typically represent modules or parts of the codebase.
- Note: Do not use issue identifiers as scopes.

##### Subject

The `subject` contains a brief description of the change:

- Is a **mandatory** part of the format
- Use the imperative, present tense: "change" not "changed" nor "changes"
  - Think of `This commit will <subject>`
- Don't capitalize the first letter
- Do not end the subject line with a period (.)

##### Examples

Here are a few examples to demonstrate the above guidelines:

- feat(auth): add login functionality
- fix(button): correct button color mismatch
- docs(readme): improve installation section
- refactor(utils): split helper functions
- perf(images): optimize image loading
- chore: update .gitignore with new IDE configs

#### File Organization and Naming Convention

##### Component Files

For improved clarity and ease of access, our project adopts a convention where component-specific files — including their tests and storybook files — reside in the same directory as the component itself.

Here's the structure:

```
- ComponentName/
  |- ComponentName.tsx
  |- ComponentName.test.tsx
  |- ComponentName.storybook.tsx
```

##### Integration Tests

Integration tests, especially those involving multiple components or pages, should be placed in a dedicated root-level directory named **tests**. Within this directory, further categorize tests into:

1. An `integration` subfolder for generic integration tests.
2. Subfolders named after the specific pages they're testing for more specific scenarios.

Here's how the directory structure might look for integration tests:

```
- __tests__/
  |- integration/
    |- testA.test.tsx
    |- testB.test.tsx
  |- HomePage/
    |- scenario1.test.tsx
    |- scenario2.test.tsx
  |- AboutPage/
    |- scenarioX.test.tsx
```

##### Rationale

By keeping unit test files and storybook files next to the component they relate to, developers can quickly identify and modify related files, especially when refactoring or adding features. This co-location ensures ease of maintenance and better clarity on which tests or stories correspond to which components.

On the other hand, having a dedicated location for integration tests helps demarcate them from unit tests, ensuring that the tests' broader nature and scope are evident.

## Author

- Viking Tech Labs
