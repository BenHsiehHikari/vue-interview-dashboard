<template>
    <header>
      <div class="content">
        <div class="container">
          <div class="box">
            <form action="">
              <input type="text"
                     name="search"
                     placeholder="Search for datas & reports...">
              <button type="sub"><i class="zmdi zmdi-search"></i></button>
            </form>
            <div class="header-icon">
              <ul class="notice">
                <li class="item">
                  <i class="zmdi zmdi-comment-more"></i>
                  <span class="quantity">1</span>
                </li>
                <li class="item">
                  <i class="zmdi zmdi-email"></i>
                  <span class="quantity">1</span>
                </li>
                <li class="item">
                  <i class="zmdi zmdi-notifications"></i>
                  <span class="quantity">3</span>
                </li>
              </ul>
              <div class="account">
                <div class="account-item">
                  <div class="image">
                    <img src="https://colorlib.com/polygon/cooladmin/images/icon/avatar-01.jpg"
                         alt="">
                  </div>
                  <div class="content-name">
                    <a href="">john doe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>

export default {
  name: "Navbar",
  props:{
      msg: String
  }
};
</script>

<style scoped>
  header{
    background: #f5f5f5;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    right: 0;
    left: 300px;
    height: 75px;
    z-index: 3;
  }
  .content{
    overflow: visible;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    padding: 0 30px;
    margin: 0 auto;
    z-index: 1;
  }
  .container{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .content .box{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content  form{
    display: flex;
  }
  .content form input{
    line-height: 43px;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    color: #666;
    padding: 0 17px;
    border-radius: 3px;
    min-width: 935px;
    overflow: visible;
  }
  .content form button{
    position: relative;
    right: 0;
    min-width: 65px;
    line-height: 43px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    background: #4272d7;
    margin-left: -3px;
    -webkit-appearance: button;
    cursor: pointer;
  }
  .content .zmdi-search{
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .header-icon{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .header-icon .notice{
    height: 45px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .notice .item{
    position: relative;
    margin-right: 35px;
    display: inline-block;
    cursor: pointer;
  }
  .notice .item:last-child {
    margin-right: 50px;
  }
  .notice .item i{
    font-size: 30px;
    color: #a9b3c9;
    vertical-align: middle;
  }
  .notice .item .quantity{
    position: absolute;
    display: inline-block;
    top: -4px;
    right: -7px;
    height: 15px;
    width: 15px;
    line-height: 15px;
    text-align: center;
    background: #ff4b5a;
    color: #fff;
    border-radius: 100%;
    font-size: 12px;
  }
  .account{
    position: relative;
  }
  .account-item{
    cursor: pointer;
  }
  .account-item .image{
    width: 45px;
    height: 45px;
    float: left;
    overflow: hidden;
    border-radius: 3px;
  }
  .account-item .image>img {
    width: 100%;
  }
  .account-item > .content-name{
    margin-left: 45px;
    padding: 15px 0;
    padding-left: 12px;
  }
  .account-item > .content-name > a{
    color: #333;
    text-transform: capitalize;
    font-weight: 500;
    text-decoration: none;
  }
  .account-item .content-name a:after{
    font-family: material-design-iconic-font;
    font-weight: 500;
    content: '\f2f9';
    display: inline-block;
    font-size: 16px;
    margin-left: 5px;
    box-sizing: border-box;
  }
</style>
