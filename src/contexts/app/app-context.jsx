import { createContext, useContext, useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';

import appReducer from './app-reducer';

const AppContext = createContext();
const iniialState = {
    language: localStorage.getItem('language') || 'fa',
};

const AppProvider = ({ children }) => {
    const [state, dispath] = useReducer(appReducer, iniialState);

    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        dispath({ type: 'CHANGE_LANGAUGE', payload: language });
    };

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
        document.body.dataset.direction =
            state.language === 'fa' ? 'rtl' : 'ltr';
    }, [state.language]);

    return (
        <AppContext.Provider value={{ ...state, changeLanguage }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };
