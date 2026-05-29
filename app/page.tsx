import Image from "next/image";

export default function Home() {
  return (
    <form
              className="flex flex-col gap-5 min-h-screen items-center justify-center bg-gray-800">
        <div className="bg-gray-750 backdrop-blur-2xl border-gray-500 border flex flex-col gap-3 p-5 rounded-2xl">
              <div className="w-sm">
                <h1 className="mt-10 text-center text-2xl/9 font-bold text-white">Create new account</h1>
              </div>
        
              <div className='flex flex-col gap-1.5 w-sm'>
                <label htmlFor="name" className="block text-sm font-medium text-gray-100">username</label>
                <input id="name" name="name" type="text" required placeholder="John Doe"
                  className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-indigo-500"
                />
              </div>
        
              <div className='flex flex-col gap-1.5 w-sm'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email address</label>
                <input id="email" name="email" type="email" required placeholder="john@my-company.com"
                  className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10  focus:outline-indigo-500"/>
              </div>
        
              <div className='flex flex-col gap-1.5 w-sm'>
                <label htmlFor="password" className="block text-sm font-medium text-gray-100">Password</label>
                <input id="password" name="password" type="password" required placeholder="*****"
                  className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10  focus:outline-indigo-500"/>
              </div>
                <div className="rounded-md pxf-3 pyf-2 text-sm text-red-500">
                </div>
        
              <button type="submit"
                className="flex w-sm justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400">sign up
        </button>
      </div>
            </form>
  );
}
