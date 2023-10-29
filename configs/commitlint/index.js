/** @type {import('cz-git').UserConfig} */
const { getTypeName } = require('./utils');
const { commitTypes } = require('./custom');

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
