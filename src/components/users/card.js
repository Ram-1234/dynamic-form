import React from "react";
import "./style.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import user from "../../assets/user.png";

const UserCard = (props) => {
  const {
    // img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2cDTwZHbsTigF0ykhEdv2iXfTGKMpvfmYQ&usqp=CAU",
    username = "User Name",
    email = "ramnayan699@gmail.com",
    phone = "8978373723",
    url = "http://hildegard.org",
  } = props;

  return (
    <div className="card_container">
      <div className="image_box">
        <img src={user} alt="user" title={username} />
      </div>
      <div className="user_info_box">
        <h3 className="user_name">{username}</h3>
        <p className="email_box">
          <EmailOutlinedIcon style={styles.icon} className="email_icon" />
          <span>{email}</span>
        </p>
        <p className="mobile_box">
          <PhoneEnabledOutlinedIcon
            style={styles.icon}
            className="phone_icon"
          />
          <span>{phone}</span>
        </p>
        <p className="websit_box">
          <LanguageOutlinedIcon style={styles.icon} className="world_icon" />
          <span>{url}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;

const styles = {
  icon: {
    width: "20px",
    height: "20px",
  },
};
