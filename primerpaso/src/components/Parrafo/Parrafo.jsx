import Button from "@mui/material/Button";

const Parrafo = ({ children }) => {
  return (
    <>
      <p>{children}</p>
      <Button variant="contained">Hello world</Button>
    </>
  );
};

export default Parrafo;
