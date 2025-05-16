import ReceiveConsultation from "../module/representation/ReceiveConsultation";
import Advantages from "../module/representation/Advantages";
import Services from "../module/representation/Services";
import RequestRepresentation from "../module/representation/RequestRepresentation";

function RepresentationPage() {
  return (
    <div>
      <Services />
      <hr className="w-[calc(100%-9rem)] mx-auto text-[#CBCBCB]" />
      <Advantages />
      <hr className="w-[calc(100%-9rem)] mx-auto text-[#CBCBCB]" />
      <ReceiveConsultation />
      <hr className="w-[calc(100%-9rem)] mx-auto text-[#CBCBCB]" />
      <RequestRepresentation />
    </div>
  );
}

export default RepresentationPage;
