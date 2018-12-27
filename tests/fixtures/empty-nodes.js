/** @jsx h */

import h from '../h';

const space = ' ';
const input = (
    <value>
        <document>
            <paragraph />
            <paragraph>{space}</paragraph>
        </document>
    </value>
);

const output = `
<value>
    <document>
        <paragraph />
        <paragraph> </paragraph>
    </document>
    <selection>
        <anchor path={[1, 0]} />
        <focus path={[1, 0]} />
    </selection>
</value>
`;

export { input, output };
