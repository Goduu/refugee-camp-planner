<template>
  <div class="container-fluid">
    <h1>Refugees Camp Planning</h1>
    <div class="side-menu">
      <add-water-source style="margin: 20px;" @addWater="addWater"/>
      <edit-water-source :element="updatedElement" @updateWater="updateWater" ref="editWaterRef"/>
    </div>
    <div class="main-content">
      <chart @updateElement="updateElement" ref="chartRef" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chart from "./Chart";
import Modal from "./AddWaterSource";
import EditWaterSource from "./EditWaterSource";

export default {
  name: "Ping",
  components: {
    chart: Chart,
    addWaterSource: Modal,
    editWaterSource: EditWaterSource,
  },

  data() {
    return {
      msg: "",
      area: {
        width: 50,
        height: 140
      },
      population: {
        people: 5000
      },
      chart: null,
      addingPointsDisabled: true,
      updatedElement: null,
    };
  },
  methods: {
    getMessage() {
      const path = "http://localhost:5000/ping";
      axios
        .get(path)
        .then(res => {
          this.msg = res.data;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addWater(params) {
      console.log("Add Water main");
      if (params.type == "Circle") {
        this.$refs.chartRef.addCircle(params);
      } else {
        this.$refs.chartRef.addRectangle(params);
      }
    },
    updateWater(water){
      console.log("[UPDATE] Main updateWater()", );
      this.$refs.chartRef.updateElement(water[0]);
    },
    updateElement(element){
      this.updatedElement = element;
      console.log("[UPDATE] Main updateElement()", );
      this.$bvModal.show('editWater');
    }
  },
  created() {
    this.getMessage();
  },
  mounted() {}
};
</script>
<style scoped>
.side-menu {
  position: absolute !important;
  margin-top: 50px !important;
  background: #b4b5ff;
  height: 100%;
  width: 350px;
  padding-top: 20px;
  left: 0;
  border: 3px solid #352c69 !important;
}
.main-content {
  margin-left: 370px !important;
  margin-top: 55px !important;
}
.main-chart {
  height: 500px;
}
</style>
