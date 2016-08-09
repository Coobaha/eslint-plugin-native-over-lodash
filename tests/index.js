const rules = require('../lib/rules');
const RuleTester = require('eslint').RuleTester;
const kebabCase = require('kebab-case');

const ruleTester = new RuleTester({
    parser: 'babel-eslint'
});
const rule = rule => rules[`${kebabCase(rule)}`];

ruleTester.run('concat', rule('concat'), {
  valid: [
    'array.concat(2, [3], [[4]])'
  ],
  invalid: [{
    code: 'import concat from "lodash/concat"',
    errors: ['Consider using the native Array.prototype.concat()']
  }]
});

ruleTester.run('index import', rule('index'), {
    valid: [
        'import merge from "lodash/merge"'
    ],
    invalid: [
        {
            code: 'import asd from "lodash"',
            errors: ['Importing the entire lodash library is not permitted, please import the specific functions you need']
        }
    ]
});


ruleTester.run('keys', rule('keys'), {
    valid: [
        'Object.keys({one: 1, two: 2, three: 3})'
    ],
    invalid: [
        {
            code: 'import keys from "lodash/keys"; keys({one: 1, two: 2, three: 3})',
            errors: ['Consider using the native Object.keys()']
        },
        {
            code: 'import  {_keys} from "lodash/keys"; _keys({one: 1, two: 2, three: 3})',
            errors: ['Consider using the native Object.keys()']
        }
    ]
});
