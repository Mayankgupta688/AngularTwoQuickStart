"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var employee_list_service_1 = require("./employee/employee-list.service");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.showAlert = function () { alert(this.name); };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h2>This is component Main Page.</h2>\n             <b>Employee List Displayed here.</b><br><br>\n             <employee-list></employee-list><br><br>\n             <shared-component></shared-component>",
        providers: [employee_list_service_1.EmployeeList]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map