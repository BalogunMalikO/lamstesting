import React from "react";


function UploadAsset(){

    const languagesAvailable = ['Igbo', 'Yoruba', 'Swahili'];

    return (
        <form>
            <div className="form-row row">
                <div className="form-group col-md-6">
                    <label htmlFor="fileTitle">File Title</label>
                    <input type="text" className="form-control" id="fileTitle" placeholder="File Title" />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="fileType">File Type</label>
                    <select id="fileType" className="form-control">
                        <option>Audio</option>
                        <option>Graphics</option>
                    </select>
                </div>
            </div>


            <div className="form-group row">
                <div className="form-group col-md-6">
                    <label htmlFor="fileType">Language</label>
                    <select id="fileType" className="form-control">
                        { languagesAvailable.map( (language, i) => (
                            <option key={i}>{language}</option>
                        ) ) }
                    </select>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="fileType">Level</label>
                    <select id="fileType" className="form-control">
                        <option>A1</option>
                        <option>A2</option>
                    </select>
                </div>
            </div>


            <div className="form-row row">
                <div className="form-group col-md-6">
                    <label htmlFor="description">Description</label>
                    <textarea id="description"></textarea>
                </div>
            </div>

            <div className="form-row row">
                <div className="form-group col-md-6">
                    <label htmlFor="description">Upload</label>
                    <input type="file" className="form-control" id="fileTitle" placeholder="File Title" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Upload</button>
        </form>
    )

}

export default UploadAsset