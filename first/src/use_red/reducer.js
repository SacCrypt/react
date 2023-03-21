import { useEffect } from "react";
import Index from "./index";
const Red = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div>
      <Index />
      <p>{modalContent}</p>
    </div>
  );
};

export default Red;
