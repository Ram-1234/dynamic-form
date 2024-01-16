import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
