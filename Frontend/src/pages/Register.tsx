import React from 'react'

const Register: React.FC = () => {
  return (
    <div className='w-full h-screen'>
      <div className='flex items-center flex-col gap-4 justify-center'>
        <div className='flex flex-col gap-4 font-["satoshi"]'>
          <div>
            <h1 className='text-3xl font-thin tracking-tighter mb-3 px-5'>Create a account</h1>
          </div>
          <input className='w-72 h-14 p-3 rounded-full border border-zinc-400 text-md outline-none text-zinc-500' placeholder='Email address' type='email' required></input>
          <div className='w-72 h-fit p-3 rounded-full bg-black text-zinc-50 text-center'>Continue</div>
          <div className='px-10'>Already have a account ? <span className='text-blue-600'>Login</span></div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-24 bg-zinc-200 h-[0.1rem]'></div>
          <div className='text-zinc-600'>OR</div>
          <div className='w-24 bg-zinc-200 h-[0.1rem]'></div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='w-64 h-fit p-2 text-center font-semibold rounded-full border border-zinc-400'>Continue with Google</div>
          <div className='w-64 h-fit p-2 text-center font-semibold rounded-full border border-zinc-400'>Continue with Github</div>
        </div>
      </div>
    </div>
  )
}

export default Register