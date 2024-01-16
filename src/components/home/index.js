import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import "./style.css";
import roadlight from "../../assets/roadlight.png";

const Home = () => {
  const history = useNavigate();
  return (
    <section className="dashboard">
      <div className="dashboard_text">
        <h1>What is Lorem Ipsum Text!</h1>
        <p>
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit.
        </p>
        <div className="home_button float-start">
          <button
            onClick={() => history("/form")}
            style={{ background: "rgb(6, 169, 169)", color: "#fff" }}
            type="button"
            className="btn mt-5"
          >
            Let's Create Form <ArrowForwardIcon className="button_icon" />
          </button>
        </div>
      </div>
      <div className="dashboard_image">
        <img src={roadlight} alt="dashboard_image" />
      </div>
    </section>
  );
};

export default Home;
