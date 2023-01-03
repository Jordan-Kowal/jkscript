# Changelog

## [?.?.?] - ???
N/A

## [2.1.0] - 2023-01-03
- Removed `dom`, `api`, and `date`
- Added new functions to web
- Updated some functions to arrow functions
- Can now import directly from jkscript

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
