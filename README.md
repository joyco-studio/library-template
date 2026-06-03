# <img src="./static/JOYCO.png" alt="JOYCO Logo" height="36" width="36" align="top" />&nbsp;&nbsp;JOYCO | Library Template

A generic library template starter for brand new libraries.

| Features               | Description                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------ |
| 🚀 Quick Setup         | Initialize your library with a single command using `pnpm setup:template` |
| 📦 Modern Build System | Built with **tsup** for fast, modern builds supporting ESM and CJS |
| 🔄 Automatic Releases  | Optional automated publishing and version management with [changesets](https://github.com/changesets/changesets) |
| 🔍 PR Preview          | Optional package preview builds for every PR and commit with [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new) |
| 🎯 TypeScript Ready    | Full TypeScript support with strict type checking |
| 🧹 Code Quality        | ESLint and Prettier pre-configured for code quality |
| 🧪 Testing Ready       | **Vitest** + **Testing Library** pre-configured, with CI running on every PR |
| ⚛️ React Support       | React support with proper peer dependencies **React 19** + **React Compiler** ready |
| 🔒 Type Safety         | Strict TypeScript configuration for better type safety |

<br/>

## ❗️ MUST DO ON TEMPLATE FORK ❗️

This template has sample data by default. So run the setup script as soon as you fork & clone.

```bash
pnpm setup:template
```

This will fill package information and install deps for you. Remember to commit.

> If you enable PR & commit package preview you need to install [PKG.PR.NEW](https://github.com/apps/pkg-pr-new) on the target repository.

### `package.json` defaults

- `author: joyco.studio`
- `publishConfig.access: public`
- `version: 0.0.0`
- `license: ISC`

<br/>

## 👀 Good to know

If you **DON't** need react as a peer dependency you **NEED** to delete it.

```bash
# 1. Remove both the devDependencies and peerDependencies
pnpm remove @types/react react
```

Then **manually** remove the peerDependencies section from `package.json` and also check `eslint.config.js`, `tsconfig.json`.

<br/>

## 🧪 Testing

This template ships test-ready with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com), running in a `jsdom` environment so you can test both plain logic and React components.

```bash
# Run the suite once
pnpm test

# Run in watch mode while developing
pnpm test:watch
```

Tests live next to the source as `*.test.ts` / `*.test.tsx` files (see `packages/core/*.test.*` for examples). The included `.github/workflows/ci.yml` workflow typechecks and runs the suite on every pull request.

<br/>

## 🤖 Automatic Workflows

This template comes with two GitHub Actions workflows (currently disabled for convenience):

1. **Release Workflow** (`.github/workflows/release.yml.disabled`): Automates the release process using Changesets. When enabled, it will automatically create release pull requests and publish to npm when changes are pushed to the main branch.

2. **Publish Any Commit** (`.github/workflows/publish-any-commit.yml.disabled`): A utility workflow that can build and publish packages for any commit or pull request.

To enable these workflows, simply remove the `.disabled` extension from the workflow files in the `.github/workflows/` directory. We recommend enabling them to automate your package's release process.

<br/>

## 🦋 Version Management

This library uses [Changesets](https://github.com/changesets/changesets) to manage versions and publish releases. Here's how to use it:

### Adding a changeset

When you make changes that need to be released:

```bash
pnpm changeset
```

This will prompt you to:

1. Select which packages you want to include in the changeset
2. Choose whether it's a major/minor/patch bump
3. Provide a summary of the changes

### Creating a release

To create a new version and update the changelog:

```bash
# 1. Create new versions of packages
pnpm version:package

# 2. Release (builds and publishes to npm)
pnpm release
```

Remember to commit all changes after creating a release.
