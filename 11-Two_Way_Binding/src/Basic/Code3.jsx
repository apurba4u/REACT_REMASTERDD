import { useState } from "react";

const Code3 = () => {
  const [title, setTitle] = useState("");
  function submitHandler(elem) {
    elem.preventDefault();
    console.log("Form submitted by " + title);
    setTitle("");
  }
  return (
    <div>
      <form
        onSubmit={(elem) => {
          submitHandler(elem);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(elem) => {
            setTitle(elem.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Code3;
