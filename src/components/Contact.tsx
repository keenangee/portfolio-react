import { SocialIcon } from "react-social-icons";
import { CSSProperties } from "react";
import Footer from "./Footer";

const styles: CSSProperties = {
  height: "6rem",
  width: "6rem",
};

const Contact: React.FC = () => {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex justify-center items-center"
      >
        <div className="flex flex-col gap-6 md:flex-row justify-between bg-white rounded-full">
          <SocialIcon
            url="https://www.linkedin.com/in/keenangee/"
            style={styles}
            rel="noreferrer"
            target="_blank"
          />
          <SocialIcon
            url="https://github.com/keenangee/"
            style={styles}
            rel="noreferrer"
            target="_blank"
          />
          <SocialIcon
            url="https://twitter.com/KeenanGee"
            style={styles}
            rel="noreferrer"
            target="_blank"
          />
          <SocialIcon
            url="mailto:keenangee1997@gmail.com"
            style={styles}
            rel="noreferrer"
            target="_blank"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
