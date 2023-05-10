
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

append.get('/',(req,res)=>{
    sdk.auth('rnd_S0EzCiZc6fy4eekXwHOBqmDZGGs1');
    sdk.getServices({limit: '20'})
      .then(({ data }) => {console.log(data);res.json(data)})
      .catch(err => console.error(err));
})

