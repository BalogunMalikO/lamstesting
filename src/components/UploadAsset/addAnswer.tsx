import React, { useState } from "react";

type Todo = {
  options: string;
};

function Add_answer() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [options, setOption] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // check if the value is empty
    if (options.trim().length === 0) {
      alert("Please enter a value!");
      return;
    }

    // create a new option
    const todo: Todo = {
      options: options,
    };

    // add todo to the state
    setTodos([todo, ...todos]);

    // clear the value of option
    setOption("");
  };

  const handleChangeChecked = (todo: Todo) => {
    // update the state
    setTodos([...todos]);
  };

  return (
    <div>
      <div >
        <div className="form-group col">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="fileType">Answer</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="fileTitle"
              placeholder="Write question here"
              name="option"
              value={options}
              onChange={handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      
      <div className="form-group row">
        <label htmlFor="fileType">Options</label>
        <select id="fileType" className="form-control">
          
          <option>
            {
              <div className="content">
                <span>
                  {todos.map((todo) => (
                    <span key={""}>
                      {todo.options}
                      <br />
                      <span onChange={() => handleChangeChecked(todo)} />
                    </span>
                  ))}
                </span>
              </div>
            }
          </option>
        </select>
        <div />
      </div>
    </div>
    </div>
  );
}

export default Add_answer;
