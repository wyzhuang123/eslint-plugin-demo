import { ESLintUtils } from "@typescript-eslint/experimental-utils";
import { TSESTree } from "@typescript-eslint/experimental-utils";
import { isStringLiteral } from "typescript";

const RuleCreator = ESLintUtils.RuleCreator(name => name);

type MessageIds = 'noChineseCharacter';
type Options = [];

function isChineseCharacter(value: string) {
    return /[\u4e00-\u9fff]/.test(value);
}

export default RuleCreator<Options, MessageIds>({
    name: "no-chinese-character",
    meta: {
        type: "problem",
        docs: {
            description: "could not have chinese character",
            recommended: "error"
        },
        schema: [],
        messages: {
            'noChineseCharacter': "could not have chinese character"
        }
    },
    defaultOptions: [],

    create(context) {
        function report(node: any) {
            context.report({
                node,
                loc: node.loc,
                messageId: 'noChineseCharacter'
            })
        }
        
        return {
            Literal(node: TSESTree.Literal) {
                if (typeof node.value === 'string' && isChineseCharacter(node.value)) {
                    report(node);
                }
            }
        }
    }
})