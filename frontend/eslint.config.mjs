// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": ["error", { singleline: 3 }],
    "@stylistic/comma-dangle": "off",
    "@stylistic/quotes": "off",
    "@stylistic/semi": "off",
    "@stylistic/arrow-parens": "off",
    "@stylistic/member-delimiter-style": "off",
  },
});
