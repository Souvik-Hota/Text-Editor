import React, { useState } from 'react';
import axios from 'axios';

export default function TextForm({ darkMode, showAlert }) {
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to UPPERCASE!", "Success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase!", "Info");
  };

  const handleClearClick = () => {
    setText('');
    setCorrectedText('');
    showAlert("Text cleared successfully.", "Info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSummarizeText = () => {
   const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

    const summary = sentences.slice(0, Math.ceil(sentences.length / 3)).join(' ').trim();
    setText(summary);
    showAlert("Summary created!", "Success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard!", "Success");
  };

  const handleExtraSpaces = () => {
    const cleanedText = text.split(/\s+/).join(' ').trim();
    setText(cleanedText);
    showAlert("Extra spaces removed!", "Info");
  };

  const handleCorrection = async () => {
    try {
      const response = await axios.post(
        'https://api.languagetoolplus.com/v2/check',
        null,
        {
          params: {
            text: text,
            language: 'en-US',
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      let newText = text;
      response.data.matches
        .sort((a, b) => b.offset - a.offset)
        .forEach((match) => {
          const replacement = match.replacements[0]?.value || '';
          newText = newText.slice(0, match.offset) + replacement + newText.slice(match.offset + match.length);
        });

      setCorrectedText(newText);
      showAlert("Grammar corrected!", "Success");
    } catch (error) {
      console.error('Grammar correction failed:', error);
    }
  };

  return (
    <>
      <div className={`container my-3 ${darkMode ? 'text-light bg-dark' : 'text-dark bg-light'}`}>
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <div className="mb-3">
              <label htmlFor="myBox" className="form-label">Message</label>
              <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                id="myBox"
                rows="8"
                placeholder="Type your text here..."
                style={{ resize: 'none' }}
              ></textarea>
            </div>

            <div className="row g-2 mb-3">
              <div className="col-6 col-md-3">
                <button disabled={text.length===0} className="btn btn-primary w-100" onClick={handleUpClick}>Uppercase</button>
              </div>
              <div className="col-6 col-md-3">
                <button disabled={text.length===0} className="btn btn-primary w-100" onClick={handleLoClick}>Lowercase</button>
              </div>
              <div className="col-6 col-md-3">
                <button disabled={text.length===0} className="btn btn-primary w-100" onClick={handleCopy}>Copy</button>
              </div>
              <div className="col-6 col-md-3">
                <button disabled={text.length===0} className="btn btn-primary w-100" onClick={handleExtraSpaces}>Remove Spaces</button>
              </div>
              <div className="col-6 col-md-3">
                <button disabled={text.length===0} className="btn btn-primary w-100" onClick={handleSummarizeText}>Summarize</button>
              </div>
              <div className="col-6 col-md-3">
                <button disabled={text.length===0} className="btn btn-secondary w-100" onClick={handleClearClick}>Clear</button>
              </div>
              <div className="col-12 col-md-6">
                <button disabled={text.length===0} className="btn btn-success w-100" onClick={handleCorrection}>Correct Grammar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{(0.008 * text.trim().split(/\s+/).filter((element) =>{return element.length!==0}).length).toFixed(2)} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview !"}</p>

            {correctedText && (
              <>
                <h3 className="mt-4">Corrected Version</h3>
                <p>{correctedText}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
