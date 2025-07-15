import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // Import ordering rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // External packages
            "internal", // Internal modules (using aliases)
            "parent", // Parent directory imports
            "sibling", // Sibling imports
            "index", // Index imports
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Prefer aliases over relative imports for deeper paths
      "import/no-relative-packages": "error",

      // Custom rule to enforce using aliases for lib, components, etc.
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../../lib/*", "../../../lib/*", "../../../../lib/*"],
              message:
                "Use @/lib/* instead of relative imports for lib directory",
            },
            {
              group: [
                "../../components/*",
                "../../../components/*",
                "../../../../components/*",
              ],
              message:
                "Use @/components/* instead of relative imports for components directory",
            },
            {
              group: ["../../app/*", "../../../app/*", "../../../../app/*"],
              message:
                "Use @/app/* instead of relative imports for app directory",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
