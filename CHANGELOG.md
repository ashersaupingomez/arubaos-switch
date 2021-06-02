# Changelog

## 4.0.1
- Added: improved defaults for `loginClient`

## 4.0.0
- Changed: combine all code into one index.js file
- Removed: Typescript, because it doesn't seem worth it

## 3.0.0
- Added: typescript support
- Added: this changelog
- Added: `createClient()` default value in `useClient`
- Changed: more thorough & clear documentation
- Changed: swapped `fn` & `client` parameter orders in `useClient` (breaking change)
- Removed: `loginClient` & `logoutClient` documentation, as they're rarely used
- Removed: `superagent-prefix` package
- Removed: `dotenv` package