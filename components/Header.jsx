"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const Header = () => {
    const router = useRouter()

    return (
        <header className="fixed top-0 z-50 w-full bg-black/30 backdrop-blur-lg">

            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">

                {/* LOGO */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="RJTI Charts"
                        width={140}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </div>

                {/* CTA */}
                <Button
                    size="sm"
                    className="gap-2 bg-[#EB7400] px-5 font-semibold shadow-md transition hover:scale-[1.02] hover:bg-[#6e9c1f]"
                    onClick={() => router.push("/register")}
                >
                    Reserve Seat
                    <ArrowRight className="h-4 w-4" />
                </Button>

            </div>
            
        </header>
    )
}

export default Header