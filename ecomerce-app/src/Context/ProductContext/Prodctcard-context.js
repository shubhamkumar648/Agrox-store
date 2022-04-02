import { useAxios } from "../../Utils/useAxios";
import { useContext, createContext, useState, useEffect } from "react";

const Productcontext = createContext();

const Productprovider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const { apiData, loading } = useAxios("/api/products");

  useEffect(() => {
    if (!loading) {
      setProduct([...apiData.products]);
      console.log(apiData, "apidata");
    }
  }, [loading]);

  console.log(product, "products");

  return (
    <Productcontext.Provider value={{ product }}>
      {children}
    </Productcontext.Provider>
  );
};

const useProduct = () => useContext(Productcontext);

export { Productprovider, useProduct };
