import React from "react";

export const TodoForm: React.FC = () => {
  return (
    <div className="input-field">
      <input type="text" id="title" />
      <label htmlFor="title" className="active">
        Введіть назву справи
      </label>
    </div>
  );
};
