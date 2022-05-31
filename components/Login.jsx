import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

const Login = () => {
  const { authenticate } = useMoralis();
  
  return (
    <div className="bg-black relative text-black">
      <h1>Wellcome Metaverse challenge</h1>
      <div className="z-50 absolute flex flex-col h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
