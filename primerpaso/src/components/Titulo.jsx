const Titulo = ({ children }) => {
  /* funcion flecha */
  return (
    <>
      <h1 className="title">{children}</h1>            
    </>
  );
};

export default Titulo;

 
   /* Uso children, pero si quiero que se llame texto ponele, cuando llame a este componente seria <Titulo texto="Check your time"></Titulo> */
 