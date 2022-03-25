import { myLinks } from "../../data";

const Footer = () => {
  const { github } = myLinks;

  return (
    <footer className="footer">
      <p>
        Made with 🤍 by{" "}
        <a href={github} rel="noopener noreferrer" target="_blank">
          rpturbina
        </a>{" "}
        ©2022
      </p>
    </footer>
  );
};

export default Footer;
