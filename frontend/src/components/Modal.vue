<template>
  <div>
    <b-button @click="showModal">
      <font-awesome-icon :icon="['fas', buttonIcon]" />
      <span style="margin:7px;">{{ buttonText }}</span></b-button
    >

    <b-modal :id="id" centered :title="title">
      <slot> </slot>
      <template v-slot:modal-footer="{ add, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
       
        <b-button v-if="id='editWater'" size="md" variant="success" @click="emitUpdate()">
          Update
        </b-button>
         <b-button v-else size="md" variant="success" @click="emitAdd()">
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
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    buttonIcon: {
      type: String,
      default: ""
    },
    element: {
      type: Object,
      default: null
    }
  },
  methods: {
    showModal() {
      this.$bvModal.show(this.id);
    },
    emitAdd() {
      console.log("emitModal");
      this.$emit("add");
      this.$bvModal.hide(this.id);
    },
    emitUpdate() {
      console.log("[UPDATE] modal emitUpdate()");
      this.$emit("update", this.element);
      this.$bvModal.hide(this.id);
    }
  }
};
</script>
