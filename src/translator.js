import React, { useState } from 'react';
import './Translator.css'; // Make sure to create this CSS file

function Translator() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state for loading status

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    async function handleTranslation() {
        setIsLoading(true); // Start loading
        try {
            const response = await fetch('https://translation-api-cj1u.onrender.com/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text,
                    source: 'de',
                    target: 'en'
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setTranslatedText(data.translated_sentence);
        } catch (error) {
            console.error('Error fetching translation:', error);
            setTranslatedText('Error in translation');
        }
        setIsLoading(false); // Stop loading
    }

    return (
        <div className="translator-container">
            <textarea 
                value={text} 
                onChange={handleInputChange} 
                placeholder="Enter text in German"
                className="translator-textarea"
                disabled={isLoading} // Disable text area when loading
            />
            <button onClick={handleTranslation} className="translate-button" disabled={isLoading}>
                {isLoading ? <div className="loader"></div> : 'Translate'}
            </button>
            <p className="translated-text">Translated Text: {translatedText}</p>
        </div>
    );
}

export default Translator;
