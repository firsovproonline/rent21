<template>
  <div class="home">
    <rent-save></rent-save>
    <div class="section">
      <div class="infoSectionHeader">Тип объявления {{_test.BUILDS[this.indexbuild].ob21[this.indexob].TIP}}</div>
      <rent-select
          v-bind:items="[
            {value:'Коммерческая',label:'Коммерческая'},
            {value:'Жилая',label:'Жилая'},
            {value:'Загородная',label:'Загородная'},
          ]"
          field_="TIPN"
          tip_="list"
          width_label="170px"
          v-bind:value="_test.BUILDS[this.indexbuild].ob21[this.indexob].TIPN"
          v-bind:field_ob="_test.BUILDS[this.indexbuild].ob21[this.indexob]"
          label='Тип недвижимости'>
      </rent-select>


      <rent-select
          v-if="_test.BUILDS[this.indexbuild].ob21[this.indexob].TIPN==='Коммерческая'"
          v-bind:items="_getTIP"
          field_="TIP"
          tip_="list"
          width_label="170px"
          v-bind:value="_test.BUILDS[this.indexbuild].ob21[this.indexob].TIP"
          v-bind:field_ob="_test.BUILDS[this.indexbuild].ob21[this.indexob]"

          label='Тип помещения'>
      </rent-select>
      <rent-select
          v-bind:items="[
            {value:'Аренда',label:'Аренда'},
            {value:'Продажа',label:'Продажа'},
          ]"
          field_="OPP"
          tip_="list"
          width_label="170px"
          width_input="100%"
          v-bind:value="_test.BUILDS[this.indexbuild].ob21[this.indexob].OPP"
          v-bind:field_ob="_test.BUILDS[this.indexbuild].ob21[this.indexob]"
          label='Тип операции'>
      </rent-select>

    </div>
    <div class="section">
      <div class="infoSectionHeader" style="margin-top: 12px; display: flex;justify-content: center;" >
        <div>О здании</div>
        <div style="margin-left: 8px"
            v-html="_test.BUILDS[this.indexbuild].NAME"
        ></div>
      </div>
      <rent-input
        label='Наименование'
        width_label="170px"
        width_input="100%"
        v-bind:value="_test.BUILDS[this.indexbuild].NAME"
        v-bind:field_ob="_test.BUILDS[this.indexbuild]"
        field_="NAME"
      ></rent-input>
      <rent-input
          label='Год постройки'
          width_label="170px"
          width_input="45px"
          mask="####"
          v-bind:value="_test.BUILDS[this.indexbuild].GODP"
          v-bind:field_ob="_test.BUILDS[this.indexbuild]"
          field_="GODP"
      ></rent-input>
      <rent-select
          v-bind:items="[
            {value:'administrativeBuilding',label:'Административное здание'},
            {value:'businessCenter',label:'Бизнес-центр'},
            {value:'businessCenter2',label:'Деловой центр'},
            {value:'businessHouse',label:'Деловой дом'},
            {value:'businessPark',label:'Бизнес-парк'},
            {value:'businessQuarter',label:'Бизнес-квартал'},
            {value:'businessQuarter2',label:'Деловой квартал'},
            {value:'free',label:'Объект свободного назначения'},
            {value:'industrialComplex',label:'Производственный комплекс'},
            {value:'industrialPark',label:'Индустриальный парк'},
            {value:'industrialSite',label:'Промплощадка'},
            {value:'industrialWarehouseComplex',label:'Производственно-складской комплекс'},
            {value:'logisticsCenter',label:'Логистический центр'},
            {value:'logisticsComplex',label:'Логистический комплекс'},
            {value:'logisticsPark',label:'Логистический парк'},
            {value:'mansion',label:'Особняк'},
            {value:'manufactureBuilding',label:'Производственное здание'},
            {value:'manufacturingFacility',label:'Производственный цех'},
            {value:'modular',label:'Модульное здание'},
            {value:'multifunctionalComplex',label:'Многофункциональный комплекс'},
            {value:'officeAndHotelComplex',label:'Офисно-гостиничный комплекс'},
            {value:'officeAndResidentialComplex',label:'Офисно-жилой комплекс'},
            {value:'officeAndWarehouse',label:'Офисно-складское здание'},
            {value:'officeAndWarehouseComplex',label:'Офисно-складской комплекс'},
            {value:'officeBuilding',label:'Офисное здание'},
            {value:'officeCenter',label:'Офисный центр'},
            {value:'officeComplex',label:'Офисный комплекс'},
            {value:'officeIndustrialComplex',label:'Офисно-производственный комплекс'},
            {value:'officeQuarter',label:'Офисный квартал'},
            {value:'old',label:'Старый фонд'},
            {value:'other',label:'Другое'},
            {value:'outlet',label:'Аутлет'},
            {value:'propertyComplex',label:'Имущественный комплекс'},
            {value:'residentialComplex',label:'Жилой комплекс'},
            {value:'residentialHouse',label:'Жилой дом'},
            {value:'shoppingAndBusinessComplex',label:'Торгово-деловой комплекс'},
            {value:'shoppingAndCommunityCenter',label:'Торгово-общественный центр'},
            {value:'shoppingAndEntertainmentCenter',label:'Торгово-развлекательный центр'},
            {value:'shoppingAndWarehouseComplex',label:'Торгово-складской комплекс'},
            {value:'shoppingCenter',label:'Торговый центр'},
            {value:'shoppingComplex',label:'Торговый комплекс'},
            {value:'specializedShoppingCenter',label:'Специализированный торговый центр'},
            {value:'standaloneBuilding',label:'Отдельно стоящее здание'},
            {value:'technopark',label:'Технопарк'},
            {value:'tradeAndExhibitionComplex',label:'Торгово-выставочный комплекс'},
            {value:'tradingHouse',label:'Торговый дом'},
            {value:'tradingOfficeComplex',label:'Торгово-офисный комплекс'},
            {value:'warehouse',label:'Склад'},
            {value:'warehouseComplex',label:'Складской комплекс'}

          ]"
          field_="TIPZD"
          tip_="select"
          width_label="170px"
          width_input="100%"
          v-bind:value="_test.BUILDS[this.indexbuild].TIPZD"
          v-bind:field_ob="_test.BUILDS[this.indexbuild]"
          label='Тип здания'>
      </rent-select>
      <rent-select
          v-bind:items="[
            {value:'A',label:'A'},
            {value:'A+',label:'A+'},
            {value:'B',label:'B'},
            {value:'B-',label:'B-'},
            {value:'B+',label:'B+'},
            {value:'C',label:'C'},
          ]"
          field_="KLASS"
          tip_="list"
          width_label="170px"
          width_item="40px"
          v-bind:value="_test.BUILDS[this.indexbuild].KLASS"
          v-bind:field_ob="_test.BUILDS[this.indexbuild]"
          label='Класс здания'>
      </rent-select>
      <rent-land
          label='Участок'
          width_label="170px"
          field_="LAND"
          v-bind:value="_test.BUILDS[this.indexbuild].LAND"
          v-bind:field_ob="_test.BUILDS[this.indexbuild]"
      >

      </rent-land>
      <rent-select
          v-bind:items="[
            {value:'operational',label:'Действующее'},
            {value:'project',label:'Проект'},
            {value:'underConstruction',label:'Строящееся'},
          ]"
          field_="StatusType"
          tip_="list"
          width_label="170px"
          v-bind:value="_test.BUILDS[this.indexbuild].StatusType"
          v-bind:field_ob="_test.BUILDS[this.indexbuild]"
          label='Категория'>
      </rent-select>

      <div style="margin-top: 12px; display: flex;justify-content: space-around;">
        <RentVentilationType
            field_="VentilationType"
            v-bind:value="_test.BUILDS[this.indexbuild].VentilationType"
            v-bind:field_ob="_test.BUILDS[this.indexbuild]"
        ></RentVentilationType>

        <RentConditioningType
            field_="ConditioningType"
            v-bind:value="_test.BUILDS[this.indexbuild].ConditioningType"
            v-bind:field_ob="_test.BUILDS[this.indexbuild]"
        ></RentConditioningType>
      </div>
    </div>
    <rent-save></rent-save>

  </div>
</template>

<script>
// @ is an alias to /src
import rentModal from "@/components/ui/rent-modal";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import RentSelect from "@/components/ui/rent-select";
import RentInput from "@/components/ui/rent-input";
import store from "@/store";
import RentSave from "@/components/ui/rent-save";
import RentLand from "@/components/ui/rent-land";
import RentVentilationType from "@/components/ui/rent-VentilationType";
import RentConditioningType from "@/components/ui/rent-ConditioningType";
export default {
  name: 'Home',
  data() {
    return {
      show:false,
      indexbuild:0,
      indexob:0,
      ob:{},
      build:{}
    }
  },
  components: {
    RentConditioningType,
    RentVentilationType,
    RentLand,
    RentSave,
    RentSelect,
    rentModal,
    RentInput
  },
  computed:{
    /**
     * Импортируем гетеры из хранилища и назначаем им короткие имена для возможности вызова
     **/
    ...mapGetters({
      _rentOb:'rent/get_rentOb',
      _getTIP:'rent/get_TIP',
      _test:'rent/get_test'
    })
  },
  methods:{

  },
  mounted() {

  }

}
</script>
<style scoped>

 .infoSectionHeader {
  background: url('~@/assets/htop.png') repeat-x;
  padding: 4px;
  color: #ffffff;
  font-weight: bolder;
   box-shadow: 0 0 8px rgb(0 0 0 / 80%);

 }
</style>