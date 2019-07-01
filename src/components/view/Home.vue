<template>
  <div class="weather">

    <div class="item">
      <label class="loaction"
             for="">
        <select @change="handleselectcity($event)">
          <option v-for="item in apicities"
                  :key="item.apiid">
            {{item.city}}
          </option>

        </select>
      </label>

      <label class="zone"
             for=""
             v-if="citiesid.city === '宜蘭縣' || selectedcity === '宜蘭縣'">
        <select 
                @change="handleselecttown($event)">
          <option v-for="item in inityina"
                  :key="item.geocode">
            {{item.locationName}}
          </option>
        </select>
     </label>
     <label class="zone"
             for=""
             v-else-if="citiesid.city === '桃園市' || selectedcity === '桃圈市'">
        <select @change="handleselecttown($event)">
          <option v-for="town in towns"
                  :key="town.geocode">
            {{town.locationName}}
          </option>
        </select>
     </label>

    </div>

    <div class="item">
      <div class="col-3">
        <div class="weather-status">
          <i class="fas fa-cloud-sun"></i>
          <span class="temporation">{{currentTown[0].weatherElement[3].time[1].elementValue[0].value}}°C</span>
          <span class="status">{{currentTown[0].weatherElement[1].time[1].elementValue[0].value}}</span>
        </div>
        <div class="weather-feeling">
          <span>{{currentTown[0].weatherElement[5].time[1].elementValue[1].value}}</span>
          <span><i class="fas fa-umbrella"></i>{{currentTown[0].weatherElement[7].time[1].elementValue[0].value}}%</span>
        </div>
      </div>
      <div class="col-9">
        <ul class="weather-information">
          <li>
            <h3>體感溫度</h3>
            <p>{{currentTown[0].weatherElement[2].time[1].elementValue[0].value}}度</p>
          </li>
          <li>
            <h3>風向</h3>
            <p>{{currentTown[0].weatherElement[9].time[1].elementValue[0].value}}</p>
          </li>
          <li>
            <h3>相對濕度</h3>
            <p>{{currentTown[0].weatherElement[4].time[1].elementValue[0].value}}%</p>
          </li>
          <li>
            <h3>風速</h3>
            <p>{{(currentTown[0].weatherElement[8].time[1].elementValue[0].value)*3.6.toFixed()}}(公里/小時) {{currentTown[0].weatherElement[9].time[1].elementValue[0].value.substr(0,2)}}</p>
          </li>
          <li>
            <h3>紫外線指數</h3>
            <p>9</p>
          </li>
          <li>
            <h3>露點溫度</h3>
            <p>{{currentTown[0].weatherElement[10].time[1].elementValue[0].value}}度</p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      apicities:[
        {city:'宜蘭縣',apiid:'F-D0047-001'},
        {city:'桃園市',apiid:'F-D0047-005'}
      ],
      selectedcity:"",
      selectedtown:"",
      data:null,
      inityina:[]
    }
  },
  methods:{
    handleselectcity(e){
      this.selectedcity = e.target.value;
      this.fetchCityWeatherApi(this.citiesid.apiid);
       
    },
    handleselecttown(e){
      this.selectedtown = e.target.value;
       
    },
    fetchCityWeatherApi(ID){
      fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${ID}?Authorization=CWB-ECC77BA1-CA46-4ECC-B680-18F3C5184C7B`)
        .then(res => res.json())
        .then(res => {
           
          this.data = res;
          this.inityina = this.data.records.locations[0].location;
        })
        
    }
  },
  computed:{
    citiesid(){
      return this.apicities.filter(item => item.city === (this.selectedcity || '宜蘭縣'))[0];
    },
    towns(){
      if(this.selectedcity === this.citiesid.city){
        return this.data.records.locations[0].location;
      }
    },
    currentTown(){
       
        if(this.selectedcity === '宜蘭縣' || this.citiesid.city === '宜蘭縣'){
          return this.inityina.filter(item => item.locationName ===  (this.selectedtown || '羅東鎮') );
        }
        if(this.selectedcity === '桃園市' || this.citiesid.city === '桃園市'){
          return this.towns.filter(item => item.locationName ===  (this.selectedtown || '桃園區') );
        }
    }
  },
  created(){
    this.fetchCityWeatherApi(this.citiesid.apiid);
  },
  mounted(){
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .weather{
    background: #fdfde1;
    width: 800px;
    height: 250px;
  }
  /* .weather .item{
    outline:1px solid red;
  } */
  .weather .item:nth-child(1){
    padding: 20px 0 40px 30px;
  }
  .weather select{
    font-size: 20px;
    background: transparent;
    border:0;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
    padding-right: 20px;
  }
  .loaction{
    margin-right: 40px;
  }
  label {position:relative}
  label:after {
      content: "\f078";
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 11px;
      color:#000;
      right:5px;
      top:4px;
      padding:0 0 2px;
      position:absolute;
      pointer-events:none;
  }
  label:before {
      content:'';
      right:0px;
      top:0px;
      width:23px;
      height:18px;
      position:absolute;
      pointer-events:none;
      display:block;
  }
  .weather .item:nth-child(2){
    display: flex;
    padding: 10px;
  }
  .weather .item:nth-child(2) .col-3{
    width: 33.33%;
  }
  .weather .item:nth-child(2) .col-9{
    width: 66.66%;
  }
  .weather-information{
    display: flex;
    flex-wrap: wrap;
  }
  .weather-information li{
    display: flex;
    width: 50%;
  }
  .weather-status {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .weather-status .fa-cloud-sun{
    font-size: 30px;
    margin-right: 10px;
  }
  .temporation{
    font-size: 30px;
    font-weight: 900;
    margin-right: 5px;
  }
  .weather-information li{
    margin-bottom: 30px;
    width: 50%;
  }
  .weather-information li h3{
    width: 45%;
    text-align: center;
  }
  .weather-information li p{
    width: 55%;
  }
</style>
