import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div><h1 style={{fontSize:24, fontWeight:"bold"}}>About Parent page </h1><br /> 
        <Link href={'/about/aboutchild'} style={{color:"blue", textDecoration:"underline"}}>
            child about page
        </Link>
    </div>
    
  )
}

export default index