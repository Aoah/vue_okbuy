

 
<style>
     header{
      display: flex;
      flex-direction:row;
        align-items:center;
        width:100%;
        height:.44rem;
        background:black;
      }
     .black8{
          height:100%;
           width:.18rem;
      }
     .list-header{
      padding:0 .2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
          flex:1;
          height:.32rem;
          background:#d7d7d7;
          border-radius: .05rem;
       }
       .list-header b{
        display: inline-block;
          width:.17rem;
          height:.17rem;
          background:url('/images/search2.png');
          background-size:100%;
       }
      .list-header i{
        color:#585858;
      }
      .laba{
          width:.11rem;
          height:.17rem;
      }
      .labaMid{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
      }
      .labaphoto{
          background:url('/images/laba2.png');
          background-size: 100%;
      }

</style>

 <template>
       <header>
         <div class="black8">
         </div>
         <div class="list-header">
                <div class="laba">

                </div>
                <div class="labaMid">
                <b ></b><i>请输入关键词</i>
                </div>

                <div class="laba labaphoto">

                </div>
         </div>
         <div class="black8">
         </div>
      </header> 
 </template>

<script>

</script>

