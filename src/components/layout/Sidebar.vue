<template>
  <aside>
    <div id="logo">
      <router-link :to="{name:'Home'}">
          <img src="https://colorlib.com/polygon/cooladmin/images/icon/logo.png"
               alt="logo">
      </router-link>
    </div>
    <div class="sidebar">
      <nav>
        <ul>
          <li>
            <router-link :to="{name:'Home'}">
             <i class="fas fa-tachometer-alt"></i>Dashboard
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'Chart'}">
              <i class="fas fa-chart-bar"></i>Charts
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'Table'}">
              <i class="fas fa-table"></i>Tables
            </router-link>
          </li>
          <li>
            <a href=""><i class="far fa-check-square"></i>Forms</a>
          </li>
          <li>
            <a href=""><i class="fas fa-calendar-alt"></i>Calendar</a>
          </li>
          <li>
            <a href=""><i class="fas fa-map-marker-alt"></i>Maps</a>
          </li>
          <li>
            <a href=""><i class="fas fa-desktop"></i>UI Elements</a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>

export default {
  name: "Sidebar",
  props:{
      msg: String
  }
};
</script>

<style scoped>
  img{
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }
  aside{
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
  }
  #logo{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    height: 75px;
    padding: 0 35px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
    border-right: 1px solid #e5e5e5;
    position: relative;
    z-index: 3;
  }
  .sidebar{
    position: relative;
    height: calc(100vh - 75px);
  }
  .sidebar nav{
    padding: 35px;
    padding-bottom: 0;
  }
  .sidebar nav ul{
    list-style:none;
  }
  .sidebar nav ul li{
    font-size: 16px;
    line-height: 1.625;
  }
  .sidebar nav a{
    text-decoration: none;
    display: block;
    color:#555;
    font-size: 16px;
    padding: 15px 0;
  }
  .sidebar nav i{
    margin-right: 19px;
    font-weight: 900;
  }
  .sidebar nav .active{ 
   color: blue;
  }
</style>
