import React, { ChangeEvent, useState } from "react";

interface iQuestion {
  QuestionOption: string;
}

function Add_answer() {
  const [option, setOption] = useState<string>("");
  const [todo, setTodo] = useState<iQuestion[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };

  const addOption = () => {
    const newOption = {
      QuestionOption: option,
    };

    setTodo([...todo, newOption]);
    setOption("");
  };
    


  return (
    <div>
        
      <div className="form-row p-4">
        <div className="form-group col-md-6 p-4">
          <label htmlFor="fileType">answer</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="fileTitle"
            placeholder="Write question here"
            name="option"
            value={option}
            onChange={handleChange}
          />
          <div>
            <button onClick={addOption}>add</button>
          </div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            rows={5}
            id="description"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Add_answer;
