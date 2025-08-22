import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "lib/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve({ extensions: [".js", ".ts", ".tsx"] }),
      commonjs(),
      typescript({
        jsx: "react-jsx",
        jsxImportSource: "nativewind",
        tsconfig: "./tsconfig.json",
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
        configFile: "./.babelrc",
      }),
    ],
  },
  // {
  //   input: "src/index.ts",
  //   output: {
  //     file: "lib/index.d.ts",
  //     format: "es",
  //   },
  //   plugins: [dts()],
  // },
];
