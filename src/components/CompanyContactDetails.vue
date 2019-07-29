<template>
  <div class="companyDetail">
    <!-- Company Name -->
    <div v-if="name">{{name}}</div>
    <div v-else>Company name is missing</div>

    <!-- Company Address -->
    <div v-if="street">{{street}}</div>
    <div v-else>Street is missing</div>

    <div v-if="zipcode">{{zipcode}}</div>
    <div v-else>Zipcode is missing</div>

    <div v-if="city">{{city}}</div>
    <div v-else>City is missing</div>

    <!-- Go back to home page  -->
    <button v-on:click="goBack" class="btn">Back</button>
    </div>
</template>

<script>

export default {
  name: "CompanyContactDetails",
  props:["name", "street", "zipcode", "city"],
  methods: {
  goBack() {
    this.$router.go(-1);
  }
}
}
</script>

<style>

  .companyDetail {
    background: #f4f4f4;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px #ccc dotted;
    height: 150px;
    width: 50%;
    margin: auto;
  }
  .btn {
    border: none;
    background: grey;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    float: right;
    text-decoration: none;
  }
</style>
