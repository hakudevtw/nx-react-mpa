module.exports = {
  commitTypes: [
    { label: 'init', emoji: '🎉', desc: '初始化' },
    {
      label: 'feat',
      emoji: '✨',
      desc: '需求異動時，新增/修改功能（ Ex. 功能或規格變更, 刪除檔案 ）',
    },
    { label: 'fix', emoji: '🐞', desc: '修補 bug' },
    { label: 'docs', emoji: '📝', desc: '新增/修改文件' },
    {
      label: 'style',
      emoji: '💄',
      desc: '格式調整，但不影響程式碼運行的變動（ Ex. formatting ）',
    },
    {
      label: 'refactor',
      emoji: '🦄',
      desc: '重構，不是新增功能或修補 bug 的程式碼變動',
    },
    { label: 'perf', emoji: '⚡️', desc: '改善效能的修改' },
    { label: 'test', emoji: '🧪', desc: '新增或修改測試' },
    {
      label: 'build',
      emoji: '📦️',
      desc: '影響構建系統或外部依賴的修改',
    },
    {
      label: 'ci',
      emoji: '🚀',
      desc: '調整 CI 相關的設定檔案 Scripts',
    },
    {
      label: 'chore',
      emoji: '🐳',
      desc: '建構程序或輔助工具的變動（ Ex. 版本更新, 建制環境 ）',
    },
    {
      label: 'revert',
      emoji: '⏪️',
      desc: '撤銷回覆先前的 commit',
    },
  ],
  scopes: [],
};
