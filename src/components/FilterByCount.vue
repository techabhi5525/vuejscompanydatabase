<template>
  <div>
    <section class="filterSection">
        <h4>Number of employees</h4>
        <input id="1" type="checkbox" v-on:change="filterSelected" v-model="rangeOfEmployeeSelected" value="1"><label> 1-10</label><br>
        <input id="2" type="checkbox" v-on:change="filterSelected" v-model="rangeOfEmployeeSelected" value="2"><label> 10-100</label><br>
        <input id="3" type="checkbox" v-on:change="filterSelected" v-model="rangeOfEmployeeSelected" value="3"><label> 100-1000</label><br>
        <input id="4" type="checkbox" v-on:change="filterSelected" v-model="rangeOfEmployeeSelected" value="4"><label> 1000+</label>
    </section>
  </div>
</template>

<script>
export default {
  name: "FilterByCount",
  methods: {
    filterSelected() {
      this.$emit('number-of-employee', this.rangeOfEmployeeSelected);
    }
  },
  data() {
    return {
      rangeOfEmployeeSelected: []
    }
  },
}
</script>

<style scoped>
.filterSection {
    width: 20%;
    background: #f4f4f4;
    padding: 10px;
    margin: 10px;
    border-bottom: 1px #ccc solid;
    height: 150px;
    text-align: left;
}
</style>

