<template>
  <footer >
    <div class="bottom">
      <span><img src="http://39.107.139.165/3img/check_filled.png" alt=""><span>全选</span></span>
      <div>
        <span>合计：<span style="color: red">￥13999.00</span></span>
        <button>去结算（1）</button>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'vfooter'
}
</script>

<style scoped>
  .bottom{
    width: 94%;
    height: 0.5rem;
    padding:0rem 0rem 0rem 0.2rem;
    display:flex;
    justify-content: space-between;
    border-top:0.01rem solid rgb(216, 213, 213);
  }
  .bottom img{
    width: 0.19rem;
    height: 0.19rem;
    position: relative;
    top: 0.03rem;

  }
  .bottom button{
    height: 0.5rem;
    background-color:red;
    border: none;
    color: white;
    text-align: center;
    font-weight: 500;
  }
  .bottom>span:first-child{
    padding-top:0.1rem;
  }
</style>
