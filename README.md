# jkscript

## Description

Personal library with ES6 JavaScript utilities

- `async`: Debouncing, throttling, and other async or time-related utilities
- `checks`: Type checks and assertions
- `cookies`: Cookie management
- `dom`: DOM interactions
- `maths`: Math utilities
- `requests`: Utilities for performing HTTP requests
- `transforms`: String and object transformations

## Using git hooks

Git hooks are set in the [.githooks](.githooks) folder
_(as `.git/hooks` is not tracked in `.git`)_

Run the following command to tell `git` to look for hooks in this folder:

```shell
git config core.hooksPath .githooks
```
