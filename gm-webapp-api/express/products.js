const express = require("express")
const router = express.Router() //restful api


router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

router.get("/",(req,res)=>{
    res.jsonp({
        phone:[
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p1.png",
                p:"小米CC9 pro"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p2.png",
                p:"NOwC9 pro"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p3.png",
                p:"ZMCC9 pro"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p4.png",
                p:"小米ZZ9 pro"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p5.png",
                p:"红米BC9 pro"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p6.png",
                p:"K20 pro 尊享"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p7.png",
                p:"Rediom Note"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p8.png",
                p:"ReNote N"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p9.png",
                p:"小米CR2 pro"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p10.png",
                p:"小米CCW9 pro"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright/p11.png",
                p:"小米ZC9 pro"
            },

        ]
    })
})

router.get("/list",(req,res)=>{
    res.jsonp({
        msg:"hello product api"
    })
})

module.exports = router;