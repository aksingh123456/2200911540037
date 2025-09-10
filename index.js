const express=require("express")
const app=express();
const shortlid=require("shortid");
app.use(express.json());
const urlstore={};

app.post("/shortenurl",(req,res)=>{
    const {url,validity,shortcode}=req.body;
    console.log("request body",req.body)
    const shorturl=shortlid.generate();
    urlstore[shorturl]={longurl,expiry};
    return res.status(201).json({shortLink:` http://localhost:3000${shorturl}`},
        {expiry:`${expiry}`}
    )

})
app.listen(3000,(req,res)=>{
    console.log("server is running on http://localhost:3000")
})