function Review(review, id) {
    return(
        <div key={id} className="container p-2 my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 border rounded p-4">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-4">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-4">
                                                <img className="rounded-circle w-100" src={review.url} alt="" />
                                            </div>
                                            <div className="col-8">
                                                <h4>{review.name}</h4>
                                                <span>Verified User</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="container">
                                        <div className="row justify-content-end">
                                            <div className="col-8">
                                                <span>Los Angela's, USA</span>
                                                <br />
                                                <span>04 Days ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <h3>{review.title}</h3>
                                <span>{review.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;