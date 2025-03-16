"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw } from "lucide-react"

export default function NotFound() {
  const [countdown, setCountdown] = useState(5) // Reduced from 10 to 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/"
    }
  }, [countdown])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-16">
        <div className="text-center max-w-lg w-full">
          <h1 className="text-7xl sm:text-9xl font-bold mb-4 animate-pulse">404</h1>
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-30 animate-ping"></div>
            <h2 className="text-2xl sm:text-4xl font-semibold relative z-10">Halaman Tidak Ditemukan</h2>
          </div>
          <p className="text-base sm:text-xl text-gray-400 mb-8 max-w-md mx-auto">
            Ups! Sepertinya Anda tersesat di dunia digital. Mari kita bantu Anda kembali ke jalan yang benar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/" className="inline-flex items-center justify-center">
                <Home className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.location.reload()}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Muat Ulang Halaman
            </Button>
          </div>
          <p className="text-yellow-400 text-sm sm:text-base">
            Anda akan dialihkan ke halaman beranda dalam <span className="font-bold">{countdown}</span> detik
          </p>
        </div>
      </main>
      <Navbar />
    </div>
  )
}

