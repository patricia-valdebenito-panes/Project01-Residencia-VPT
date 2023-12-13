import express from "express";

const router = express();

router.get("/",(req,res)=>{
    res.json({status:true})
})


export default router;