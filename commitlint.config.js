// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */

const getTypeName = (label, emoji) => `${emoji} ${label}`;

const commitTypes = [
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
];

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      commitTypes.map(({ label, emoji }) => getTypeName(label, emoji)),
    ],
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
    types: commitTypes.map(({ label, emoji, desc }) => ({
      value: label,
      name: desc,
      emoji: emoji,
    })),
    scopes: [],
    useEmoji: true,
    emojiAlign: 'left',
    allowBreakingChanges: ['feat', 'fix'],
    issuePrefixes: [{ value: 'closed', name: 'closed: 標記 ISSUES 已完成' }],

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
