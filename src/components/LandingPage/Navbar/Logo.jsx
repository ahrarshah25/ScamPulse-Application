import React from 'react'
import { Shield } from 'lucide-react'

const Logo = (props) => {
  return (
    <div onClick={()=>{
        window.location.href = "/"
    }} className="cursor-pointer flex items-center gap-1 text-teal-600">
      <Shield color="#14b8a6" strokeWidth={2.5} size={30} />
      <h1 className="text-xl font-semibold tracking-wide">
        Scam <span style={{color: props.color || "#374151"}}>Pulse.</span>
      </h1>
    </div>
  )
}

export default Logo