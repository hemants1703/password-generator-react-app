import { useState, useCallback, useEffect, useRef } from "react";

import "../styles/generator.css";

// import Modal from "./Modal";

const Generator = () => {

    const [uppercaseLetters, setUppercaseLetters] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const [password, setPassword] = useState("");
    const [range, setRange] = useState(8);

    const copy = useRef(null);

    const generatePassword = useCallback(() => {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let pass = "";

        if (uppercaseLetters) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (numbers) chars += "0123456789";

        if (symbols) chars += "!@#$%^&*()_+";

        for (let i = 0; i < range; i++)
            pass += chars.charAt(Math.floor(Math.random() * chars.length) + 1);
            // password += (i % 7 == 0) ? "-" : keys[Math.floor(Math.random() * keys.length / 2 + Math.random() * keys.length / 2)];

        setPassword(pass);

    }, [uppercaseLetters, numbers, symbols, range]);

    useEffect(() => {
        generatePassword();
    }, [setNumbers, setRange, setSymbols, setUppercaseLetters, generatePassword]);

    return (
        <section>
            <div className="container">
                <div className="input-box">
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="password"
                        // title="Click to copy to clipboard"
                        // onClick={showModal}
                        disabled={true}
                        spellCheck="false"
                        // onClick={handleCopy}
                        contentEditable={false}
                        value={password}
                        ref={copy}
                    />
                </div>
                <div className="options">
                    <div>Includes</div>
                    <ul>
                        <li><label htmlFor="uppercaseLetters">
                            <input
                                type="checkbox"
                                name="uppercase-letters"
                                id="uppercaseLetters"
                                defaultChecked={uppercaseLetters}
                                onChange={e => setUppercaseLetters(prev => !prev)}
                            /> uppercase letters</label></li>
                        <li><label htmlFor="numbers">
                            <input
                                type="checkbox"
                                name="numbers" id="numbers"
                                defaultChecked={numbers}
                                onChange={e => setNumbers(prev => !prev)}
                            /> numbers</label></li>
                        <li><label htmlFor="symbols">
                            <input
                                type="checkbox"
                                name="symbols"
                                id="symbols"
                                defaultChecked={symbols}
                                onChange={e => setSymbols(prev => !prev)}
                            /> symbols</label></li>
                    </ul>
                    <div className="range">
                        <div>
                            <label htmlFor="passwordLength">Password Length</label>
                            <span>{range}</span>
                        </div>
                        <input
                            type="range"
                            name="rangeSelector"
                            id="passwordLength"
                            min={8}
                            max={16}
                            // step={3}
                            value={range}
                            onChange={e => setRange(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={generatePassword}
                >
                    GENERATE
                </button>
            </div>
        </section>
    )
}

export default Generator