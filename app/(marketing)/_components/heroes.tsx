import Image from "next/image";

export const Heroes = () => {
  return(
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative mx-5 w-[300px] h-[400px] sm:w-[250px] sm:h-[350px] md:w-[250px] md:h-[350px]">
          <Image 
            src="/working.png"
            fill
            className="object-contian"
            alt="Icons by Icons8"
          />
        </div>
        <div className="relative mx-5 w-[300px] h-[350px] hidden md:block">
          <Image
            src="/playing.png"
            fill
            className="object-contian"
            alt="Icons by Icons8"
          />
        </div>
      </div>
    </div>
  )
}