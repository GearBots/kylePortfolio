import React, {useState, useEffect} from "react";

const useTypewriter = (text, speed=50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const typeWrite = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text[i]);
                i++;
            } else {
                clearInterval(typeWrite);
            }
        }, speed);
        return () => {
            clearInterval(typeWrite);
        };
    }, [text, speed]);
    return displayText;
    };
    const TypeWriter = ({text, speed}) => {
        const displayText = useTypewriter(text, speed);
        return <span>{displayText}</span>
    }
export default TypeWriter