import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import User from '../../../Assets/defaultuser.svg';
import './Userdetails.css'

function Userdetails() {
    const [setFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');
    const dropRef = useRef();

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        dropRef.current.style.border = '0px';
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center my-0 my-md-5">
                <div className="col-sm-12 col-md-10 col-lg-8 shadow card border-0">
                    <form className="form-group py-4">
                        <div className="row align-items-center gy-4">
                            <div className="col-12 text-center"><h3>User details</h3></div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="text-center">
                                    <div className="mb-4">
                                        {previewSrc ? (<img className="preview-image rounded-circle shadow" src={previewSrc} alt="Preview" height="180" width="180" />) : (<img src={User} alt="" className="rounded-circle shadow" height="180" width="180" />)}
                                    </div>

                                    <div>
                                        <Dropzone onDrop={onDrop}>
                                            {({ getRootProps, getInputProps }) => (
                                                <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                                    <input {...getInputProps()} />
                                                    <button className="btn upload-btn-wrapper overflow-hidden d-inline text-center primary-btn py-2 px-1 shadow">Upload pic</button>
                                                </div>
                                            )}
                                        </Dropzone>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-5 mt-3 mt-md-0">
                                <input type="text" placeholder="Name" className="form-control shadow-sm rounded-lg" readOnly />
                                <div className="my-3">
                                    <input type="email" placeholder="Email Id" className="form-control shadow-sm rounded-lg" readOnly />
                                </div>
                            </div>

                            <div className="col-5 col-md-2">
                                <div className="color-ch">Personal details</div>
                            </div>
                            <div className="col-7 col-md-10">
                                <hr></hr>
                            </div>
                            <div className="col-12 col-md-5">
                                <input type="text" placeholder="Contact no" className="form-control shadow-sm rounded-lg" name="contact"/>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="d-flex align-items-center justify-content-between px-2">
                                    <div className="font-weight-bold mr-1">I'm</div>
                                    <select className="form-select border border-left-0 border-top-0 border-right-0 rounded-0" name="role">
                                        <option value="Student">Student</option>
                                        <option value="Employee">Employee</option>
                                        <option value="Freelancer">Freelance</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-5 col-md-2">
                                <div className="color-ch">Address details</div>
                            </div>
                            <div className="col-7 col-md-10">
                            <hr></hr>
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="Country" className="form-control shadow-sm rounded-lg" name="country" />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="State" className="form-control shadow-sm rounded-lg" name="ustate"/>
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="City" className="form-control shadow-sm rounded-lg" name="city"/>
                            </div>
                            <div className="col-12 text-center">
                                <Link to="/user-dashboard" type="submit" className="btn primary-btn mt-2 mt-md-3 shadow rounded-lg px-5">Submit</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Userdetails;