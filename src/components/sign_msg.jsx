import { ethers } from 'ethers'
import React from 'react'
import { useState } from 'react'


const signMessage = async ({seterror,message}) =>{
    !window.ethereum && alert("no ethereum wallet detected. Reccomended to install metamask browser extension")

    try {

      await window.ethereum.request({method : "eth_requestAccounts"})
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const addrress = await signer.getAddress(signer)
      const sig = await signer.signMessage(message)
      
      return {message,addrress,sig};

    } catch(error) {
      seterror(error.message?.slice(0,21))
      console.log(error);
    }

}

const Sign = () => {

  const [error, seterror] = useState(undefined);
  const [sig, setsig] = useState([]);

  const newsignmsg = async (e) =>{

    try {
      e.preventDefault();
    const data = new FormData(e.target)
    seterror();

    const sigdata = await signMessage({seterror,message : data.get("message")})
    if(sigdata) {setsig([...sig , sigdata]) }

    } catch(error) {
      console.log(error);
    }
    
  }

 return (
    <div className='signcomp'>
      <div className='compheaderdiv'>
      <span className='compheader'>Sign a message</span>
      </div>
      <div className='formsigncomp'>
          <form onSubmit={newsignmsg}>
            <textarea cols="70" rows="3" type='text'  name='message' placeholder='message' >

            </textarea>

            <button type="submit">
                Sign Message
            </button>
          </form>
          {error && (
              <div className='error' >
              <h3 >{ error}</h3>
              </div>
          )}
          
      </div>
      
      {sig.length > 0 &&  <div className='prevsigns'>
        <span className='prevsigheader'>Prev signatures</span>
        {sig?.map( (sigdata,i) => {
           return (
            <div className='eachsign' key={i}>
                <h2 key={sigdata.messagei}>message : <span className='address'>{sigdata.message}</span></h2>
                <h2 key={sigdata.addrress}>signer   &nbsp;: <span className='address'>{sigdata.addrress}</span></h2>
                <h2 key={sigdata.sig}>
                  signature : <textarea  id="i" cols="45" rows="4" readOnly value={sigdata.sig}></textarea>
                </h2>
            </div>)
        })}
          
      </div>}
    </div>
    
  )
}

export default Sign