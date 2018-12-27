/** @jsx h */

import h from '../h';

const options = {
    strict: true
};

const space = ' ';
const input = (
    <value>
        <document>
            <paragraph />
            <paragraph>{space}</paragraph>
            <paragraph>
                <text />
            </paragraph>
            <paragraph>
                <link>inlines are surrounded by empty texts</link>
            </paragraph>
        </document>
    </value>
);

const output = `
<value>
    <document>
        <paragraph>
            <text />
        </paragraph>
        <paragraph> </paragraph>
        <paragraph>
            <text />
        </paragraph>
        <paragraph>
            <text />
            <link>inlines are surrounded by empty texts</link>
            <text />
        </paragraph>
    </document>
    <selection>
        <anchor path={[1, 0]} />
        <focus path={[1, 0]} />
    </selection>
</value>
`;

export { input, output, options };
