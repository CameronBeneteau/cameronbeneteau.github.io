import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="text-center">
      <p>{`</>`} with 🫶🏻 and 🧋</p>
      <p>Copyright © {new Date().getFullYear()} Cameron Beneteau</p>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
