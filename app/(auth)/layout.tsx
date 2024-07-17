import Image from "next/image";

//className="flex min-h-screen w-full justify-between font-inter"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main >
        {children}
        <div className="auth-asset">
          <div>
            {/* <Image 
            src='/icons/auth-image.svg'
            alt="side_image"
            width={500}
            height={500}
            
            /> */}
          </div>
        </div>
      </main>
    );
  }