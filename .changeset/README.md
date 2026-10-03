# Release workflow

Both stable and beta releases use the `Release` GitHub Actions workflow. This
template ships it as `.github/workflows/release.yml.disabled`: enable automatic
releases during `pnpm setup:template`, or rename it to `release.yml`, and configure
npm trusted publishing for the target repository and workflow as described in
that file before releasing.

## Stable releases

1. Prepare a changeset on a feature branch with `pnpm changeset`. Select the
   publishable package, the appropriate major/minor/patch bump, and a summary.
2. Commit the changeset with the code in a feature PR targeting `main`.
3. Merge the reviewed feature PR after its checks pass. The Release workflow
   creates or updates the **Version Packages** PR, including any pending changesets
   already on `main`.
4. Review that generated PR's versions, changelogs, and prerelease state, then
   merge it within the user's authorized scope. Its merge triggers publication.
5. Verify the successful Release run and the package version and dist-tag in npm
   before reporting completion. A `pkg-pr-new` preview is not an npm release.

Use the package name from `package.json` for registry checks and installs. Stable
releases use `<package-name>@latest`; beta releases use `<package-name>@beta`.

## Beta releases

For the first beta, prepare a changeset and run `pnpm changeset pre enter beta`
on a feature branch. Include the generated `.changeset/pre.json` in the feature
PR targeting `main`, then follow the same **feature PR → Version Packages PR →
automated publication** flow. Changesets produces versions such as
`1.2.0-beta.0` and publishes with the `beta` dist-tag.

Subsequent beta changes need only their changesets while prerelease mode remains
active; the workflow advances the beta version. Beta mode remains active on
`main` until intentionally exited, so pending changes on `main` participate in
beta releases during this period.

To prepare a stable release, run `pnpm changeset pre exit` on a feature branch
and commit the updated `.changeset/pre.json` in a PR targeting `main`. Follow the
same two-PR flow: the Release workflow handles removing the prerelease suffix,
updating changelogs, and publishing the stable version to `latest`.

## Agent release rules

Only the Release workflow runs versioning and publishing commands. Do not run
`pnpm version:package`, `pnpm changeset version`, `npm version`, `pnpm release`,
`pnpm changeset publish`, `npm publish`, or `pnpm publish` locally. Do not manually
change release versions, generate changelogs, push release tags, or change npm
dist-tags. If automation fails, diagnose and fix it through a PR instead of
publishing manually.

See [AGENTS.md](../AGENTS.md) for the complete agent release rules and the
[Changesets prerelease guide](https://changesets.dev/guide/prereleases) for
background. This repository uses the automatic PR flow for all releases.
