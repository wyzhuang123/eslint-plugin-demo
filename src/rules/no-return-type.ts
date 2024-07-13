import { ESLintUtils, TSESTree } from "@typescript-eslint/experimental-utils";

const RuleCreator = ESLintUtils.RuleCreator(name => name);

type MessageIds = 'withoutReturnType';
type Options = [];

export default RuleCreator<Options, MessageIds>({
    name: "without-return-type",
    meta: {
        type: "problem",
        docs: {
            description: "Without return type",
            recommended: "error"
        },
        schema: [],
        messages: {
            'withoutReturnType': "A function must have a return value"
        }
    },
    defaultOptions: [],
    create(context) {
        return {
            FunctionDeclaration(node: TSESTree.FunctionDeclaration) {
                if (node.body.body && node.body.body[0].type === 'ReturnStatement') {
                    if (!node.returnType) {
                        context.report({
                            loc: node.loc,
                            node,
                            messageId: 'withoutReturnType',
                        })
                    }
                }
            }
        }
    }
})