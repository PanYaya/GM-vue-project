<template>
  <div class="content">
    <div  v-for="(v,i) in arr" :key="i"  :i="i">
<!--      <div v-for="(v,i) in arr" :key="i" >-->
      <p>{{v.title}}</p>
      <ul >
        <shop-product v-for="(val,sid) in v.products" :key="sid"  :data="val" :sid="sid"></shop-product>
      </ul>
    </div>
    <p>热门品牌</p>
    <ul class="hot">
      <li v-for="(n,k) in imgurl" :key="k">
        <a href="">
          <img :src="n" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import item from './item'
export default {
  name: 'content',
  components: {
    'shop-product': item
  },
  data () {
    return {
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
        'http://39.107.139.165/2img/nike_6.png']

    }
  }
  // methods:{
  //   "this".$router.replace({ path: '/' })
  // }
}

</script>

<style scoped>
  .content{
    width:77%;
    height: 100%;
    padding: 0.08rem 0rem 0.08rem 0.08rem;
    /* padding: 0.08rem; */
    float: left;
  }
 p{
    padding-bottom:0.1rem;
    color: gray;
    font-size: 0.12rem;
  }
  .content>div ul{
    width: 100%;
     height: 1.15rem;
    display: flex;
  }
  /*.hot{*/
  /* */
  /*  */
  /*}*/
  .hot{
    /*height: 3.48rem;*/
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .hot li{
    height:0.5rem;
    width: 30%;
  }
  .hot li img{
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
