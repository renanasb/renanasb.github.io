const express = require ('express') ;
const bodyparse = require('body-parser ')

const  app = express()

const server = {
    on : ()=> {
        app.use(bodyparse.json());
        app.use(bodyparse.urlencoded({extended: true}))
        app.use(express.static("/"));
        
        const port =  process.env.PORT || 7000;
      
      
        app.listen(port,()=> {
    console.log(`server renning at http://localhost:${port}`); });
},
};
export{server}