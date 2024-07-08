import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
})

export const Logo = () => {
  return(
    <div className="hidden md:flex items-center gap-x-2">
      <Image 
        src="/next.svg"
        width="60"
        height="60"
        alt="logo"
      />
      <p className={cn("font-semi", font.className)}>
        {/* Notion */}
      </p>
    </div>
  )
}