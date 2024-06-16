// صفحه کورس ها
import React, { Suspense } from 'react';
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { httpInterceptedService } from '../core/http-service';
import CourseList from '../features/courses/components/course-list';

const Courses = () => {
    const data = useLoaderData();

    return (
        <div className="row">
            <div className="col-12">
                <div className="mb-5 d-flex align-items-center justify-content-betwee">
                    <Link to="" className="btn btn-primary fw-bolder mt-n1">
                        افزودن دوره جدید
                    </Link>
                </div>
                <Suspense
                    fallback={
                        <p className="text-info">در حال دریافت اطلاعات ...</p>
                    }
                >
                    <Await resolve={data.courses}>
                        {(loadedCourses) => (
                            <CourseList courses={loadedCourses} />
                        )}
                    </Await>
                </Suspense>
            </div>
        </div>
    );
};

export async function coursesLoader() {
    const loadedCourses = async () => {
        const response = await httpInterceptedService.get('Course/list');
        return response.data;
    };
    return defer({
        courses: loadedCourses(),
    });
}

export default Courses;
