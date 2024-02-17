import React, { useState } from 'react';

function Translator() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleTranslation = () => {
        fetch('https://translation-api-cj1u.onrender.com/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
                source: 'de',
                target: 'en'
            })
        })
        .then(response => response.json())
        .then(data => {
            setTranslatedText(data.translated_sentence);
        })
        .catch(error => {
            console.error('Error fetching translation:', error);
            setTranslatedText('Error in translation');
        });
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleInputChange} />
            <button onClick={handleTranslation}>Translate</button>
            <p>Translated Text: {translatedText}</p>
        </div>
    );
}

export default Translator;
