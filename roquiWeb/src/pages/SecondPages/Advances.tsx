// pages/SecondPages/Advances.tsx
import { useParams } from "react-router-dom";
import ChuquiCongre from "./congres/Chuqui";
import ZonaEsteCongre from "./congres/ZonaEste";
// importa más según vayas creando...

const Advances = () => {
  const { id } = useParams();

  switch (id) {
    case "chuqui":
      return <ChuquiCongre />;
    case "zona-este":
      return <ZonaEsteCongre />;
    // más cases aquí
    default:
      return <p style={{ textAlign: "center" }}>Avanzada no encontrada.</p>;
  }
};

export default Advances;
