import { useForm } from 'react-hook-form';
import {
    Link,
    useActionData,
    useNavigate,
    useNavigation,
    useRouteError,
    useSubmit,
} from 'react-router-dom';

import logo from '@/assets/images/logo.svg';
import { httpService } from '@/core/http-service';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { t } = useTranslation();

    const submitForm = useSubmit();

    const onSubmit = (data) => {
        const { confirmPassword, ...userData } = data;
        submitForm(userData, { method: 'post' });
    };

    const isSuccessOperation = useActionData();
    const navigate = useNavigate();

    const routeErrors = useRouteError();

    useEffect(() => {
        if (isSuccessOperation) {
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [isSuccessOperation]);

    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-4 text-center">
                <img src={logo} style={{ height: '100px' }} />
                <h1 className="h2">{t('register.title')}</h1>
                <p className="lead">{t('register.introMessage')}</p>
                <p className="lead">
                    {t('register.alreadyRegistered')}
                    <Link to="/login" className="me-2">
                        {t('register.signin')}{' '}
                    </Link>
                </p>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="m-sm-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">
                                    {t('register.mobile')}
                                </label>
                                <input
                                    {...register('mobile', {
                                        required: `${t(
                                            'register.alreadyRegistered'
                                        )}`,
                                        minLength: 11,
                                        maxLength: 11,
                                    })}
                                    className={`form-control form-control-lg ${
                                        errors.mobile && 'is-invalid'
                                    }`}
                                />
                                {errors.mobile &&
                                    errors.mobile.type === 'required' && (
                                        <p className="mt-1 text-danger small fw-bolder">
                                            {errors.mobile?.message}
                                        </p>
                                    )}
                                {errors.mobile &&
                                    (errors.mobile.type === 'minLength' ||
                                        errors.mobile.type === 'maxLength') && (
                                        <p className="mt-1 text-danger small fw-bolder">
                                            {t(
                                                'register.validation.mobileLength'
                                            )}{' '}
                                        </p>
                                    )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    {t('register.password')}
                                </label>
                                <input
                                    {...register('password', {
                                        required: `${t(
                                            'register.validation.PasswordRequired'
                                        )}`,
                                    })}
                                    className={`form-control form-control-lg ${
                                        errors.password && 'is-invalid'
                                    }`}
                                    type="password"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-danger small fw-bolder">
                                        {errors.password?.message}
                                    </p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    {t('register.repeatPassword')}
                                </label>
                                <input
                                    {...register('confirmPassword', {
                                        required: `${t(
                                            'register.validation.RepeatPasswordRequired'
                                        )}`,
                                        validate: (value) => {
                                            if (watch('password') !== value) {
                                                return `${t(
                                                    'register.validation.NotMatching'
                                                )}`;
                                            }
                                        },
                                    })}
                                    className={`form-control form-control-lg ${
                                        errors.confirmPassword && 'is-invalid'
                                    }`}
                                    type="password"
                                />
                                {errors.confirmPassword &&
                                    errors.confirmPassword.type ===
                                        'required' && (
                                        <p className="mt-1 text-danger small fw-bolder">
                                            {errors.confirmPassword?.message}
                                        </p>
                                    )}
                                {errors.confirmPassword &&
                                    errors.confirmPassword.type ===
                                        'validate' && (
                                        <p className="mt-1 text-danger small fw-bolder">
                                            {errors.confirmPassword?.message}
                                        </p>
                                    )}
                            </div>
                            <div className="mt-3 text-center">
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {/* {isSubmitting
                                        ? 'در جال انجام عملیات ...'
                                        : 'ثبت نام'} */}
                                    {t('register.register')}
                                </button>
                            </div>
                        </form>
                    </div>
                    {isSuccessOperation && (
                        <div className="alert alert-success">
                            {t('register.successOperation')}
                        </div>
                    )}
                    {routeErrors && (
                        <div className="p-2 mt-3 alert alert-danger text-danger">
                            {routeErrors.response?.data.map((error) => (
                                <p className="mb-0">{error.description}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Register;

export async function registerAction({ request }) {
    const formData = await request.formData();
    //  fromentries => convert from KeyValue to Object
    const data = Object.fromEntries(formData);
    const response = await httpService.post('/Users', data);
    return response.status === 200;
}
