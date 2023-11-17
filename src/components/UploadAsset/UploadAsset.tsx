import React from "react";
import Logout from "../auth/Logout";


function UploadAsset(){

    const languagesAvailable = ['Igbo', 'Yoruba', 'Hausa'];

    return (
        <><Logout /><form>
            <div className="form-group row p-4">
                <div className="form-group col-md-6">
                    <label htmlFor="fileTitle" className="">File Title</label>
                    <br />
                    <input type="text" className="form-control" id="fileTitle" placeholder="Write file title here" />
                </div>

                <div className="form-group col-md-6 p-4">
                    <label htmlFor="fileType">File Type</label>
                    <select id="fileType" className="form-control">
                        <option>Audio</option>
                        <option>Graphics</option>
                        <option>Instruction</option>
                        
                    </select>
                </div>
            </div>


            <div className="form-group col">
                <div className="form-group col-md-6 p-4">
                    <label htmlFor="fileType">Language</label>
                    <select id="fileType" className="form-control">
                        {languagesAvailable.map((language, i) => (
                            <option key={i}>{language}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group col-md-6 p-4">
                    <label htmlFor="fileType">Level</label>
                    <select id="fileType" className="form-control">
                        <option>A1</option>
                        <option>A2</option>
                        <option>B1</option>
                        <option>B2</option>
                        <option>C1</option>
                        <option>C2</option>
                    </select>
                </div>
            </div>


            <div className="form-row p-4">
                <div className="form-group col-md-6">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" rows={5}
                        id="description"></textarea>
                </div>
            </div>

            <div className="form-row ">
                <div className="form-group col-md-6 p-4">
                    <label htmlFor="description">Upload</label>
                    <input type="file" className="form-control" id="fileTitle" placeholder="File Title" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary position-absolute start-50 translate-middle m-4">Save</button>
        </form></>
    )

}

export default UploadAsset