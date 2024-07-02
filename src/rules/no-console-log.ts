import { ESLintUtils } from "@typescript-eslint/experimental-utils";
import { ASTUtils, AST_NODE_TYPES } from '@typescript-eslint/experimental-utils';
import { TSESTree } from "@typescript-eslint/experimental-utils";

const RuleCreator = ESLintUtils.RuleCreator(name => name);

type MessageIds = 'noConsoleLog';
type Options = [];

export default RuleCreator<Options, MessageIds>({
    name: "no-console-log",
    meta: {
        type: "problem",
        docs: {
            description: "Disallow console.log",
            recommended: "error"
        },
        schema: [],
        messages: {
            'noConsoleLog': "console.log is not allowed"
        }
    },
    defaultOptions: [],
    create(context) {
        return {
            MemberExpression(node: TSESTree.MemberExpression) {
                const p = node.property as any;
                const obj = node.object as any;
                if (p.name === 'log' && obj.name === 'console') {
                    context.report({
                        node,
                        loc: node.loc,
                        messageId: 'noConsoleLog',
                    })
                }
            }
        }
    }
})