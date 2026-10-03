# Agent instructions

## Releases must use the automatic PR flow

Read [.changeset/README.md](.changeset/README.md) before release work. These rules
apply to both beta and stable releases.

- Treat requests to release or publish as instructions to use the Changesets PR
  workflow. They are not permission to bypass it.
- This template ships with `.github/workflows/release.yml.disabled`. Enable it
  as `release.yml` and configure npm trusted publishing for the target repository
  before releasing. If automation is not configured, prepare that setup through
  a PR rather than publishing manually.
- Prepare changesets and, when needed, prerelease-state changes on a feature
  branch. `pnpm changeset`, `pnpm changeset pre enter beta`, and
  `pnpm changeset pre exit` are the supported preparation commands. Commit those
  files in a PR targeting `main`.
- After the feature PR merges, let GitHub Actions create or update **Version
  Packages**. Review and merge that generated PR within the user's authorized
  scope. If merging is outside the requested scope, provide the PR and explain
  that it is the remaining step. Its merge triggers automated publication.
- Never manually run `pnpm changeset version`, `pnpm version:package`,
  `npm version`, `pnpm release`, `pnpm changeset publish`, `npm publish`, or
  `pnpm publish`. Versioning and publishing scripts are for the Release workflow.
- Do not manually bump package versions or generate release changelog entries.
  The template setup's initial version reset to `0.0.0` is initialization, not a
  release. Do not create, move, or push release tags, change npm dist-tags, or push
  directly to `main`. Do not add manual or tag-triggered publishing paths.
- If release automation fails, diagnose and fix it through a PR. Do not fall back
  to manual publishing. Read-only registry checks, builds, and tests are fine.
- Verify the successful workflow run and published npm version and dist-tag
  before saying a release is complete. Opening or merging a feature PR alone is
  not a release.

The optional `pkg-pr-new` workflow publishes commit previews; those previews are
separate from npm releases and do not replace the release PR.
