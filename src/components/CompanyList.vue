<template>
  <div>
    <div v-if="companyDetails.length > 0">
      <div class="companyList" v-bind:key="companyDetails.id" v-for="companyDetails in companyDetails">
        <CompanyDetails v-bind:companyDetails="companyDetails" />
      </div>
    </div>
    <div v-else class="noCompanies">No companies found for the selected filter criteria, please change filters to get products.</div>
  </div>
</template>

<script>
import CompanyDetails from './CompanyDetails.vue';

export default {
  name: "CompanyList",
  components: {
    CompanyDetails
  },
  props: ["companyDetails"]
}
</script>

<style scoped>
.companyList {
    width: 75%;
    float: right;
}
.noCompanies {
    background: #f4f4f4;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px #ccc dotted;
    height: 150px;
    width: 75%;
    float: right;
}
</style>

