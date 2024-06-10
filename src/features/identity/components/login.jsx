import logo from '@/assets/images/logo.svg';
const Login = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center mt-4 ">
                <img className="h-24" src={logo} />
                <h1 className="h2">پلتفرم آموزش آنلاین</h1>
                <p className="lead">
                    جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
                </p>
                <p className="lead">
                    قبلا ثبت نام نکرده اید؟
                    <a href="/register" className="me-2">
                        ثبت نام کنید{' '}
                    </a>
                </p>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="m-sm-4">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">موبایل</label>
                                <input className="form-control form-control-lg" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">رمز عبور</label>
                                <input
                                    className="form-control form-control-lg mb-2"
                                    type="password"
                                />
                            </div>
                            <div className="text-center mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary"
                                >
                                    وارد شوید
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
