# Changelog

## [3.2.0] - 2024-05-22

- Removed `prettier` and `eslint` from the project, and replaced them with `biome`
- Removed `pre-commit` and setup a git hook with `biome` instead
- Updated CI/CD QA to run `biome` and `jest` tests

## [3.1.1] - 2024-04-14

- Fixed `requests` functions not accessible from the main index

## [3.1.0] - 2024-04-14

- Added `requests` folder with utilities for performing HTTP requests
- Improved `pre-commit` config

## [3.0.1] - 2023-03-08

- Fixed missing functions: `keysToSnake`, `keysToCamel`, `recursiveKeysTransformation`

## [3.0.0] - 2023-03-08

- Major revamp with a new structure:
  - Functions are now split between: `async`, `checks`, `cookies`, `dom`, `maths`, and `transforms`
  - Most functions are now arrow functions
  - Added tests for most functions
- Added new functions
- Removed unused functions

## [2.1.4] - 2023-01-04

- Explicitly export all functions in the main index.js
- Added files in the built package

## [2.1.3] - 2023-01-04

- Update publishing to first build the package

## [2.1.1] - 2023-01-03

- Remove unnecessary layer of imports
- Can now import directly from jkscript (without subfolder)

## [2.1.0] - 2023-01-03

- Removed `dom`, `api`, and `date`
- Added new functions to web
- Updated some functions to arrow functions

## [2.0.0] - 2022-10-08

Major revamp with a new structure:

- `api`: API tools like endpoint base class and custom fetch
- `array`: Array utilities and manipulations
- `async`: Debouncing, throttling, and other async or time-related utilities
- `date`: Date manager and formatter (with dayjs)
- `dom`: DOM interactions
- `image`: Image management
- `object`: Object utilities and manipulations
- `string`: String utilities and manipulations
- `web`: Web related tools (cookies, urls, etc.)

## [1.0.1] - 2022-01-04

- Changed:
  - Split all functions into individual files (but no impact on imports)
  - Added tests to most functions

## [1.0.0] - 2022-01-04

- Added:
  - [arrays] Added `filterMap` and `toHashMap` for arrays
  - [async] Added `DebouncedFunction` and `ThrottledFunction` as well as a `wait` helper
  - [colors] Added `extractRBGFromHex` and `hexToRGB` converters
  - [dom] Added the `maybeNumberToPx` converter and the `tryScrollToAnchor` action
  - [validators] Added the following validators:
    - `emailValidator`
    - `maxLengthValidator`
    - `minLengthValidator`
    - `minMaxLengthValidator`
    - `requiredValidator`
