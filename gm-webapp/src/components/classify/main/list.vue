<template>
  <ul>
    <li  v-for=" (n,i) in list" :class="{active:i===isActive}" :key="i" @click="fun(i)">{{n}}</li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  data: function () {
    return {
      isActive: 0,
      'list': [ '手机数码', '电脑办公', '电视音影', '空调冰洗',
        '厨房卫浴', '生活电器', '食品酒水', '美妆个护', '母婴玩具',
        '营养保健', '服饰鞋帽', '运动户外', '包箱奢品', '钟表首饰',
        '住宅家具', '家装建材', '家居日用', '床品家纺', '汽车用品',
        '黄金收藏', '智能家居', '生活服务']
    }
  },
  methods: {

    fun (i) {
      this.isActive = i

    }
  }
}
</script>

<style scoped>
  ul{
    width: 20%;
    background-color:#f6f6f6;
    float: left;
  }
  li{
    height: 0.48rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    font-weight: 600;
    margin-left: 0.02rem;
    border-bottom: 0.01rem solid rgb(216, 213, 213) ;
    padding-left: 0.03rem;

  }
  .active{
    color: red;
    border-left: 0.02rem solid red;
  }
</style>
