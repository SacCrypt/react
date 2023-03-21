import { useState } from "react";
import Authenticate from "./authenticate";
import Insert from "./insertProducts";

const AddProd = () => {
  const [validate, setValidate] = useState(false);
  return (
    <div>{validate ? <Insert /> : <Authenticate validate={setValidate} />}</div>
  );
};

export default AddProd;
