import "./App.css";
import Avatar from "./Components/Avatar";
import MyTitleForm from "./Components/MyTitleForm";

function App() {
  return (
    <>
      <main>
        <MyTitleForm />
      </main>
      <Avatar
        image={
          "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
        }
        firstName={"Bart"}
        lastName={"SIMPSON"}
        donut={1}
      />

      <Avatar
        image={
          "https://cdn.pixabay.com/photo/2013/07/13/01/10/homer-simpsons-155238_640.png"
        }
        firstName={"Homer"}
        lastName={"SIMPSON"}
        donut={100}
      />
    </>
  );
}

export default App;
