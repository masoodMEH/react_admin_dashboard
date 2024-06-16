import React from 'react';
import { Link } from 'react-router-dom';
import { httpInterceptedService } from '../core/http-service';
import CourseList from '../features/courses/components/course-list';

const Courses = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="mb-5 d-flex align-items-center justify-content-betwee">
                    <Link to="" className="btn btn-primary fw-bolder mt-n1">
                        افزودن دوره جدید
                    </Link>
                </div>
                <CourseList />
            </div>
        </div>
    );
};

export async function coursesLoader() {
    const response = await httpInterceptedService.get('Course/list');
    console.log(response.data);
    return response.data;
}

export default Courses;
