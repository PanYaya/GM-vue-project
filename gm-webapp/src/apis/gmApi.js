import { BASEURL } from '../commons/Config'
const GMTURL = `${BASEURL}/shop`

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
