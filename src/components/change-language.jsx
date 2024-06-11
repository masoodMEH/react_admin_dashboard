import faFlag from '@/assets/images/iran.png';
import usFlag from '@/assets/images/united-states.png';
import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../contexts/app/app-context';

const ChangeLanguage = () => {
    const [show, setShow] = useState(false);
    const ref = useRef();

    const { language, changeLanguage } = useAppContext();

    useEffect(() => {
        const checkIfClickOutside = (e) => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', checkIfClickOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickOutside);
        };
    }, [show]);

    return (
        <div className="dropdown">
            <a
                className="nav-flag dropdown-toggle"
                onClick={() => setShow(true)}
            >
                <img src={language === 'fa' ? faFlag : usFlag} alt="English" />
            </a>
            <div
                ref={ref}
                className={`dropdown-menu dropdown-menu-end 
                    ${show ? 'show' : undefined}`}
            >
                <a
                    className="gap-2 dropdown-item fw-bolder d-flex align-items-center"
                    style={{ textAlign: language === 'fa' ? 'right' : 'left' }}
                    onClick={() => changeLanguage('fa')}
                >
                    <img
                        src={faFlag}
                        width="20"
                        alt="Persian"
                        className="ms-2"
                    />
                    <span className="align-middle ">فارسی</span>
                </a>
                <a
                    className="gap-2 dropdown-item fw-bolder d-flex align-items-center"
                    style={{ textAlign: language === 'en' ? 'left' : 'right' }}
                    onClick={() => changeLanguage('en')}
                >
                    <img
                        src={usFlag}
                        width="20"
                        alt="English"
                        className="ms-2"
                    />
                    <span className="align-middle ">English</span>
                </a>
            </div>
        </div>
    );
};

export default ChangeLanguage;
