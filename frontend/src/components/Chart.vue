<template>
  <div class="main-chart" ref="chartdiv" />
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";

export default {
  data() {
    return {
      container: null,
      elemntIdCounter: 0,
    };
  },
  methods: {
    createChart() {
      // let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

      let container = am4core.create(this.$refs.chartdiv, am4core.Container);
      container.width = 200;
      container.height = 200;
      this.container = container;
    },
    addCircle(params) {
      console.log("Add Circle", params);
      let circle = this.container.createChild(am4core.Ellipse);
      circle.parent = this.container;
      circle.fill = am4core.color(params.color);
      circle.height = params.height;
      circle.width = params.width;
      circle.draggable = true;
      circle.x = params.xPos;
      circle.y = params.yPos;
      circle.tooltipText = params.tooltipText;
      circle.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      circle.id = this.elemntIdCounter;
      circle.events.on("down", () => this.findElement(circle.id));


      this.elemntIdCounter += 1;
    },
    addRectangle(params) {
      console.log("Add Circle", params);
      let rectangle = this.container.createChild(am4core.Rectangle);
      rectangle.parent = this.container;
      rectangle.fill = am4core.color(params.color);
      rectangle.height = params.height;
      rectangle.width = params.width;
      rectangle.draggable = true;
      rectangle.x = params.xPos;
      rectangle.y = params.yPos;
      rectangle.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      rectangle.tooltipText = params.tooltipText;
      rectangle.id = this.elemntIdCounter;
      rectangle.events.on("down", () => this.findElement(rectangle.id));

      this.elemntIdCounter += 1;
    },
    findElement(id){
      console.log("[UPDATE] Chart findElement()", );
      let child = this.container.children.values.filter(v => {
        return v.id == id;
      });
      this.$emit('updateElement', child);
    },
    updateElement(element){
      console.log("[UPDATE] Chart updateElement()", );
      this.container.children.values.map( v =>{
        console.log("v.id",v.id)
        console.log("el.id",element.id)
        if(v.id == element.id){
          v = element;
        }
      })
    }
  },
  mounted() {
    this.createChart();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>
<style scoped>
.main-chart {
  height: 500px;
}
</style>
