import { httpInterceptedService } from '@/core/http-service';
import { useLoaderData } from 'react-router-dom';
const CourseDetails = () => {
    const data = useLoaderData();
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="pt-0 card-body">
                            <img
                                className="mx-auto my-4 rounded d-block"
                                style={{ width: '30%' }}
                                src={data.coverImageUrl}
                            />

                            <div class="d-flex flex-column justify-content-center pe-4 text-center">
                                <div class="badge bg-info my-2 align-self-center">
                                    {data.courseCategory}
                                </div>
                                <h4>{data.title}</h4>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-xl-2 d-flex">
                    <div className="text-center card flex-fill">
                        <div className="card-header">
                            <h5 className="mt-2 mb-0 card-title">زمان آموزش</h5>
                        </div>
                        <div className="pt-0 my-0 card-body">
                            <h4 className="text-info fw-bolder">
                                {data.duration + ' ساعت'}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-xl-2 d-flex">
                    <div className="text-center card flex-fill">
                        <div className="card-header">
                            <h5 className="mt-2 mb-0 card-title">سطح دوره</h5>
                        </div>
                        <div className="pt-0 my-0 card-body">
                            <h4 className="text-info fw-bolder">
                                {data.courseLevel}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-xl-2 d-flex">
                    <div className="text-center card flex-fill">
                        <div className="card-header">
                            <h5 className="mt-2 mb-0 card-title">
                                تعداد فصل ها
                            </h5>
                        </div>
                        <div className="pt-0 my-0 card-body">
                            <h4 className="text-info fw-bolder">
                                {data.numOfChapters + ' فصل'}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-xl-2 d-flex">
                    <div className="text-center card flex-fill">
                        <div className="card-header">
                            <h5 className="mt-2 mb-0 card-title">
                                تعداد مباحث
                            </h5>
                        </div>
                        <div className="pt-0 my-0 card-body">
                            <h4 className="text-info fw-bolder">
                                {data.numOfLectures + ' مبحث'}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-xl-2 d-flex">
                    <div className="text-center card flex-fill">
                        <div className="card-header">
                            <h5 className="mt-2 mb-0 card-title">
                                تعداد نظرات{' '}
                            </h5>
                        </div>
                        <div className="pt-0 my-0 card-body">
                            <h4 className="text-info fw-bolder">
                                {data.numOfReviews + ' نظر'}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-xl-2 d-flex">
                    <div className="text-center card flex-fill">
                        <div className="card-header">
                            <h5 className="mt-2 mb-0 card-title">
                                میانگین نظرات
                            </h5>
                        </div>
                        <div className="pt-0 my-0 card-body">
                            <h4 className="text-info fw-bolder">
                                {data.averageReviewRating + ' از 5'}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export async function courseDetailsLoader({ params }) {
    const response = await httpInterceptedService.get(
        `/Course/by-id/${params.id}`
    );
    return response.data;
}

export default CourseDetails;
