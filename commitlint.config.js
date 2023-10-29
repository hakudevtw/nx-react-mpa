// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      footerPrefixesSelect:
        'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefix: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    types: [
      {
        value: 'feat',
        name: '✨ feat:     需求異動時，新增/修改功能（ Ex. 功能或規格變更, 刪除檔案 ）',
        emoji: ':sparkles:',
      },
      { value: 'fix', name: '🐞 fix:      修補 bug', emoji: ':lady_beetle:' },
      {
        value: 'docs',
        name: '📝 docs:     新增/修改文件',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: '💄 style:    格式調整，但不影響程式碼運行的變動（ Ex. formatting ）',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: '🦄 refactor: 重構，不是新增功能或修補 bug 的程式碼變動',
        emoji: ':unicorn:',
      },
      {
        value: 'perf',
        name: '⚡️ perf:     改善效能的修改',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: '🧪 test:     新增或修改測試',
        emoji: ':test_tube:',
      },
      {
        value: 'build',
        name: '📦️ build:    影響構建系統或外部依賴的修改',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: '🚀 ci:       調整 CI 相關的設定檔案 Scripts',
        emoji: ':rocket:',
      },
      {
        value: 'chore',
        name: '🐳 chore:    建構程序或輔助工具的變動（ Ex. 版本更新, 建制環境 ）',
        emoji: '🐳',
      },
      {
        value: 'revert',
        name: '⏪️ revert:   撤銷回覆先前的 commit',
        emoji: ':rewind:',
      },
    ],
    scopes: [],
    useEmoji: true,
    allowBreakingChanges: ['feat', 'fix'],
    issuePrefixes: [{ value: 'closed', name: 'closed: 標記 ISSUES 已完成' }],

    // emojiAlign: 'center',
    // themeColorCode: '',
    // allowCustomScopes: true,
    // customScopesAlign: 'bottom',
    // customScopesAlias: 'custom',
    // emptyScopesAlias: 'empty',
    // upperCaseSubject: false,
    // markBreakingChangeMode: false,
    // breaklineNumber: 100,
    // breaklineChar: '|',
    // skipQuestions: [],
    // customIssuePrefixAlign: 'top',
    // emptyIssuePrefixAlias: 'skip',
    // customIssuePrefixAlias: 'custom',
    // allowCustomIssuePrefix: true,
    // allowEmptyIssuePrefix: true,
    // confirmColorize: true,
    // maxHeaderLength: Infinity,
    // maxSubjectLength: Infinity,
    // minSubjectLength: 0,
    // scopeOverrides: undefined,
    // defaultBody: '',
    // defaultIssues: '',
    // defaultScope: '',
    // defaultSubject: '',
  },
};
