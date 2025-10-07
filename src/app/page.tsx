import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        <Image
          src="/restaurant_bg.jpg"
          alt="Logo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
            <div className="w-1/2 h-1/2 relative">
              <Image src="/logo.png" alt="Logo" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen max-w-7xl mt-24 mx-auto">
        <h1>Zlatna Cvekla je sada u nasem gradu</h1>
      </div>
    </>
  );
}
