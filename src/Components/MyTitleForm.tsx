import { SetStateAction, useState } from "react";

function MyTitleForm() {
  const [title, setTitle] = useState("Awesome Title");

  const handlechange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    if (event.target.value) {
      setTitle(event.target.value);
    }
  };

  return (
    <header>
      <h1>{title}</h1>
      <label htmlFor="title">Title :</label>
      <input id="title" type="text" onChange={title ? handlechange : title} />
    </header>
  );
}

export default MyTitleForm;
