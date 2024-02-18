/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var bufferMask = ee.Image("users/jrt/final/bufferMask"),
    noaaMask = ee.Image("users/jrt/final/noaaMask"),
    bufferedShoreline = ee.FeatureCollection("users/jrt/final/bufferedShoreline");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/**
* Final Project: sandbox module
* Joseph R. Tricarico
* Rutgers School of Environmental and Biological Sciences
* 573:462 Advanced Geomatics
* Dr. Richard G. Lathrop
* May 10, 2021
* 
* @fileoverview A place to visualize/experiment with saved assets
*               This is also where the analysis samples are generated.
* 
**/
var vis = require('users/jrt/gee:final/vis.js');

// import assets not in imports section
var SUFFIX = '_0509_0135'; //MMdd_hhmm
var classified1 = ee.Image('users/jrt/classified1' + SUFFIX);
var classified2 = ee.Image('users/jrt/classified2' + SUFFIX);
var changeSup = ee.Image('users/jrt/changeSup' + SUFFIX);
// var changeSupUnmasked = ee.Image('users/jrt/changeSupUnmasked' + SUFFIX);

// show assets so we know what we're working with
Map.addLayer(noaaMask, {palette: 'blue'}, 'noaaMask', false);
Map.addLayer(bufferMask, {palette: 'yellow'}, 'bufferMask', false);
Map.addLayer(classified1, vis.params.binary, 'classified1', false);
Map.addLayer(classified2, vis.params.binary, 'classified2', false);
Map.addLayer(changeSup, vis.params.s2ShoreChange, 'changeSup', false);
// Map.addLayer(changeSupUmasked, vis.params.s2ShoreChange, 'changeSupUnmasked');
Map.centerObject(changeSup);

// make animated GIF
var years = ee.ImageCollection([classified1, classified2]);
years.getVideoThumbURL({
    min: 0,
    max: 1,
    dimensions: 1080,
    framesPerSecond: 1,
  },
  function(url) {print("Animated GIF:", url);});

// make histogram chart

var changeSupUnmasked = changeSup.unmask();
Map.addLayer(changeSupUnmasked, {}, 'changeSupUnmasked', false);

// var changeSupSample = changeSupUnmasked.sample({
//   dropNulls: false, // don't get rid of the unchanged places!
//   numPixels: 10e5, // should be enough
//   region: bufferedShoreline,

// });
// print('changeSupSample', changeSupSample);
// var histo = ui.Chart.feature.histogram(
//   changeSupSample, 'classification', 3, 1);
// print('Sup. Classification Sample Histogram', histo);

var changeSupSSampleNoStyle = changeSupUnmasked.stratifiedSample({
  numPoints: 30,
  classBand: 'classification',
  geometries: true,
  region: bufferedShoreline,
});

Export.table.toAsset(changeSupSSampleNoStyle, "changeSupSSampleNoStyle");

var palette = ee.List(['red', 'gray', 'green']);
changeSupSSample = changeSupSSampleNoStyle.map(function(f){
  var index = ee.Number(f.get('classification')).add(1);
  var color = palette.get(index);
  var style = {color: color};
  f = f.set('style', style);
  return f;
});

var changeSupSSampleImg = changeSupSSample.style({styleProperty: "style"});

Export.table.toAsset(changeSupSSample, "changeSupSSampleNoStyle");
Export.image.toAsset(changeSupSSampleImg, "changeSupSSampleImg");

print('changeSupSSample3', changeSupSSample);
Map.addLayer(changeSupSSampleImg, {}, 'changeSupSSampleImg', false);


// var histo = ui.Chart.feature.histogram(
//   changeSupSSample, 'classification', 3, 1);
// print('Sup. Classification Stratified Sample Histogram', histo);
// Map.addLayer(changeSupSSample.draw(), {color: 'red'}, 'changeSupSSample');