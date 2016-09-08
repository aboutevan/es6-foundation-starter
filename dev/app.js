import angular from 'angular';
import AppComponent from './app.component';
import common from './common/common';

const myApp = angular
	.module('app', [
		common
	])
	.component('app', AppComponent)
	.name;

export default myApp;
