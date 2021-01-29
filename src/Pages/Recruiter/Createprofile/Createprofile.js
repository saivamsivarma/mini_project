import React, { useState, useRef } from 'react'
import './Createprofile.css';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import User from '../../../Assets/defaultuser.svg';

function Createprofile() {
    const [file, setFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');

    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const dropRef = useRef();

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = '2px dashed #5D6FFF';
    };

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
            dropRef.current.style.border = '2px solid #5D6FFF';
        } else if (dragState === 'leave') {
            dropRef.current.style.border = '2px dashed #5D6FFF';
        }
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center my-0 my-md-5">
                <div className="col-sm-12 col-md-10 col-lg-8 shadow card border-0">
                    <form className="form-group py-4">
                        <div className="row align-items-center gy-4 p-3">
                            <div className="col-12 text-center"><h3>Personal details</h3></div>
                            <div className="col-12 col-md-4">
                                <div className="text-center">
                                    <div className="mb-4">
                                        <img src={User} alt="" className="rounded-circle shadow" height="160" width="160" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 mt-3 mt-md-0">
                                <input type="text" placeholder="Name" className="form-control shadow-sm rounded-lg"/>
                                <div className="my-3">
                                    <input type="email" placeholder="Email Id" className="form-control shadow-sm rounded-lg"/>
                                </div>
                                <div className="my-3">
                                    <div className="d-flex justify-content-between">
                                    <input type="text" placeholder="Country Code" className="form-control shadow-sm rounded-lg w-50 mr-4"/>
                                    <input type="text" placeholder="Your 10 Digit Mobile Number" className="form-control shadow-sm rounded-lg"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 text-center"><h3>Organization details</h3></div>

                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="Organization Name" className="form-control shadow-sm rounded-lg" />
                            </div>

                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="Country" className="form-control shadow-sm rounded-lg"/>
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="State" className="form-control shadow-sm rounded-lg"/>
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="City" className="form-control shadow-sm rounded-lg"/>
                            </div>
                            <div className="col-12">
                                <textarea class="form-control" placeholder="Organization description"></textarea>
                            </div>
                            <div className="col-12 col-md-6 mt-5">
                                <h5>Organization Logo</h5>
                                <div className="upload-section text-center p-3">
                                    <Dropzone
                                        onDrop={onDrop}
                                        onDragEnter={() => updateBorder('over')}
                                        onDragLeave={() => updateBorder('leave')}
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                                <input {...getInputProps()} />
                                                <p className="click-enable">Drag and drop a your Organization Logo OR <div className="btn primary-btn px-3">click</div> here to select a your Organization Logo</p>
                                                {file && (
                                                    <div>
                                                        <strong>Selected file:</strong> {file.name}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </Dropzone>
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                            {previewSrc ? (
                                        isPreviewAvailable ? (
                                            <div className="image-preview">
                                                <img className="preview-image" src={previewSrc} alt="Preview" />
                                            </div>
                                        ) : (
                                                <div className="preview-message">
                                                    <p>No preview available for this file</p>
                                                </div>
                                            )
                                    ) : (
                                            <div className="preview-message">
                                                <p>Image preview will be shown here after selection</p>
                                            </div>
                                        )}
                            </div>

                            <div className="col-12 text-center">
                                <Link to="/recruiter-dashboard" type="submit" className="btn primary-btn mt-2 mt-md-3 shadow rounded-lg px-5">Submit</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Createprofile;