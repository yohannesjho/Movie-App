import React from 'react'

export default function SignIn() {
  return (
    < >
       <div className="w-full h-screen ">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/9a5f2b13-c790-4e4c-a670-546b9dc5f577/ET-en-20221214-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" className='hidden absolute sm:block w-full h-full object-cover' />
         <div className="fixed top-0 left-0 w-full h-screen bg-black/60 "></div>

         <div className="fixed w-full px-4 py-24   ">
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>

                    <form>
                        <input className="bg-gray-500 py-3  px-4 text-gray-600 outline-none     mb-4 rounded w-[300px]"    type="email" name="" id=""  placeholder="email" autoComplete />
                        <input className="bg-gray-500 py-3  px-4 text-gray-600 outline-none     mb-4 rounded w-[300px]" type="password" name="" id=""  placeholder="Password" autoComplete />
                    </form>
                    </div>
                </div>
         </div>

       </div>
    </>
  )
}
