import noConsoleLog from '../rules/no-console-log';
import { TSESLint } from '@typescript-eslint/experimental-utils';

const ruleTester = new TSESLint.RuleTester({
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
        ecmaVersion: 'latest',
        tsconfigRootDir: '../../',
        project: './tsconfig.json',
    },
    env: {
        es6: true
    },
});

ruleTester.run('no-console-log', noConsoleLog, {
    valid: [
        ''
    ],
    invalid: [
        {
            code: 'console.log(1234)',
            errors: [
                {
                    messageId: 'noConsoleLog'
                }
            ]
        }
    ]
})