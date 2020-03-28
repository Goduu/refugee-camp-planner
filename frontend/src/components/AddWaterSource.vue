<template>
  <div>
    <b-button @click="showModal">
      <font-awesome-icon :icon="['fas', 'hand-holding-water']" />
      <span style="margin:7px;">Add</span></b-button
    >

    <b-modal id="addWater" centered title="Add Water Source">
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
      <b-form-group label="Form type" style="width: 85%; margin-left: 20px;">
        <b-form-checkbox-group
          v-model="params.type"
          :options="['Circle', 'Retangle']"
          name="type"
        ></b-form-checkbox-group>
      </b-form-group>
      <template v-slot:modal-footer="{ add, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->

        <b-button size="md" variant="success" @click="addWater()">
          Add
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
  components: {
  },
  watch: {
    element: (val, newVal) => {
      if (newVal) {
        this.params.width = newVal.width;
        this.params.height = newVal.height;
        this.params.xPos = newVal.x;
        this.params.yPos = newVal.y;
      }
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
      element: null
    };
  },
  methods: {
    addWater() {
      console.log("Add Water");
      this.$emit("addWater", this.params);
      this.$bvModal.hide("addWater");
    },
    showModal() {
      this.$bvModal.show("addWater");
    },
    
  }
};
</script>
