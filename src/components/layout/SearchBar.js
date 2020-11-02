import React from 'react'

// search bar at the top of application for the user to search logs in the application
const SearchBar = () => {
    return (
        <nav style={{ marginBottom: "30px" }} className="green">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" />
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar;
