"use strict";

const nameForm = {
  template: `
    <input placeholder="Name">
    <button>Save</button>
  `
}


angular.module("App")
        .component("nameForm", nameForm);