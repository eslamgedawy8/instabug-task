<template>
  <div class="highlight">
    <input class="highlight__input" type="text" v-model="searchText" />
    <button class="highlight__clear-btn" @click="handleClear">Clear</button>
  </div>
</template>
<script>
export default {
  name: "SearchComponent",
  props: ["employees", "searchString"],
  data() {
    return {
      searchText: "",
      employeesArr: null,
    };
  },
  watch: {
    employees(newVal) {
        this.employeesArr = newVal;
    },
    searchText(str) {
      this.onHighlight(str);
    },
  },
  methods: {
    onHighlight(str) {
      const allEmployees = structuredClone(this.employeesArr);
      // map through the employees and replace the matching text with a span
      const regex = new RegExp(str, "gi");
      const filteredEmpolyees = allEmployees.map((employee) => {
        employee.profile.address = employee.profile.address.replace(regex, (match) => {
          return `<span class="highlight__match">${match}</span>`;
        });
        employee.profile.name = employee.profile.name.replace(regex, (match) => {
          return `<span class="highlight__match">${match}</span>`;
        });
        employee.profile.about = employee.profile.about.replace(regex, (match) => {
          return `<span class="highlight__match">${match}</span>`;
        });
        return employee;
      });
      this.$emit("highlight", filteredEmpolyees, str);
    },
    handleClear() {
      this.searchText = "";
    },
  },
};
</script>