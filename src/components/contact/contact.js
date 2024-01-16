import React from "react";
import "./style.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <main className="container">
      {/* <h4>Contact us </h4> */}
      <h4>1914 translation by H. Rackham</h4>
      <p>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness of will, which is the same as saying
        through shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish. In a free hour, when our power of choice is
        untrammelled and when nothing prevents our being able to do what we like
        best, every pleasure is to be welcomed and every pain avoided. But in
        certain circumstances and owing to the claims of duty or the obligations
        of business it will frequently occur that pleasures have to be
        repudiated and annoyances accepted. The wise man therefore always holds
        in these matters to this principle of selection: he rejects pleasures to
        secure other greater pleasures, or else he endures pains to avoid worse
        pains.
      </p>
      <footer>
        <section className="buttons_box">
          <a href="https://www.linkedin.com/" target="_block">
            <LinkedInIcon title="linkedin" className="linkedin" />
          </a>
          <a href="https://github.com/" target="_block">
            <GitHubIcon className="github" />
          </a>
          <a href="https://www.instagram.com/" target="_block">
            <InstagramIcon className="insta" />
          </a>
          <a href="https://www.youtube.com/" target="_block">
            <YouTubeIcon className="youtube" />
          </a>
        </section>
        <p>&copy; IT Pvt & Ltd</p>
      </footer>
    </main>
  );
};

export default Contact;
