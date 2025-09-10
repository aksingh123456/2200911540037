const express=require("express")
const app=express();
const shortlid=require("shortid");
app.use(express.json());
// post request shortenurl api
app.post("/shortenurl",(req,res)=>{
    const {url,validity,shortcode}=req.body;
    console.log("request body",req.body)
    const shorturl=shortlid.generate();
    urlstore[shorturl]={longurl,expiry};
    return res.status(201).json({shortLink:` http://localhost:3000${shorturl}`},
        {expiry:`${expiry}`}
    )
})
//registration api 
app.post('http://20.244.56.144/evaluation-service/register' ,(req,res)=>{
    const {email,name,mobileno,githubusername,rollno,acesscode}=req.body;
    return res.status(201).json({email:`${email}`,
    name:`${name}`,rollno:"rollno",acesscode:`${acesscode}`,clientId:"",clientSecret:""})
})
//authorization token api
app.post("http://20.244.56.144/evaluation-service/auth" ,(req,res)=>{
    const {email,name , rollno,acesscode,clientId,clientSecret}=req.body;
    return res.status(200).json({token_type:"bearer",acess_token:"", expires_in:""})
})
//get request for shorturl
app.get("/:shortcode",(req,res)=>{
        const {shortcode}=req.params;
        return res.json({
            Description:"Retrive usage statistics",
            Method:"Get",
            Route:`${shortcode}`
        })
    })
app.listen(3000,(req,res)=>{
    console.log("server is running on http://localhost:3000")
})