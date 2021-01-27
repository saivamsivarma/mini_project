import React from 'react';
import './Search.css'

function Search() {
    return (
            <div className="row align-items-center my-4 gy-2 gy-0">
                <div className="col-12">
                    <form className="form-group rounded-pill custom-form  px-2">
                        <div className="d-flex search-holder p-2 shadow rounded">
                            <input type="text" className="form-control p-2 d-none d-md-block border-0" placeholder="Role" />
                            <input type="text" className="form-control p-2  d-none d-md-block search-input" placeholder="Job Type" />
                            <input type="text" className="form-control p-2  d-none d-md-block search-input" placeholder="Location" />
                            <input type="text" className="form-control p-2 d-block d-md-none search-input" placeholder="Role,Job Type, Location" />
                            <button className="btn primary-btn border-0 px-3 search-btn">Search</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Search;