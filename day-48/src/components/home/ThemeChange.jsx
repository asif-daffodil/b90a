import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


const ThemeChange = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        // change context value accordingly
        setTheme(newTheme);
    }

    return (
        <div>
            <button onClick={toggleTheme} className="btn btn-primary btn-sm">Change Theme</button>
        </div>
    );
};

export default ThemeChange;