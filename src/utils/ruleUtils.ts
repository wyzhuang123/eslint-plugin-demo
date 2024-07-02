import { ESLintUtils } from '@typescript-eslint/experimental-utils';

function createRule() {
    return ESLintUtils.RuleCreator(name => name);
}

export const ruleUtils = {
    createRule
}