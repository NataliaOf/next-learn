'use client'

export default function ErrorWrapper({error}: {error:Error}){
 console.log(error)
   return <h2>OOOps... {error.message}</h2>
}