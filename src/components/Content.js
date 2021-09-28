import React, { useState } from "react";
import "./Content.css";

function Content() {
  const [todo, setTodo] = useState([]);
  const [input, setinput] = useState("");
  const [id, setId] = useState(0);

  const addTodo = () => {
    setTodo((todo) => [{ text: input, id: id }, ...todo]);
    setinput("");
    setId(id + 1);
  };
  const removeTodo = () => {
    const index = todo.indexOf(input);
    setTodo(todo.splice(index));
    console.log(index);
  };

  return (
    <div>
      <div className="input-div">
        <input
          type="text"
          value={input}
          onChange={(a) => setinput(a.target.value)}
          placeholder="New Todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="content-div">
        <ul>
          {todo.map(({ text, id }) => (
            <li key={id} className="list-item">
              <div>
                <div>{text}</div>
              </div>
              <button onClick={removeTodo}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
