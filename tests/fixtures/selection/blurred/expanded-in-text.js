/** @jsx h */

import h from '../../../h';

const input = (
    <value>
        <document>
            <paragraph>
                <text key="anchor_key" />
            </paragraph>
            <paragraph>
                <text key="focus_key">Hello, world!</text>
            </paragraph>
        </document>
        <selection>
            <anchor key="anchor_key" />
            <focus key="focus_key" offset={1} />
        </selection>
    </value>
);

const output = `
<value>
    <document key="2">
        <paragraph key="0">
            <text key="anchor_key" />
        </paragraph>
        <paragraph key="1">
            <text key="focus_key">Hello, world!</text>
        </paragraph>
    </document>
    <selection>
        <anchor key="anchor_key" />
        <focus key="focus_key" offset={1} />
    </selection>
</value>
`;

const options = { preserveKeys: true };

export { input, output, options };
