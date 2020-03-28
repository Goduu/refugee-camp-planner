<template>
  <div> 
    <b-modal id="editWater" centered title="Edit Water Source">
      <span style="margin:15px;"> Width</span>

      <div class="input-group mb-3" style="width: 85%; margin-left: 20px;">
        <input
          type="text"
          class="form-control"
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="params.width"
        />
      </div>
      <span style="margin:15px;"> Height</span>

      <div class="input-group mb-3" style="width: 85%; margin-left: 20px;">
        <input
          type="text"
          class="form-control"
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="params.height"
        />
      </div>
      <span style="margin:15px;"> Poistion X</span>

      <div class="input-group mb-3" style="width: 85%; margin-left: 20px;">
        <input
          type="text"
          class="form-control"
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="params.xPos"
        />
      </div>
      <span style="margin:15px;"> Poistion Y</span>
      <div class="input-group mb-3" style="width: 85%; margin-left: 20px;">
        <input
          type="text"
          class="form-control"
          aria-label=""
          aria-describedby="basic-addon1"
          v-model="params.yPos"
        />
      </div>
      <template v-slot:modal-footer="{ update, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->

        <b-button size="md" variant="success" @click="updateWater()">
          Update
        </b-button>
        <b-button size="md" variant="danger" @click="cancel()">
          Cancel
        </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Ping",
  components: {},
  watch: {
    element: function (newVal) {
      console.log("element change", this.element);
      if (newVal) {
        this.params.width = newVal[0].width;
        this.params.height = newVal[0].height;
        this.params.xPos = newVal[0].x;
        this.params.yPos = newVal[0].y;
      }
    }
  },
  props: {
    element: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      params: {
        width: null,
        height: null,
        type: "circle",
        xPos: null,
        yPos: null,
        color: "#006FE6",
        tooltipText: "Water"
      },
    };
  },
  methods: {
    updateWater() {
      console.log("[UPDATE] AddWaterSource updateWater()");
      this.$emit("updateWater", this.element);
      this.$bvModal.hide("editWater");
    },
  }
};
</script>
