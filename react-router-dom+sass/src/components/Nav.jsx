import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Nav({className}) {
    const [page, setPage] = useState("home")
    useEffect(() => {
        setPage(window.location.href.split("/")[3]);
    }, [])
    return (
        <div className={"container nav " + className}>
            <div className="row justify-content-between align-items-center h-100">
                <div className="col-1">
                    <Link onClick={() => setPage("")} to="/">
                        <img src="https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="col-10">
                    <div className="container-fluid">
                        <div style={{justifyContent: "center"}} className="row g-3 justify-content-center">
                            <div className={"col btn-link" + (page === "" ? " active" : "")}>
                                <Link onClick={() => setPage("")} to="/">Home</Link>
                            </div>
                            <div className={"col btn-link" + (page === "about" ? " active" : "")}>
                                <Link onClick={() => setPage("about")} to="/about">About Us</Link>
                            </div>
                            <div className={"col btn-link" + (page === "contact" ? " active" : "")}>
                                <Link onClick={() => setPage("contact")} to="/contact">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="container-fluid">
                        <div className="row justify-content-evenly">
                            <div className="btn-link"><a href="#">#</a></div>
                            <div className="btn-link"><a href="#">q</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Nav
  