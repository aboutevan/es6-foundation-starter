import angular from 'angular'
import Common from './common/components/index'

const app = angular
	.module('app', [
		Common
	])
	.component('app', [])
	.name;

export default app;