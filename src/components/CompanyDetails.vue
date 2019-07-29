<template>
  <div class="companyDetails" v-bind:class="{'is-complete':companyDetails.completed}">
      <table class="detailsTable">
        <tr>
          <th class="companyName">Company Name</th>
          <th>Founding Year</th>
          <th>Employee Count</th>
        </tr>
        <tr>
          <td class="companyName">{{companyDetails.name}}</td>
          <td>{{companyDetails.founding_year}}</td>
          <td>{{companyDetails.employee_count_code}}</td>
        </tr>
      </table>
      <button v-on:click="showCompanyContactDetails" class="btn">View company details</button>
  </div>
</template>

<script>
export default {
  name: "companyDetails",
  props: ["companyDetails"],
  methods: {
    showCompanyContactDetails() {
      this.$router.push({name: 'companyContactDetails', params: {
        'name':this.companyDetails.name,
        'street':this.companyDetails.street,
        'zipcode':this.companyDetails.zipcode,
        'city':this.companyDetails.city
        }});
    }
  }
}
</script>

<style scoped>
  .companyDetails {
    background: #f4f4f4;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px #ccc solid;
    height: 150px;
  }

  .detailsTable {
    width:100%;
    text-align: left;
  }

  .companyName {
   width: 50%;
  }
  .btn {
    border: none;
    background: grey;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    float: right;
    text-decoration: none;
    margin-top: 45px;
  }
</style>

