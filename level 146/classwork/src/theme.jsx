import { useEffect, useState } from "react";

const useTheme = () => {
    const [isDark,setIsDark] = useState(() => {
        const stored = localStorage.getItem('isDark')
        return stored ?JSON.parse(stored) : false
        
    });

    useEffect(() => {
        localStorage.setItem('isDark',JSON.stringify(isDark))
    },[isDark]);

    const ChangeColor = () => {
        setIsDark(prev => !prev)
    };

    return {isDark,ChangeColor}
};

export default useTheme