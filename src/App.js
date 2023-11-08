// src/components/Task1.js

import React, { useState } from 'react';

const App = () => {
    const [paragraph, setParagraph] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const handleParagraphChange = (event) => {
        setParagraph(event.target.value);
    };

    const handleCountWords = (event) => {
        event.preventDefault();
        const words = paragraph.split(/\s+/);
        setWordCount(words.length);
    };

    return (
        <div className={'bg-[#111820] h-screen flex flex-col gap-2 md:gap-4 lg:gap-8 justify-center'}>
            <h1 className={'text-center text-xl md:text-3xl font-bold text-white'}>Paragraph Word Counter</h1>
            <form className={'flex justify-center'} onSubmit={handleCountWords}>
                <div className="w-full md:w-1/2 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea
                            id="comment"
                            rows="4"
                            className="focus:outline-none h-80 focus:border-none resize-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Write a paragraph..."
                            value={paragraph}
                            onChange={handleParagraphChange}
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                            Count Words
                        </button>
                    </div>
                </div>
            </form>
            <div className={'flex justify-center text-white'}>
                No of words are: {wordCount}
            </div>
        </div>
    );
};

export default App;