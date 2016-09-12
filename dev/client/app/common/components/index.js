import angular from 'angular';
import Nav from './nav/index';

const Common = angular
	.module('common', [
		Nav
	])
	.name

export default Common;