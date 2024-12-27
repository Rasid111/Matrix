import React from "react"

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="my-5 container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <select onChange={() => {}} className="form-select" aria-label="Default select example">
                                <option selected>Category</option>
                                {this.props.categories.map((category, index) => <option key={index} value="category">{category[0].toUpperCase() + category.slice(1)}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Toolbar;