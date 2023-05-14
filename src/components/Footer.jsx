import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="text-center">
      <p>Cameron Beneteau's Portfolio © {new Date().getFullYear()}</p>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
