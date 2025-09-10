const express=require("express")
const app=express();
const shortlid=require("shortlid");
app.use(express.json());
const urlstore={};
app.post("/shortenurl",(req,res)=>{
    const longurl=req.body;
    const shorturl=shortlid.generate();
    urlstore[shorturl]=longurl;
    res.json({shorturl});
    
})