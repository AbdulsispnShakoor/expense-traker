import {
  SignInButton, SignedIn, SignedOut, SignUpButton, UserButton
} from "@clerk/clerk-react"
const Auth = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center space-x-4 bg-[#1f1f1f] text-white">
      <SignedOut>
        <div className="bg-white rounded-md px-6 py-3 text-black">

          <SignUpButton mode="modal" />
        </div>
        <div className="bg-white rounded-md px-6 py-3 text-black">

          <SignInButton mode="modal" />
        </div>

      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Auth