const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


  

app.get('/selectdata',(req,res)=>{
//   
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


