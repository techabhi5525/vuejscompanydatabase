<template>
  <div id="app">
    <div v-if="loading" class="loading">
      <h2>Loading...</h2>
    </div>
    <div v-else>
      <!-- Send all companies detaits in CompanyList component to iterate and display all the companies -->
      <CompanyList v-bind:companyDetails="filteredData" />
      <!-- FilterByCount component willl pass the selected number of employee list and based on that companies list will be filtered -->
      <FilterByCount @number-of-employee = "applyNumberOfEmployeeFilter"/>
        <!-- FilterByYear component willl pass the selected founding year list and based on that companies list will be filtered -->
      <FilterByYear @founding-year = "applyFoundingYearFilter"/>
      </div>
  </div>
</template>

<script>
import CompanyList from '../components/CompanyList';
import FilterByCount from '../components/FilterByCount';
import FilterByYear from '../components/FilterByYear';
//used axios to get data which is a promise-based HTTP client
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    CompanyList,
    FilterByCount,
    FilterByYear
  },
  data() {
    return {
      companyDetails: [],
      filteredData: [],
      employeeCount: [],
      foundingYear: [],
      loading: false
    }
  },
  methods: {
    // Will set number of employee selected in current context and call filterCompanies method to filter company list
    applyNumberOfEmployeeFilter: function(rangeOfEmployeeSelected){
      this.employeeCount = rangeOfEmployeeSelected;
      this.filterCompanies();
    },
    // Will set founding year selected in current context and call filterCompanies method to filter company list
    applyFoundingYearFilter: function(selectedFoundingYear){
      this.foundingYear = selectedFoundingYear;
      this.filterCompanies();
    },
    // filter company list
    filterCompanies: function(){
      // set filteredData to be empty on click of any filter criteria and assign companies accordingly
      this.filteredData = [];
      var employeeCount = this.employeeCount;
      var foundingYear = this.foundingYear;
      var temporaryFilteredCompanies = [];

      //find if number of employee is selected and then filter companies details based on the number of employee list
      if(employeeCount && employeeCount.length > 0){
          temporaryFilteredCompanies = this.companyDetails.filter( (company) =>{
              for(var i = 0; i<employeeCount.length; i++){
                if((company.employee_count_code > 0 && company.employee_count_code < 10 && employeeCount[i] == 1)
                || (company.employee_count_code > 10 && company.employee_count_code < 100 && employeeCount[i] == 2)
                || (company.employee_count_code > 100 && company.employee_count_code < 1000 && employeeCount[i] == 3)
                ||(company.employee_count_code > 1000 && employeeCount[i] == 4)){
                  return true;
                }
              }
            }
          );
      }

      //find if founding year is selected and then filter temporaryFilteredCompanies( only if is present or else filter companyDetails list)
      //based on founding year
      if(foundingYear.length > 0){
        var arrayToFilter = temporaryFilteredCompanies.length>0 ? temporaryFilteredCompanies : this.companyDetails;
        temporaryFilteredCompanies = arrayToFilter.filter( company =>
        {
          for(var i = 0; i<foundingYear.length; i++){
            if((company.founding_year > 2009 && company.founding_year < 2019 && foundingYear[i] == 1)
            || (company.founding_year > 1999 && company.founding_year < 2009 && foundingYear[i] == 2)
            ||(company.founding_year < 1999 && foundingYear[i] == 3)){
              return true;
            }
          }
        }
        );
      }

      // assign temporaryFilteredCompanies only if there are any products
      if(temporaryFilteredCompanies.length > 0){
        this.filteredData  = temporaryFilteredCompanies;
      }

      // if all the filters are unselected then show all the companies
      if(employeeCount.length == 0 && foundingYear.length == 0){
        this.filteredData = this.companyDetails;
      }
    }
  },
  //used created lifecycle hook as it is called synchronously after the instance is created
  created(){
    this.loading = true;
      axios.get("/employeeDetails.json")
      .then((response)  =>  {
        //companyDetails will have a copy of original response data which will beb used to compare or assign while filtering
        this.companyDetails = response.data;

        //this is data which will be sent to components to render and filtered result if any filter is applied
        this.filteredData = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      })
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background-color: lightgray;
  }

  .btn:hover {
    background: #666;
  }
  .loading {
    background: #f4f4f4;
    border-bottom: 1px #ccc solid;
    width: 100%;
    height: 100%;
    position:fixed;
    top:100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>
