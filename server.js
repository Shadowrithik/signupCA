const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Welcome to Signup page');
});

app.post('/signup',(req,res)=>{
    const {username,email,password,dob} = req.body;

    if(!username){
        return res.status(400).json({error:"Username cannot be empty"});
    }
    if(!email){
        return res.status(400).json({error:"Email cannot be empty"});
    }
    if(length(password)<8){
        return res.status(400).json({error:"Password should be greater than 8"});
    }
    if(length(password)>16){
        return res.status(400).json({error:"Password should be lesser than 16"});
    }
    
    res.json({
        message: "Signup successful",
        Username: {username},
        Email: {email}

    });
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})
