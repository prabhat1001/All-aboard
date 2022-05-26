const router=require('express').Router();
router.post('/api/send-otp',(req,rep)=>{
    res.send('Hello from OTP route');
})

module.exports=router;