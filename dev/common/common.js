import angular from 'angular';
import Nav from './nav/index';

const common = angular
	.module('common', [
		Nav
	])
	.name;

export default common;
