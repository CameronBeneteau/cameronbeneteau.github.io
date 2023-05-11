import { SectionWrapper } from "../hoc";

const Footer = () => {
    return (
      <div className="text-center">
         <p>
            <u><a href="https://github.com/ladunjexa/Threejs-3D-Portfolio/" target="_blank">Template</a></u> created by <u><a href="https://github.com/ladunjexa" target="_blank">Liron Abutbul</a></u>
        </p>
        <p>Cameron Beneteau's Portfolio © {new Date().getFullYear()}</p>
      </div>
    );
  };
  
  export default SectionWrapper(Footer, "footer");