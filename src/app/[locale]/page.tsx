
import HeroImageA from "@/components/CldImage/HeroImageA"
import HeroImageB from "../../components/CldImage/HeroImageB";
import HeroImage02 from "@/components/CldImage/HeroImage02";
import HeroImage03 from "@/components/CldImage/HeroImage03";
import Gsap from "@/components/Gsap"
import CollapseCardFeatures from "@/components/CollapsCardFeatures";
import  Caroussel  from "@/components/HorizontalCaroussel";


export default function Home() {
  return (
    <>
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center ">
 
        <div className="hidden md:block"> 
            <HeroImageA/>
        </div>
        <div className=" w-[100vw] h-[100vh] md:hidden ">
      <HeroImageB/> 
        </div>                                                
         <div className="flex flex-col items-center bg-gradient-to-b from-[#938d7d] lg:bg-gradient-to-b via-transparent  to-transparent lg:mt-[50vh]">
         
         </div> 
         
        </section>
        <div className=" mt-[-8vw] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-24vh]">
        <HeroImage02/> 
         </div>

        <div className="mt-[12vh] h-[100vh] w-full max-w-[99em] mx-auto flex flex-col items-center lg:mt-[12vh]">
        <HeroImage03/> 
        
          </div>
          <div className="-mt-[80vh] w-full max-w-[100vw] mx-auto flex flex-col lg:mt-0">
         <CollapseCardFeatures/>
         </div>

         <section className="flex min-h-[80vh] flex-col items-start justify-center px-4">
          <div className="">
            <h1 className="ml-12 text-6xl font-bold tracking-tighter md:text-8xl">
              PRODUCT
              <br />
              DESIGNER &
              <br />
              ART DIRECTOR
            </h1>
          </div>
        </section>
        <section className="flex min-h-[80vh] flex-col items-start justify-center px-4">
          <div className="flex flex-col items-center">
            <Caroussel/>
          </div>
        </section>
        
    
      </main>
      
    
    </>
  )
}
