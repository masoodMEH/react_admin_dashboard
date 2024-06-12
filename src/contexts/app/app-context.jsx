import { createContext, useContext, useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';

import appReducer from './app-reducer';

const AppContext = createContext();
const iniialState = {
    language: localStorage.getItem('language') || 'fa',
    theme: localStorage.getItem('theme') || 'light',
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, iniialState);

    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        dispath({ type: 'CHANGE_LANGAUGE', payload: language });
    };

    const changeTheme = (theme) => {
        dispatch({ type: 'CHANGE_THEME', payload: theme });
    };

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
        document.body.dataset.direction =
            state.language === 'fa' ? 'rtl' : 'ltr';
    }, [state.language]);

    useEffect(() => {
        localStorage.setItem('theme', state.theme);
    }, [state.theme]);

    return (
        <AppContext.Provider value={{ ...state, changeLanguage, changeTheme }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };
