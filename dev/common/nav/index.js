import angular from 'angular';
import NavComponent from './nav.component';

const Nav = angular
	.module('nav', [])
	.component('nav', NavComponent)
	.name;

export default Nav;
