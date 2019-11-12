// 引用express
const express = require('express')
// 创建一个路由对象
const router = express.Router() // restful api

router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})
// 创建一个restful 地址
router.get('/', (req, res) => {
  res.jsonp({
    // msg: 'hello restfual api'
    arr: [
      {
        'title': '大家电',
        'products': [
          { name: '平板电视', imgurl: 'http://39.107.139.165/2img/1.png' },
          { name: '平板冰箱', imgurl: 'http://39.107.139.165/2img/2.png' },
          { name: '壁挂式空调', imgurl: 'http://39.107.139.165/2img/3.png' }
        ]
      },
      {
        'title': '数码通讯',
        'products': [
          { name: '手机', imgurl: 'http://39.107.139.165/2img/4.png' },
          { name: '笔记本电脑', imgurl: 'http://39.107.139.165/2img/5.png' },
          { name: '单反相机', imgurl: 'http://39.107.139.165/2img/6.png' }
        ]
      },
      {
        'title': '厨卫生活',
        'products': [
          { name: '取暖器', imgurl: 'http://39.107.139.165/2img/7.png' },
          { name: '空气净化器', imgurl: 'http://39.107.139.165/2img/8.png' },
          { name: '微波炉', imgurl: 'http://39.107.139.165/2img/9.png' }
        ]
      },
      {
        'title': '日用百货',
        'products': [
          { name: '啤酒', imgurl: 'http://39.107.139.165/2img/10.png' },
          { name: '品牌纸尿裤', imgurl: 'http://39.107.139.165/2img/11.png' },
          { name: '床品件套', imgurl: 'http://39.107.139.165/2img/12.png' }
        ]
      }

    ],
    'imgurl': [
      'http://39.107.139.165/2img/haix_1.png',
      'http://39.107.139.165/2img/ping_2.png',
      'http://39.107.139.165/2img/laob_3.png',
      'http://39.107.139.165/2img/feilp_5.png',
      'http://39.107.139.165/2img/mide_4.png',
      'http://39.107.139.165/2img/naji_9.png',
      'http://39.107.139.165/2img/huaw_7.png',
      'http://39.107.139.165/2img/mi_8.png',
      'http://39.107.139.165/2img/nike_6.png'],
    'list': [ '手机数码', '电脑办公', '电视音影', '空调冰洗',
      '厨房卫浴', '生活电器', '食品酒水', '美妆个护', '母婴玩具',
      '营养保健', '服饰鞋帽', '运动户外', '包箱奢品', '钟表首饰',
      '住宅家具', '家装建材', '家居日用', '床品家纺', '汽车用品',
      '黄金收藏', '智能家居', '生活服务'],
    ipone: [
      {
        'title': '手机',
        'products': [
          { name: '手机', imgurl: 'http://39.107.139.165/2img/cat1.png' }
        ]
      },
      {
        'title': '手机配件',
        'products': [
          { name: '移动电源', imgurl: 'http://39.107.139.165/shuma/cat2.png' },
          { name: '存储卡/读卡器', imgurl: 'http://39.107.139.165/shuma/cat3.png' },
          { name: '蓝牙耳机', imgurl: 'http://39.107.139.165/shuma/cat4.png' },
          { name: '有线耳机', imgurl: 'http://39.107.139.165/shuma/cat5.png' },
          { name: 'iPhone配件', imgurl: 'http://39.107.139.165/shuma/cat6.png' },
          { name: '保护套', imgurl: 'http://39.107.139.165/shuma/cat7.png' },
          { name: '贴膜', imgurl: 'http://39.107.139.165/shuma/cat8.png' },
          { name: '手机电池', imgurl: 'http://39.107.139.165/shuma/cat9.png' },
          { name: '智能手表/手环', imgurl: 'http://39.107.139.165/shuma/cat10.png' },
          { name: '车载配件', imgurl: 'http://39.107.139.165/shuma/cat11.png' },
          { name: '其他配件', imgurl: 'http://39.107.139.165/shuma/cat12.png' },
          { name: '充气器', imgurl: 'http://39.107.139.165/shuma/cat13.png' }
        ]
      },
      {
        'title': '摄影摄像',
        'products': [
          { name: '取暖器', imgurl: 'http://39.107.139.165/shuma/cat14.png' },
          { name: '空气净化器', imgurl: 'http://39.107.139.165/shuma/cat15.png' },
          { name: '微波炉', imgurl: 'http://39.107.139.165/shuma/cat16.png' }
        ]
      }

    ],
    office: [
      {
        'title': '电脑整机',
        'products': [
          { name: '笔记本', imgurl: 'http://39.107.139.165/2img/dn1.png' },
          { name: '平板电脑', imgurl: 'http://39.107.139.165/2img/dn2.png' },
          { name: '游戏本', imgurl: 'http://39.107.139.165/2img/dn3.png' },
          { name: '设计电脑', imgurl: 'http://39.107.139.165/2img/dn4.png' },
          { name: '台式电脑', imgurl: 'http://39.107.139.165/2img/dn5.png' },
          { name: '超级本', imgurl: 'http://39.107.139.165/2img/dn6.png' },
          { name: '台式主机', imgurl: 'http://39.107.139.165/2img/dn7.png' },
          { name: '一体机', imgurl: 'http://39.107.139.165/2img/dn8.png' },
          { name: '笔记本配件', imgurl: 'http://39.107.139.165/2img/dn9.png' },
          { name: '服务器', imgurl: 'http://39.107.139.165/2img/dn10.png' }
        ]
      },
      {
        'title': '苹果配件',
        'products': [
          { name: 'iPad配件', imgurl: 'http://39.107.139.165/2img/dn11.webp' },
          { name: '保护套', imgurl: 'http://39.107.139.165/2img/dn12.png' },
          { name: '保护膜', imgurl: 'http://39.107.139.165/2img/dn13.png' },
          { name: '数据线', imgurl: 'http://39.107.139.165/2img/dn14.webp' },
          { name: '底座/支架', imgurl: 'http://39.107.139.165/2img/dn15.png' },
          { name: '车载设备', imgurl: 'http://39.107.139.165/2img/dn16.png' },
          { name: '耳机', imgurl: 'http://39.107.139.165/2img/dn17.png' },
          { name: '耳机', imgurl: 'http://39.107.139.165/2img/dn18.png' }
        ]
      },
      {
        'title': '数码通讯',
        'products': [
          { name: '手机', imgurl: 'http://39.107.139.165/2img/4.png' },
          { name: '笔记本电脑', imgurl: 'http://39.107.139.165/2img/5.png' },
          { name: '单反相机', imgurl: 'http://39.107.139.165/2img/6.png' }
        ]
      },
      {
        'title': '数码通讯',
        'products': [
          { name: '手机', imgurl: 'http://39.107.139.165/2img/4.png' },
          { name: '笔记本电脑', imgurl: 'http://39.107.139.165/2img/5.png' },
          { name: '单反相机', imgurl: 'http://39.107.139.165/2img/6.png' }
        ]
      }
    ],
    tv: [
      {
        'title': '电视',
        'products': [
          { name: '客厅电视', imgurl: 'http://39.107.139.165/2img/tv/cat35.webp' },
          { name: '55英寸', imgurl: 'http://39.107.139.165/2img/tv/cat36.webp' },
          { name: '智能电视', imgurl: 'http://39.107.139.165/2img/tv/cat37.webp' },
          { name: '4k超清', imgurl: 'http://39.107.139.165/2img/tv/cat38.webp' },
          { name: '超薄电视', imgurl: 'http://39.107.139.165/2img/tv/cat39.webp' },
          { name: '曲面电视', imgurl: 'http://39.107.139.165/2img/tv/cat40.webp' },
          { name: '卧室电视', imgurl: 'http://39.107.139.165/2img/tv/cat41.webp' },
          { name: '国产电视', imgurl: 'http://39.107.139.165/2img/tv/cat42.webp' },
          { name: '仓子电视', imgurl: 'http://39.107.139.165/2img/tv/cat43.webp' }
        ]
      },
      { 'title': '电视',
        'products': [
          { name: '客厅电视', imgurl: 'http://39.107.139.165/2img/tv/cat35.webp' },
          { name: '55英寸', imgurl: 'http://39.107.139.165/2img/tv/cat36.webp' },
          { name: '智能电视', imgurl: 'http://39.107.139.165/2img/tv/cat37.webp' },
          { name: '4k超清', imgurl: 'http://39.107.139.165/2img/tv/cat38.webp' },
          { name: '超薄电视', imgurl: 'http://39.107.139.165/2img/tv/cat39.webp' },
          { name: '曲面电视', imgurl: 'http://39.107.139.165/2img/tv/cat40.webp' },
          { name: '卧室电视', imgurl: 'http://39.107.139.165/2img/tv/cat41.webp' },
          { name: '国产电视', imgurl: 'http://39.107.139.165/2img/tv/cat42.webp' },
          { name: '仓子电视', imgurl: 'http://39.107.139.165/2img/tv/cat43.webp' }
        ]
      },
      {
        'title': '手机配件',
        'products': [
          { name: '移动电源', imgurl: 'http://39.107.139.165/shuma/cat2.png' },
          { name: '存储卡/读卡器', imgurl: 'http://39.107.139.165/shuma/cat3.png' },
          { name: '蓝牙耳机', imgurl: 'http://39.107.139.165/shuma/cat4.png' },
          { name: '有线耳机', imgurl: 'http://39.107.139.165/shuma/cat5.png' },
          { name: 'iPhone配件', imgurl: 'http://39.107.139.165/shuma/cat6.png' },
          { name: '保护套', imgurl: 'http://39.107.139.165/shuma/cat7.png' },
          { name: '贴膜', imgurl: 'http://39.107.139.165/shuma/cat8.png' },
          { name: '手机电池', imgurl: 'http://39.107.139.165/shuma/cat9.png' },
          { name: '智能手表/手环', imgurl: 'http://39.107.139.165/shuma/cat10.png' },
          { name: '车载配件', imgurl: 'http://39.107.139.165/shuma/cat11.png' },
          { name: '其他配件', imgurl: 'http://39.107.139.165/shuma/cat12.png' },
          { name: '充气器', imgurl: 'http://39.107.139.165/shuma/cat13.png' }
        ]
      }

    ]

  })
})

router.get('/list', (req, res) => {
  res.jsonp({
    msg: 'hello product api'
  })
})

module.exports = router
