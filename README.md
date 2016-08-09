### Helps you to use Native JS methods where possible

works only with ES6 code

rules are taken from [You-Dont-Need-Lodash-Underscore](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore/blob/master/lib/rules/rules.json)


`npm install -D eslint-plugin-native-over-lodash`


`.eslintrc`
```
{
  "plugins": [
    "native-over-lodash"
  ],
  "rules": [
      "native-over-lodash/concat": 2,
      "native-over-lodash/fill": 2,
      "native-over-lodash/find": 2,
      "native-over-lodash/detect": 2,
      "native-over-lodash/find-index": 2,
      "native-over-lodash/index-of": 2,
      "native-over-lodash/join": 2,
      "native-over-lodash/last-index-of": 2,
      "native-over-lodash/reverse": 2,
      "native-over-lodash/each": 2,
      "native-over-lodash/for-each": 2,
      "native-over-lodash/every": 2,
      "native-over-lodash/all": 2,
      "native-over-lodash/filter": 2,
      "native-over-lodash/select": 2,
      "native-over-lodash/includes": 2,
      "native-over-lodash/contains": 2,
      "native-over-lodash/map": 2,
      "native-over-lodash/collect": 2,
      "native-over-lodash/reduce": 2,
      "native-over-lodash/inject": 2,
      "native-over-lodash/foldl": 2,
      "native-over-lodash/reduce-right": 2,
      "native-over-lodash/foldr": 2,
      "native-over-lodash/size": 2,
      "native-over-lodash/some": 2,
      "native-over-lodash/any": 2,
      "native-over-lodash/is-nan": 2,
      "native-over-lodash/extend-own": 2,
      "native-over-lodash/assign": 2,
      "native-over-lodash/keys": 2,
      "native-over-lodash/repeat": 2,
      "native-over-lodash/to-lower": 2,
      "native-over-lodash/to-upper": 2,
      "native-over-lodash/trim": 2
}
```
