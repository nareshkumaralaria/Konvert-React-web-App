import React, { useState } from 'react'
import hexRgb from 'hex-rgb';

export const HexToRgb = () => {

    const [hexUserInput, setHexUserInput] = useState({
        hexValue: ""
    });
    const [error, setError] = useState({
        error: ""
    })

    const handleHexInput = (event) => {
        setHexUserInput({
            hexValue: event.target.value,
        });
    }
    const [colorValue, setColorValue] = useState({
        red:"231",
        green:"238",
        blue:"245",
        alpha:"1",
        rgbaCSS:"rgb(231 238 245)"
    })
    const chaneRgba = (event) => {
        if (event.key === 'Enter') {
            if (hexUserInput.hexValue.length === 1 || hexUserInput.hexValue.length === 2 || hexUserInput.hexValue.length === 5 || hexUserInput.hexValue.length === 7 || hexUserInput.hexValue.length >= 9) {
                setError({
                    error: "Please Enter Vaild Hex Code"
                })
            }
            else{
                const rgbaValue = hexRgb(hexUserInput.hexValue, {format: 'array'});
                setColorValue({
                    red : rgbaValue[0],
                    green : rgbaValue[1],
                    blue : rgbaValue[2],
                    alpha : rgbaValue[3],
                    rgbaCSS : hexRgb(hexUserInput.hexValue, {format: 'css'})
                })
                const bodyBg = hexRgb(hexUserInput.hexValue, {format: 'css'});
                document.body.style.backgroundColor = bodyBg;
                setError({
                    error: ""
                })
            }
            
        }
    }

    const handleCopyCss = () => {
        navigator.clipboard.writeText(colorValue.rgbaCSS);
        let btn = document.getElementById("copyBtn");
        btn.innerHTML = "Copied!";
        setTimeout(()=> {
            btn.innerHTML = "Copy CSS";
        }, 1500);
    }

     
    return (
        <>
            <div className="container">
                <div className="centerDiv">
                    <div className="contentDiv">
                        <div className="icon">
                            <img className="img" src="./favicon/favicon-96x96.png" alt="" />
                        </div>
                        <div className="hexInputDiv">
                            <label className="hexInputLabel" htmlFor="hexInput" >Hex Color</label>
                            <input 
                            name="hexInput" 
                            value={hexUserInput.hexValue} 
                            onChange={handleHexInput}
                            onKeyPress={chaneRgba} 
                            className="hexInput" 
                            placeholder="#E7EEF5" 
                            type="text" />
                            <span className="error" >{error.error}</span>
                        </div>
                        <div className="rgbCodeDiv">
                            <p className="rgbCode">Rgb Codes</p>
                            <div className="codeDiv">
                                <div className="text">
                                    <p className="codeText">Red</p>
                                </div>
                                <p className="codeValue">{colorValue.red}</p>
                            </div>
                            <div className="codeDiv">
                                <div className="text">
                                    <p className="codeText">Green</p>
                                </div>   
                                <p className="codeValue">{colorValue.green}</p>
                            </div>
                            <div className="codeDiv">
                                <div className="text">
                                    <p className="codeText">Blue</p>
                                </div>
                                <p className="codeValue">{colorValue.blue}</p>
                            </div>
                            <div className="codeDiv">
                                <div className="text">
                                    <p className="codeText">Alpha</p>
                                </div>
                                <p className="codeValue">{colorValue.alpha}</p>
                            </div>
                            <div className="codeDiv">
                                <div className="text">
                                    <p className="codeText">Rgba</p>
                                </div>
                                <p className="codeValue" id="rgbaCSSValue" >{colorValue.rgbaCSS}</p>
                            </div>
                        </div>
                        <div className="btnDiv">
                            <button className="copyBtn" id="copyBtn" onClick={handleCopyCss} >Copy CSS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
