module.exports = {
  types: [
    {
      value: '🚀 feat',
      name: 'feat:      需求異動時，新增/修改功能（ Ex. 功能或規格變更, 刪除檔案 ）',
    },
    {
      value: '💥 fix',
      name: 'fix:       修補 bug',
    },
    { value: '📄 docs', name: 'docs:      新增/修改文件' },
    {
      value: '💄 style',
      name: 'style:     格式調整，但不影響程式碼運行的變動（ Ex. formatting ）',
    },
    {
      value: '🤖 refactor',
      name: 'refactor:  重構，不是新增功能或修補 bug 的程式碼變動',
    },
    {
      value: '⚡️ perf',
      name: 'perf:      改善效能',
    },
    { value: '🧪 test', name: 'test:      新增測試' },
    {
      value: '🛠️ chore',
      name: 'chore:     建構程序或輔助工具的變動（ Ex. 版本更新, 建制環境 ）',
    },
    {
      value: '⏪ revert',
      name: 'revert:    撤銷回覆先前的 commit',
    },
  ],

  scopes: [
    { name: 'global' },
    { name: 'common' },
    { name: 'flight' },
    { name: 'hotel' },
    { name: 'activity' },
    { name: 'vacation' },
    { name: 'visa' },
  ],

  // scopeOverrides: {
  //   fix: [
  //     { name: 'merge' },
  //     { name: 'style' },
  //     { name: 'e2eTest' },
  //     { name: 'unitTest' },
  //   ],
  // },

  messages: {
    type: '選擇要提交的類型:',
    scope: '請輸入修改範圍 (選填):',
    // used if allowCustomScopes is true
    customScope: '請輸入修改範圍 (選填):',
    subject: '請簡述要提交的內容:',
    body: '請輸入詳細的描述內容，用 "|" 來換行 (選填):\n',
    footer: '列出此次修改後，要關閉的 ISSUES，例如: #31, #34 (選填):',
    confirmCommit: '確認要使用以上的訊息提交 (y/n)',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
