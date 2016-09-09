import angular from 'angular';
import AppComponent from './app.component';
import common from './common/common';

const app = angular
	.module('app', [
		common
	])
	.component('app', AppComponent)
	.name;

export default app;
