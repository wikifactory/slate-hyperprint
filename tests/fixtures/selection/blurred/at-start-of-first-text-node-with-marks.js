/** @jsx h */

import h from '../../../h';

const input = (
    <value>
        <document>
            <paragraph />
            <paragraph>
                <text key="selection_key">Hello, world!</text>
            </paragraph>
        </document>
        <selection marks={[{ type: 'bold' }]} />
    </value>
);

const output = `
<value>
    <document key="2">
        <paragraph key="0">
            <text key="3" />
        </paragraph>
        <paragraph key="1">
            <text key="selection_key">Hello, world!</text>
        </paragraph>
    </document>
    <selection marks={[{ type: 'bold' }]}>
        <anchor key="selection_key" />
        <focus key="selection_key" />
    </selection>
</value>
`;

const options = { preserveKeys: true };

export { input, output, options };
