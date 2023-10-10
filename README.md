# Deno npm specifier bug

npm specifiers ignore settings in import map.

## Steps to reproduce

1. Clone this repository
2. Run `deno run foo.tsx`

It should log `it works` if the bug is resolved and will log `it doesn't work` if the error is still there. Preact's `option` hook API relies on a singleton internally and if there are multiple copies of Preact they won't see each other. Main issue is that somehow multiple Preact versions are installed despite the import map only having one.
