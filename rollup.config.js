import babel from 'rollup-plugin-babel';  
import commonjs from 'rollup-plugin-commonjs';  
import resolve from 'rollup-plugin-node-resolve';  
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';  

const commonConfig = {
  input: 'src/index.js',
  plugins: [  
    babel({ exclude: 'node_modules/**' }),  
    resolve(),  
    commonjs(),
    terser(),
    json(),  
  ],
}
  
export default [  
  // ES Module (ESM)  
  {
    ...commonConfig,
    input: 'src/index.js',  
    output: {  
      file: 'dist/esm/index.js',  
      format: 'esm',  
      name: 'babelPluginConditionalCompile',  
    },
  },  

  // CommonJS  
  {  
    ...commonConfig,
    input: 'src/index.js',  
    output: {  
      file: 'dist/commonjs/index.js',  
      format: 'cjs',  
      name: 'babelPluginConditionalCompile',  
    },  
  },  
  
  // UMD  
  {  
    ...commonConfig,
    input: 'src/index.js',  
    output: {  
      file: 'dist/umd/my-library.js',  
      format: 'umd',  
      name: 'babelPluginConditionalCompile',
    },
  },  
];