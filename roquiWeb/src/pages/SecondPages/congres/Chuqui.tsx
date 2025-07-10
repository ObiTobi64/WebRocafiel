import AdvancedModel from "./AdvancedModel";

const ChuquiCongre = () => {
  return (
    <AdvancedModel>
      <AdvancedModel.Banner 
      title="Congregación Chuqudsi"
      backgroundVideo="/fondoo.mp4" />

      <AdvancedModel.Video>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ppXJctCACrI?si=BdfBPrFmOr-4zthf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </AdvancedModel.Video>

      <AdvancedModel.Buttons>
        <div className="flex flex-center justify-center" role="group">
          <button className="btn btn-primary">Jovenes</button>
          <button className="btn btn-secondary">Matrimonios</button>
          <button className="btn btn-tertiary">Jovenes Plus</button>
        </div>
      </AdvancedModel.Buttons>    

      <AdvancedModel.Info
        address="Av. Principal #123, Chuquisacooooo"
        schedule="Domingos 10:00 AM y 6:00 PM"
      />

      <AdvancedModel.Map mapEmbedUrl="https://www.google.com/maps/embed?pb=..." />

      <AdvancedModel.Footer>
        © 2025 Congregación Chuqui - Todos los derechos reservados.
      </AdvancedModel.Footer>
    </AdvancedModel>
  );
};


export default ChuquiCongre;
