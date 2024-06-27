import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeEditor = () => {
    const [code, setCode] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl border rounded-md overflow-hidden shadow-lg">
                <Highlight theme={themes.shadesOfPurple} code={code} language="javascript">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={`${className} bg-white p-4`} style={style}>
                            {tokens.map((line, i) => {
                                const lineProps = getLineProps({ line, key: i });
                                return (
                                    <div key={i} className={lineProps.className} style={lineProps.style}>
                                        {line.map((token, key) => {
                                            const tokenProps = getTokenProps({ token, key });
                                            return (
                                                <span key={key} className={tokenProps.className} style={tokenProps.style}>
                                                    {tokenProps.children}
                                                </span>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </pre>
                    )}
                </Highlight>
                <textarea
                    className="w-full h-64 p-4 border-t resize-none outline-none bg-transparent"
                    value={code}
                    onChange={handleChange}
                    spellCheck="false"
                />
            </div>
        </div>
    );
};

export default CodeEditor;
