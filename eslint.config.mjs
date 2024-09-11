import globals from "globals";

module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2022: true,
    },
    extends: ['eslint:recommended', 'prettier'],
};

export default [
  {languageOptions: { globals: globals.browser }},
];