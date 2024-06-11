import { Outlet } from 'react-router-dom';
import ChangeLanguage from '../components/change-language';

const IdentityLayout = () => {
    return (
        <>
            <div className="main d-flex justify-content-center w-100 ">
                <nav className="shadow-sm navbar">
                    <ChangeLanguage />
                </nav>
                <main className="p-0 content d-flex ">
                    <div className="container d-flex flex-column ">
                        <div className="row h-100 ">
                            <div className="mx-auto col-sm-10 col-md-8 col-lg-6 d-table h-100 ">
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
