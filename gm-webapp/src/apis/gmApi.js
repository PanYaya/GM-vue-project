
const GMTURL = `http://10.35.167.56:3003/product`

export default {

  /**
     * 获取店铺的信息
     */
  getGMInfoByUserId (cb) {
    fetch(GMTURL).then(res => {
      res.json().then(cb)
    })
  }

}
