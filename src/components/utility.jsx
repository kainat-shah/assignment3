import "./utility.css"
import { useState } from "react";
const UtilityApp = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handlerUppercase = () =>
        setOutputText(inputText.toUpperCase());
    const handlerLowerCase = () =>
        setOutputText(inputText.toLowerCase());

    const capitalize = () => {
        const capitalization = inputText
          .split(" ")
          .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
          .join(" ");
        setOutputText(capitalization);
      };

    const resetFields = () => {
        setInputText("");
        setOutputText("");
    };

    return (
        <>
            <div>
                <h1>Type your text to transform</h1>
                <textarea type="text" placeholder="Type here...."
                    value={inputText} onChange={(e) => setInputText(e.target.value)}
                >
                </textarea>
                <br />
                <button type="button" className="uppercase" onClick={handlerUppercase}>UpperCase</button>
                <button type="button" className="lowercase" onClick={handlerLowerCase}>LowerCase</button>
                <button type="button" className="capitalize"onClick={capitalize}>Capitalize</button>
                <button type="button" className="reset"onClick={resetFields}>Reset</button>
            </div>
          <div>
          <h2>Transformed Text:</h2>
          <div className="output">
          {outputText}
          </div>
              
            </div>
        </>

    )
};
export default UtilityApp;