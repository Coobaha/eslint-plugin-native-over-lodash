const kebabCase = require('kebab-case');
const rules = require('./rules');

const allRules = {};

const prefix = rule => `${kebabCase(rule)}`;
for (const rule in rules) {
    const errorMessage = rules[rule];
    allRules[prefix(rule)] = {
        create (context) {
            return {
                ImportDeclaration: function (node) {

                    if (node.source.value.startsWith(`lodash`) && node.source.value.includes(`/${rule}`)) {
                        context.report({
                            node,
                            message: errorMessage
                        });
                    }
                }
            };
        }
    };
}

allRules[prefix('index')] = {
    create (context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value === 'lodash' || node.source.value === 'lodash-compat' || node.source.value === 'lodash-es6') {
                    context.report(node.source, 'Importing the entire lodash library is not permitted, please import the specific functions you need');
                }
            }
        };
    }
};

module.exports = allRules;
