<template>
  <ag-grid-vue style="width: 500px; height: 500px;"
                 class="ag-theme-balham"
                 :gridOptions="gridOptions"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  nam: "grid",
  data() {
    return {
      gridOptions: {},
      columnDefs: null,
      rowData: null
    };
  },
  components: {
    "ag-grid-vue": AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
  },
  mounted() {}
};
</script>
<style scoped>

</style>
