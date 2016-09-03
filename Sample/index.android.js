'use strict';

var React = require('react');
var {
  AppRegistry,
} = React;

var MainScreen = require('./MainScreen');

AppRegistry.registerComponent('RNViewPager', () => MainScreen);
