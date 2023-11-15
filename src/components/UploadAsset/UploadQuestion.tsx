import React from "react";
import Logout from "../auth/Logout";
import Add_answer from "./Add_answer";

function UploadQuestion() {
  return (
    <>
      <Logout />
      <div>
        <div className="form-group row p-4">
          <div className="form-group col-md-6 p-4">
            <label htmlFor="fileType">File Type</label>
            <select id="fileType" className="form-control">
              <option>Question and Answer</option>
            </select>
          </div>

          <div className="form-group col-md-6 p-4">
            <label htmlFor="fileType">Question</label>
            <br/>
            <input type="text" className="form-control" id="fileTitle" placeholder="Write question here" />
          </div>
        </div>

        <div>
          <Add_answer/>
        </div>

        <div className="form-group col-md-6 p-4">
          <label htmlFor="fileType">Language Tag</label>
          <select id="fileType" className="form-control">
            <option>Yoruba</option>
            <option>Igbo</option>
            <option>Hausa</option>
          </select>
        </div>

        <div className="form-group col-md-6 p-4">
          <label htmlFor="fileType">Language Proficiency</label>
          <select id="fileType" className="form-control">
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
            <option>B2</option>
            <option>C1</option>
            <option>C2</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary position-absolute start-50 translate-middle m-4"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default UploadQuestion;
