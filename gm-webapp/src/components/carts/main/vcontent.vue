<template>
  <div class="vcontent">
    <div class="shopping-car">
      <div>
        <img src="http://39.107.139.165/3img/select.png" alt="">
      </div>
      <div class="shopping">
        <img src="http://39.107.139.165/3img/1.jpg" alt="">
      </div>
      <div class="shopping-num">
        <p>
          梦克拉Mkela 白18K金钻石戒指 皇室传奇 钻石戒指群镶结婚戒指钻石女戒1克拉效果
        </p><br>
        <span>限购99件</span>

        <div class="price">
          <span style="color: red;">￥13999</span>
          <span><button>-</button>&nbsp;&nbsp;&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;<button>+</button></span>
        </div> <br>
        <p class="delete"><span>移入收藏</span> <span>删除</span></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'vcontent',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
  .vcontent{
    width: 100%;
    height: 1.87rem;
    padding:0rem 0.2rem;

    margin-bottom:0.12rem ;
  }
  .shopping-car{
    width: 89%;
    display: flex;
    border:0.01rem rgb(221, 220, 220) solid;
    box-shadow: 0.1rem rgb(216, 213, 213);
  }
  .shopping-car .shopping img{
    width: 0.9rem;
    height: 0.9rem;
  }
  .shopping-num p{
    width:2.2rem;
    height: 0.37rem;
    overflow: hidden;
  }
  .shopping-num>span{
    border: 0.01rem red solid;
    color: red;
  }
  .price{
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
  }
  .price>span>button{
    border: none;
    background-color: rgb(233, 227, 227);
  }
  .delete{
    text-align: right;
    color: gray;
  }
  .delete>span:last-child{
    margin-left:0.3rem ;
  }
</style>
