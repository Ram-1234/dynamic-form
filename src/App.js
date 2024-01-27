import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
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
