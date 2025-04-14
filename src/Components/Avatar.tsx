import { useState } from "react";

type avatarCard = {
  image: string;
  firstName: string;
  lastName: string;
  donut: number;
};

function Avatar(props: avatarCard) {
  const [count, setCount] = useState(props.donut);
  return (
    <section>
      <h1>
        <img src={props.image} /> <br />
        {props.firstName}
        {props.lastName}
        <button onClick={() => setCount(count + 1)}>🍩{count}</button>
      </h1>
    </section>
  );
}

export default Avatar;
