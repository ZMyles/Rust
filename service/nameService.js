"use strict"

function nameService() {
  const vm = this;
  vm.getName = () => {
    return vm.name
  };
  vm.setName = (name) => {
    vm.name = name;
    console.log(vm.name);
  }
}

angular.module("App")
        .service("nameService", nameService);