import RepresentationPage from "@/components/templates/RepresentationPage";
import Image from "next/image";

function Representation() {
  return (
    <div>
     <div className='relative'>
        <Image src="/images/join.jpg" width={1440} height={336} alt="aboutus" className=' object-cover w-full md:h-[300px] '/>
        <div className="absolute inset-0 bg-gray-600 opacity-50 flex justify-center items-center"></div>
        <div className='absolute inset-0 flex  justify-center items-center'>
            <p className='text-5xl text-white'>
            Join Us Now...
            </p>
        </div>
        </div>
      <RepresentationPage />
    </div>
  );
}

export default Representation;
