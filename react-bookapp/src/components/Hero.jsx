import React from "react"
class Hero extends React.Component {
    render() {
        return(
        <>
            <div style={{backgroundImage: `url('../../public/assets/img/page-title-bg-1.png')`}} className="container-fluid text-white">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-3 py-5">
                        <h1 className='my-3'>Service Details</h1>
                        <span className='my-3'>Home/Service Details</span>
                    </div>
                </div>
            </div>
        </>
    )
    }
}

export default Hero;