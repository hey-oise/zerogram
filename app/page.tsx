import Link from "next/link";

export default function App() {
  return (
    <div className="flex flex-col text-center justify-center center w-full mt-60">
      <div className="m-auto flex flex-col gap-5">
        <h1 className="text-3xl px-9 text-center text-blue-500 bold">run code lightwieght, even on zero ram
        </h1>
        <div className="flex gap-2 m-auto">
        <Link href='/auth/sign-up' className='cursor-pointer border-gray-700 border p-2 rounded-md hover:bg-blue-700 bg-blue-600'>sign up</Link>
        <Link href='/auth/sign-in' className='cursor-pointer border-gray-700 border p-2 rounded-md hover:underline'>sign in</Link>
      </div>
     </div>
    </div>
  )
}