/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var s2 = ee.ImageCollection("COPERNICUS/S2"),
    s2Clouds = ee.ImageCollection("COPERNICUS/S2_CLOUD_PROBABILITY"),
    naip = ee.ImageCollection("USDA/NAIP/DOQQ"),
    medResShoreline = ee.FeatureCollection("users/jrt/noaa/medResShoreline"),
    checked = 
    /* color: #ee00ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.MultiPoint(
            [[-74.19371130700725, 40.44166516020278],
             [-74.28204863705406, 40.49499596573195],
             [-74.26745742001305, 40.479981948125186],
             [-74.02346470962677, 40.3752777364408],
             [-74.03793393313626, 40.191147500076404],
             [-74.0437596911166, 40.20439047782488],
             [-74.08265854191731, 40.05210116101715],
             [-74.05393921835781, 40.06715939037786],
             [-74.04598425401183, 40.04931723091911],
             [-74.06155699951118, 40.014150786968365],
             [-74.06606699454377, 39.96274296827075],
             [-74.08662669110741, 39.90636274982561],
             [-74.08991153914776, 39.873848753618454],
             [-74.08247528820462, 39.87115976065524],
             [-74.11232615184879, 39.9314168689105],
             [-74.15453457386822, 39.870328160247475],
             [-74.16116435129346, 39.812993867987615],
             [-74.18760988608634, 39.83133627878145],
             [-74.14469103940945, 39.761462359608906],
             [-74.16727950076886, 39.73854129687184],
             [-74.21725922127956, 39.660854357422615],
             [-74.1896459326791, 39.62573768571084],
             [-74.2923479389467, 39.63290622958205],
             [-74.24365509368089, 39.591256616265866],
             [-74.28792524251192, 39.54942760429168],
             [-74.28954505406654, 39.5624808712545],
             [-74.3469426703828, 39.58809748637104],
             [-74.3437977995746, 39.564270182918555],
             [-74.42402560677601, 39.55076843385406],
             [-74.43784434762074, 39.55622812411606],
             [-74.33018755093984, 39.533371059246235],
             [-74.3128234312144, 39.4795585820957],
             [-74.36287191035531, 39.47364031799662],
             [-74.3480919875002, 39.456889254775945],
             [-74.33225382340137, 39.43690387955597],
             [-74.39341200032379, 39.419653404951575],
             [-74.38883691634005, 39.412241545316505],
             [-74.42369668479618, 39.47114337655801],
             [-74.43921862836537, 39.46222715735373],
             [-74.47872066874737, 39.40227212334766],
             [-74.45486131694024, 39.38581823533038],
             [-74.55507527375927, 39.35617708000282],
             [-74.5313672096138, 39.346536767417454],
             [-74.55452272940545, 39.32699041858024],
             [-74.56373510921011, 39.26512853064196],
             [-74.56639586055289, 39.288847991046],
             [-74.61278279683538, 39.26604049152767],
             [-74.67297771044946, 39.32182365248441],
             [-74.68887088714557, 39.309882638896944],
             [-74.72352294511367, 39.282479157282204],
             [-74.65020909156766, 39.20023302884245],
             [-74.65869890045504, 39.19025099033089],
             [-74.70461564861654, 39.117178618733604],
             [-74.74851416213734, 39.14494323226831],
             [-74.7292335597295, 39.15948765485775],
             [-74.77239290937439, 39.05663669933804],
             [-74.78731478622709, 39.004700329307354],
             [-74.82991993419243, 38.99709948215069],
             [-74.80125194637459, 39.02985996380564],
             [-74.84007142224564, 39.044883680392076],
             [-74.87189313835395, 38.972569044633154],
             [-74.8861839479853, 38.95858797602868],
             [-74.93778234513745, 38.93113206600462],
             [-74.94382719932182, 39.02876644783085],
             [-74.92842889437739, 39.19306576963341],
             [-74.98242593189657, 39.26998647984636],
             [-75.0080630755141, 39.258500174866846],
             [-75.05538042856436, 39.21595029075567],
             [-75.07755556991083, 39.229299358799985],
             [-75.13889970582457, 39.18736932537536],
             [-75.15520753663512, 39.19508591493249],
             [-75.13718309205504, 39.200872801018974],
             [-75.15555085938902, 39.215770176175674],
             [-75.187576502049, 39.3093542733895],
             [-75.2578862524065, 39.31017560522315],
             [-75.34240592498453, 39.363899313978244],
             [-75.29086767159097, 39.375094281767765],
             [-75.28391538582437, 39.376728080421884],
             [-75.32571508666852, 39.393685075711865],
             [-75.33176615020612, 39.39436495755112],
             [-75.39072655000649, 39.45946963876403],
             [-75.52503509131085, 39.47670797697624],
             [-75.45634523894542, 39.51982470852331],
             [-75.43572359443394, 39.517404136895756],
             [-75.44628257816109, 39.573849738647624],
             [-75.54237840797734, 39.633742981951286],
             [-75.55842874672246, 39.61655447005012],
             [-75.57211874153447, 39.61628999805754]]),
        {
          "system:index": "0"
        });
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/**
* Final Project: analysis-heads-up module
* Joseph R. Tricarico
* Rutgers School of Environmental and Biological Sciences
* 573:462 Advanced Geomatics
* Dr. Richard G. Lathrop
* May 10, 2021
* 
* @fileoverview File for digitizing shoreline change accuracy assessment
*               based on difference of two supervised classifications
*/
var settings = require('users/jrt/gee:final/settings.js');
var util = require('users/jrt/gee:final/util.js');
var vis = require('users/jrt/gee:final/vis.js');

var AOI = ee.FeatureCollection('users/jrt/final/studyArea');
var BUFFER_MASK = ee.Image('users/jrt/final/bufferMask');

/***************************
 * BUILD REFERENCE RASTERS *
 ***************************/
var ref = {}; // make namespace for ref layers
var spaceTimeFilter = ee.Filter.and(ee.Filter.bounds(AOI), util.getEntireRangeFilter());

// SENTINEL-2 INPUT PROCESSING //
// Generate a pair of cloud-masked S2 layers
// https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_CLOUD_PROBABILITY
// filter by space and time - TODO: maybe the latter is unnecessary?
s2 = s2.filter(spaceTimeFilter).select(["B[2348]"], ['blue', 'green', 'red', 'nir']);
s2Clouds = s2Clouds.filter(spaceTimeFilter);
var s2Join = ee.Join.saveFirst('cloud_mask').apply({
  primary: s2,
  secondary: s2Clouds,
  condition: ee.Filter.equals({leftField: 'system:index', rightField: 'system:index'})
})//.aside(print, 's2Join');
// cast Join result as ImageCollection
// https://developers.google.com/earth-engine/tutorials/tutorial_js_02#casting
s2Join = ee.ImageCollection(s2Join);
// mask out pixels not in the shoreline buffer
// TODO: discover if updateMask is more efficient than doing clipToCollection
s2Join = s2Join.map(function(i){return i.clipToCollection(AOI);}); // TODO: see if needed
// s2Join = s2Join.map(function(i){return i.updateMask(BUFFER_MASK);}); // TODO: see if needed
var s2CloudMasked = s2Join.map(util.maskS2Clouds)//.aside(print, 's2CloudMasked');
// stir in some covariates
ref.s21 = s2CloudMasked.filter(util.getPeriodRangeFilter(1));
ref.s22 = s2CloudMasked.filter(util.getPeriodRangeFilter(2));

// NAIP INPUT PROCESSING //
naip = naip.select(['.'], ['red', 'green', 'blue', 'nir']);
ref.naip1 = naip.filter(util.getPeriodRangeFilter(1));
ref.naip2 = naip.filter(util.getPeriodRangeFilter(2));

// NOAA SHORELINE VECTOR TO RASTER //
// https://shoreline.noaa.gov/data/datasheets/medres.html
ref.medResShorelineImg = medResShoreline.draw('Aqua');

/*************************
 * BUILD SAMPLING LAYERS *
 *************************/
var SUFFIX = '_0509_0135'; //MMdd_hhmm (export date / time)
var PALETTE = ee.List(['red', 'yellow', 'green']); // classes -1,0,1

var changeSupSSample = ee.FeatureCollection('users/jrt/final/changeSupSSampleNoStyle');
// print('changeSupSSample', changeSupSSample);
// add style property to each feature: have to do this here because couldn't export before with style dictionary
changeSupSSample = changeSupSSample.map(function(f){
  var index = ee.Number(f.get('classification')).add(1); // +1 to shift [-1, 1] range to line up with PALETTE indices
  var color = PALETTE.get(index);
  var style = {color: color};
  f = f.set('style', style);
  return f;
});
// use style property to turn FC into image
var changeSupSSampleImg = changeSupSSample.style({styleProperty: "style"});

// make a 10m square around each point
// probably not geodetically perfect but helps outline Sentinel pixel
var pointSquares = changeSupSSample;
pointSquares = pointSquares.map(function(f){
  return f.buffer(5).bounds();
});
var pointSquaresImg = ee.Image().byte().paint(pointSquares, 0, 2);

/*************
 * BUILD MAP *
 *************/
Map.centerObject(changeSupSSample, 8);
Map.addLayer(ref.s21, vis.params.s2TC, 'S2 RGB Before', false);
Map.addLayer(ref.s22, vis.params.s2TC, 'S2 RGB After', false);
Map.addLayer(ref.s21, vis.params.s2FC, 'S2 NRG Before', false);
Map.addLayer(ref.s22, vis.params.s2FC, 'S2 NRG After', false);
Map.addLayer(ref.naip1, vis.params.naipTC, 'NAIP RGB Before', false);
Map.addLayer(ref.naip2, vis.params.naipTC, 'NAIP RGB After', false);
Map.addLayer(ref.naip1, vis.params.naipFC, 'NAIP NRG Before', false);
Map.addLayer(ref.naip2, vis.params.naipFC, 'NAIP NRG After', false);
Map.addLayer(ref.medResShorelineImg, {}, "NOAA Medium Resolution Shoreline");
Map.addLayer(pointSquaresImg, {palette: ['magenta']}, 'pointSquaresImg');
Map.addLayer(changeSupSSampleImg, {}, 'changeSupSSampleImg');