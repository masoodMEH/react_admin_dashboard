import ChangeLanguage from '@/components/change-language';
import ChangeTheme from '@/components/change-theme';
import { Outlet } from 'react-router-dom';

const IdentityLayout = () => {
    return (
        <>
            <div className="main d-flex justify-content-center w-100">
                <nav className="gap-3 shadow-sm navbar justify-content-start">
                    <ChangeTheme />
                    <ChangeLanguage />
                </nav>
                <main className="p-0 content d-flex">
                    <div className="container d-flex flex-column">
                        <div className="row h-100">
                            <div className="mx-auto col-sm-10 col-md-8 col-lg-6 d-table h-100">
                                <div className="align-middle d-table-cell">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default IdentityLayout;
