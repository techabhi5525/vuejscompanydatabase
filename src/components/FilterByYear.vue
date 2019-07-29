<template>
  <div>
    <section class="filterSection">
        <h4>Founding year</h4>
        <input id="1" type="checkbox" v-on:change="filterSelected" v-model="selectedFoundingYear" value="1"><label> 2009-2019</label><br>
        <input id="2" type="checkbox" v-on:change="filterSelected" v-model="selectedFoundingYear" value="2"><label> 1999-2009</label><br>
        <input id="4" type="checkbox" v-on:change="filterSelected" v-model="selectedFoundingYear" value="3"><label> older</label>
    </section>
  </div>
</template>

<script>
export default {
  name: "FilterByYear",
  methods: {
    filterSelected() {
      this.$emit('founding-year', this.selectedFoundingYear);
    }
  },
  data() {
    return {
      selectedFoundingYear: []
    }
  }
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

