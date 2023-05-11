import React from 'react';

export default function GetOtp() {

    
   async function userGet(){
    const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP'

    const option = {
       method: 'POST',
       headers:{
          'Content-Type': 'application/json',
       },
       body: JSON.stringify({mobile: ''}),
    }

    fetch(url, option)
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
 }

  return (
    <div>
      <input
      placeholder='Enter mobile no.'
      />
      <button onClick={userGet}> Get OTP</button>
    </div>
  )
}


