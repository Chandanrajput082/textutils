import { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import ColorPicker from "./components/ColorPicker";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const [alerts, setAlerts] = useState(null);

  const showAlert = (message, types) => {
    setAlerts({
      msg: message,
      type: types,
    });
    setTimeout(() => {
      setAlerts(null);
    }, 1500);
  };
  let toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      showAlert("Dark mode Enable", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode Enable", "success");
    }
  };
  return (
    <>
      <Navbar
        title="testutils"
        about="About"
        mode={mode}
        toggelMode={toggelMode}
      />
      <Alerts alerts={alerts} />
      <div className="container my-3 ">
        <Form
          heading="Text Here to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <ColorPicker/> */}
   
    </>
  );
}

export default App;
