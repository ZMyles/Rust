"use strict"

const nameDisplay = {
  template: `
    <button></button>
    <p></p>
  `,controller: ["nameService", function(nameService){
    const vm = this;
    vm.showName = () => {
      vm.name = nameService.getName();
    };
  }]
}

angular.module("App")
        .component("nameDisplay", nameDisplay);