import RepresentationPage from "@/components/templates/RepresentationPage";
import Image from "next/image";

function Representation() {
  return (
    <div>
      <div className="relative w-full h-[336px]">
        <Image src="/images/slider.png" alt="Banner" fill style={{objectFit:"cover"}}  />
      </div>
      <RepresentationPage />
    </div>
  );
}

export default Representation;
