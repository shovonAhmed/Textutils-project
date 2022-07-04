import React from 'react'

const Nav = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg' bg-${props.mode} text-${props.mode==='dark' ? 'light' : 'dark'}`}>
                <div className="container-fluid">
                        
                        <ul className="navbar-nav flex-row">
                            <li>
                            <a className="navbar-brand font-weight-bold" href="#">Textutils</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Home</a>
                            </li>
                            <li className="nav-item ml-3">
                                <a className="nav-link" href="https://www.facebook.com/shovon.ahmed.17">About</a>
                            </li>
                        </ul>
                        <div className="custom-control custom-switch ">
                            <input type="checkbox" onClick={props.toggleStyle} class="custom-control-input" id="customSwitch1" />
                                <label class="custom-control-label font-weight-bold" htmlFor="customSwitch1">{props.darkText}</label>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Nav