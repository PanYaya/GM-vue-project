const CARTURL = `http://10.35.167.98:3002/product`

export default {

    /**
     * 获取店铺的信息
     */
    getCartInfoByUserId(cb){
        fetch(CARTURL).then(res=>{
            res.json().then(cb)
        })
    }


}