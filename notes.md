first error.

```console
Android Bundling failed 4965ms (node_modules/expo/AppEntry.js)
The package at "node_modules/arweave/node/lib/crypto/node-driver.js" attempted to import the Node standard library module "crypto".
It failed because the native React runtime does not include the Node standard library.
```

attempting to create globals to fix.
moved to a root dir index to register app

tried this: https://github.com/webview-crypto/react-native-webview-crypto-example

did not work

trying rn-nodeify - installed all and hack all

expo install react-native-randombytes - overrides the rn-nodeify causing crypto polyfill to break

running rn-nodeify causes the randombytes to break

removed rn-nodeify, trying different tactic.

attempting to use https://www.npmjs.com/package/react-native-polyfill-globals
required installing all peer deps manually, executing the patch-package command, and rolling back react-native to 0.63.3

trying this again but with arweave/web: https://github.com/webview-crypto/react-native-webview-crypto-example
didnt work

trying: https://github.com/margelo/react-native-quick-crypto with metro