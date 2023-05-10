const express = require('express');
const app=express()

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

app.get('/',(req,res)=>{
    sdk.auth('rnd_S0EzCiZc6fy4eekXwHOBqmDZGGs1');
    sdk.getServices({limit: '20'})
      .then(({ data }) => {console.log(data);res.send(data)})
      .catch(err => console.error(err));
})
app.listen(3000,()=>{console.log("kiuy")})
