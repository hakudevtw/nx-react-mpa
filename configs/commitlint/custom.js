module.exports = {
  commitTypes: [
    { label: 'init', emoji: '🎉', desc: '🎉 init:     初始化' },
    {
      label: 'feat',
      emoji: '✨',
      desc: '✨ feat:     需求異動時，新增/修改功能（ Ex. 功能或規格變更, 刪除檔案 ）',
    },
    { label: 'fix', emoji: '🐞', desc: '🐞 fix:      修補 bug' },
    { label: 'docs', emoji: '📝', desc: '📝 docs:     新增/修改文件' },
    {
      label: 'style',
      emoji: '💄',
      desc: '💄 style:    格式調整，但不影響程式碼運行的變動（ Ex. formatting ）',
    },
    {
      label: 'refactor',
      emoji: '🦄',
      desc: '🦄 refactor: 重構，不是新增功能或修補 bug 的程式碼變動',
    },
    { label: 'perf', emoji: '⚡️', desc: '⚡️ perf:     改善效能的修改' },
    { label: 'test', emoji: '🧪', desc: '🧪 test:     新增或修改測試' },
    {
      label: 'build',
      emoji: '📦️',
      desc: '📦️ build:    影響構建系統或外部依賴的修改',
    },
    {
      label: 'ci',
      emoji: '🚀',
      desc: '🚀 ci:       調整 CI 相關的設定檔案 Scripts',
    },
    {
      label: 'chore',
      emoji: '🐳',
      desc: '🐳 chore:    建構程序或輔助工具的變動（ Ex. 版本更新, 建制環境 ）',
    },
    {
      label: 'revert',
      emoji: '⏪️',
      desc: '⏪️ revert:   撤銷回覆先前的 commit',
    },
  ],
};
