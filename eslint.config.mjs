// @ts-check
import recommended from '@bangbang93/eslint-config-recommended'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['lib/**', 'dist/**', 'src/types/**'],
  },
  ...recommended,
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  prettierRecommended,
  {
    rules: {
      'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
    },
  },
]
