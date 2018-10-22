"use strict";

const nameForm = {
  template: `
    <input placeholder="Name">
    <button>Save</button>
  `,
  controller: ["nameService", function(nameService) {
    const vm = this;
    vm.save = (name) => {
      nameService.setName(name);
    }
  }]
}


angular.module("App")
        .component("nameForm", nameForm);