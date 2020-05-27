module.exports = {
  presets: [
    // Preset customized options may be appended to a given preset
    // @see https://babeljs.io/docs/en/options#plugin-preset-entries
    ["@vue/cli-plugin-babel/preset",
      { "useBuiltIns": "usage" // optimizable option
                             // @see https://babeljs.io/docs/en/babel-preset-env
                             // @see https://cli.vuejs.org/guide/browser-compatibility.html#polyfills
      }
    ]
  ]
};
