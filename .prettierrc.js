/**
 * @type {import('prettier').Options}
 */
module.exports = {
  semi: false, // 关闭在每一条语句末尾添加分号
  singleQuote: true, // 使用单引号
  trailingComma: 'none', // 关闭对象末尾逗号
  endOfLine: 'lf',
  overrides: [
    // 覆盖指定文件配置
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
}
