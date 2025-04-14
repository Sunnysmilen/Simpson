import { SetStateAction, useState } from "react";

function MyTitleForm() {
  const [title, setTitle] = useState("Awesome Title");

  const handlechange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    const includeValue = event.target.value;
    const notValue = includeValue.replace("*", "");
    if (notValue !== title) {
      setTitle(event.target.value);
    }
  };

  return (
    <header>
      <h1>{title}</h1>
      <label htmlFor="title">Title :</label>
      <input id="title" type="text" onChange={handlechange} />
    </header>
  );
}

export default MyTitleForm;
