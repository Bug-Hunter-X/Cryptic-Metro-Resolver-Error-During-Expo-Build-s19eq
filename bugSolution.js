The solution involved clearing the cache and reinstalling all dependencies using the following commands:

```bash
rm -rf node_modules
rm -rf ios/build
rm -rf android/build
yarn cache clean
yarn install
expo prebuild
expo build:ios
```

This resolved the cryptic 'metro-resolver' error, allowing the Expo build to complete successfully.  If the issue persists after these steps, carefully review your `package.json` file and `import` statements to identify any potential module conflicts.