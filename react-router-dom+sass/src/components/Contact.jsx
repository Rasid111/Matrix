function Contact() {
    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-9">
                    <h3 className="m-0 mt-5"><u>Leave Reply</u></h3>
                </div>
                <div className="col-3">
                    <h3 className="m-0 mt-5"><u>Contact Info</u></h3>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-9">
                    <form className="container-fluid mt-5">
                        <div className="row g-3">
                            <div className="col-6">
                                <label className="form-label" htmlFor="name">Name:</label>
                            </div>
                            <div className="col-6">
                                <label className="form-label" htmlFor="email">Email:</label>
                            </div>
                        </div>
                        <div className="row g-3 mt-1">
                            <div className="col-6">
                                <input className="w-100 form-input" id="name" type="text" />
                            </div>
                            <div className="col-6">
                                <input className="w-100 form-input" id="email" type="email" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <label className="form-label" htmlFor="message">Write a message:</label>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-12">
                                <input className="w-100 form-input-message" id="message" type="text" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-2">
                                <button className="btn-submit">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="row g-1">
                            <div className="col-1">
                                <img className="object-fit-contain w-100" src="pin.png" alt="adress" />
                            </div>
                            <div className="col-11">
                                <p>Dambo dika,USA,road123</p>
                            </div>
                        </div>
                        <div className="row g-1">
                            <div className="col-1">
                                <img className="object-fit-contain w-100" src="email.png" alt="adress" />
                            </div>
                            <div className="col-11">
                                <p>dotsee@one.com</p>
                            </div>
                        </div>
                        <div className="row g-1">
                            <div className="col-1">
                                <img className="object-fit-contain w-100" src="phone-call.png" alt="adress" />
                            </div>
                            <div className="col-11">
                                <p>+88 018 522-369 36</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;