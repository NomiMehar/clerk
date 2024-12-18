import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className='py-3 bg-gray-800 text-white'>
          <div className="container px-5">
          <div className='flex justify-end items-center'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
          </div>
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}