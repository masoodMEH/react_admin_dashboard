import Login, { loginAction } from '@/features/identity/components/login';
import { createBrowserRouter } from 'react-router-dom';

import Register, {
    registerAction,
} from './features/identity/components/register';
import IdentityLayout from './layouts/identity-layout';
import MainLayout from './layouts/mainLayout/main-layout';
import CourseCategories from './pages/course-categories';
import Courses, { coursesLoader } from './pages/courses';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                element: <Courses />,
                index: true,
                loader: coursesLoader,
            },
            { path: 'course-categories', element: <CourseCategories /> },
        ],
    },
    {
        element: <IdentityLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
                action: loginAction,
                errorElement: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
                action: registerAction,
                errorElement: <Register />,
            },
        ],
    },
]);

export default router;
