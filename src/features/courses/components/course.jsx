// کامپوننت مربوط به دریافت آیتم های هر کورس
const Course = ({
    title,
    coverImageUrl,
    courseLevel,
    description,
    duration,
    numOfReviews,
}) => {
    return (
        <div className="card">
            <img src={coverImageUrl} alt="" className="card-img-top" />
            <div className="px-4 pt-4 pb-0 card-header">
                <div className="my-2 badge bg-primary fw-bolder">
                    {courseLevel}
                </div>
                <h4 className="mb-0">{title}</h4>
            </div>
            <div className="px-4 pt-2 card-body">
                <p className="text-truncate-3">{description}</p>
            </div>
            <div className="card-footer fs-sm d-flex align-items-center fw-bolder text-secondary justify-content-between">
                <div className="gap-1 d-flex align-items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="align-middle feather feather-clock me-2"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {`${duration} ساعت`}
                </div>
                <div className="gap-1 d-flex align-items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="align-middle feather feather-message-circle me-2"
                    >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    {`${numOfReviews} نظر`}
                </div>
            </div>
        </div>
    );
};

export default Course;
