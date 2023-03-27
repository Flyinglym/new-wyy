module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended" // 添加 prettier 插件
  ],
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    semi: 0
  }
};
