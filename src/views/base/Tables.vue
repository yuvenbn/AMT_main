<template>
  <CRow class="justify-content-between w-100">
    <CCol>
      <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" class="mb-4">
        <CFormCheck
          type="radio"
          :button="{ color: 'info', variant: 'outline' }"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          label="Engines"
        />
        <CFormCheck
          type="radio"
          :button="{ color: 'info', variant: 'outline' }"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          label="Clients"
          checked
        />
        <CFormCheck
          type="radio"
          :button="{ color: 'info', variant: 'outline' }"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
          label="Drivers"
        />
        <CFormCheck
          type="radio"
          :button="{ color: 'info', variant: 'outline' }"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
          label="Stevedores"
        />
      </CButtonGroup>
    </CCol>
    <CCol ms="2" class="justify-content-end">
      <!-- <CButton as="a"  color="primary" href="#" role="button">ADD</CButton> -->
    </CCol>
  </CRow>

  <!-- The AG Grid component -->
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    :pagination="pagination"
    :paginationPageSize="paginationPageSize"
    :paginationPageSizeSelector="paginationPageSizeSelector"
    style="height: 33rem"
    :class="themeClass"
  >
  </ag-grid-vue>
</template>

<script>
import { ref } from 'vue'
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the grid
import { AgGridVue } from 'ag-grid-vue3' // AG Grid Component
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Clients',
  components: {
    AgGridVue,
  },
   computed: {
    ...mapState(['theme']),
    themeClass() {
      console.log(this.theme);
      return this.theme === 'light' ? 'ag-theme-quartz-dark' : 'ag-theme-quartz';
    },
  },
  setup() {
    // Row Data: The data to be displayed.
    const rowData = ref([
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
      { client: 'Mark Bright', contact: '676 056 785', description: 'None', engine: 'Toyota' },
      { client: 'John Neba', contact: '676 056 785', description: 'None', engine: 'Mercedes' },
    ])

    // Column Definitions: Defines the columns to be displayed.
    const colDefs = ref([
      { field: 'client', flex: 2, filter: true, floatingFilter: true },
      { field: 'contact', flex: 2, filter: true, floatingFilter: true },
      { field: 'description', flex: 2, filter: true, floatingFilter: true },
      { field: 'engine', flex: 2, filter: true, floatingFilter: true },
    ])

    const pagination = true
    const paginationPageSize = 500
    const paginationPageSizeSelector = [20, 50, 100]
    return {
      rowData,
      colDefs,
      pagination,
      paginationPageSize,
      paginationPageSizeSelector,
    }
  },
}
</script>