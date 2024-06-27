import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeEditor = () => {
    const [code, setCode] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">

                <div className="bg-gray-800 text-white p-4 text-xl font-semibold">
                    Code Editor
                </div>

                <div className="p-6">

                    <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the Code Editor</h1>
                    <p className="mb-9 text-gray-700 text-center ">
                        This code editor allows you to write and preview your code with syntax highlighting.
                        Start typing your code in the textarea below, and watch as it gets highlighted in real-time.
                    </p>

                    <Highlight theme={themes.shadesOfPurple} code={code} language="javascript">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={`${className} bg-gray-900 text-white p-4 overflow-auto`} style={style}>
                                {tokens.map((line, i) => {
                                    const lineProps = getLineProps({ line, key: i });
                                    return (
                                        <div key={i} className={`${lineProps.className} flex`}>
                                            <span className="inline-block w-8 text-right pr-2 select-none opacity-50">
                                                {i + 1}
                                            </span>
                                            <div {...lineProps}>
                                                {line.map((token, key) => {
                                                    const tokenProps = getTokenProps({ token, key });
                                                    return (
                                                        <span key={key} {...tokenProps} />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </pre>
                        )}
                    </Highlight>

                    <textarea
                        className="w-full h-64 p-4 border-t resize-none outline-none bg-gray-100 mt-6"
                        value={code}
                        onChange={handleChange}
                        placeholder="Type your code here..."
                        spellCheck="false"
                    />

                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
