import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:@next/next/recommended"
  ),
  ...compat.plugins("prettier", "simple-import-sort", "unused-imports"),
  ...compat.config({
    extends: "eslint:recommended",
    rules: {
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          semi: true,
          trailingComma: "none",
          tabWidth: 2,
          endOfLine: "auto",
          useTabs: false,
          singleQuote: false,
          printWidth: 80,
          jsxSingleQuote: false
        }
      ],
      // Import sorting
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // React and React DOM related packages
            ["^react", "^next"],

            // Tanstack, Redux ecosystem and routing
            ["^@tanstack", "@ant-design", "@hookform"],

            // All other third party imports
            ["^"],

            // Internal paths starting with @/
            ["^@/"],

            // Other third party packages starting with @ or plain words
            ["^@?\\w"],

            // Packages starting with ~ (often used for internal aliases)
            ["^~?\\w"],

            // Relative imports (parent or current directory)
            ["^\\./(?=.*/)(?!/?$)", "^\\./?$"],

            // Side effect imports and types
            ["^\\u0000"]
          ]
        }
      ],
      "simple-import-sort/exports": "warn",

      // Unused imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],

      // Import rules
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      "@next/next/no-img-element": "off"
    }
  })
];

export default eslintConfig;
