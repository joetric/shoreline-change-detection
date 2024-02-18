/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var gsw = ee.Image("JRC/GSW1_2/GlobalSurfaceWater"),
    etopo1 = ee.Image("NOAA/NGDC/ETOPO1"),
    s2 = ee.ImageCollection("COPERNICUS/S2"),
    s2Clouds = ee.ImageCollection("COPERNICUS/S2_CLOUD_PROBABILITY"),
    naip = ee.ImageCollection("USDA/NAIP/DOQQ"),
    counties = ee.FeatureCollection("TIGER/2018/Counties"),
    noaaMedResShoreline = ee.FeatureCollection("users/jrt/noaa/medResShoreline"),
    noaaCompositeShoreline = ee.FeatureCollection("users/jrt/noaa/composite-shoreline"),
    esi = ee.FeatureCollection("users/jrt/noaa/esi_DE_NJ_PA_2014_esil"),
    aoi = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-74.28231257706217, 40.5300478494125],
          [-74.42376155167155, 40.47470410487887],
          [-74.41277522354655, 40.43604084391257],
          [-74.28780574112467, 40.457987587104014],
          [-74.1793157508903, 40.39526359541075],
          [-74.07769221573405, 40.29059365415806],
          [-74.23150080948405, 39.94403145475667],
          [-74.42925471573405, 39.61580782894305],
          [-74.46221370010905, 39.60311189655373],
          [-74.52263850479655, 39.69510465048163],
          [-74.68056697159342, 39.59147191344421],
          [-74.87832087784342, 39.35401427261276],
          [-75.0856878212028, 39.29771157920158],
          [-75.30678767471842, 39.400721690931704],
          [-75.43038386612467, 39.52159094384941],
          [-75.46059626846842, 39.66445399992553],
          [-75.3438665321403, 39.79225114588491],
          [-75.43587703018717, 39.84920811268821],
          [-75.5800725868278, 39.73735908578733],
          [-75.66933650284342, 39.58723870734361],
          [-75.65972346573405, 39.49510249830499],
          [-75.5800725868278, 39.35507615187939],
          [-75.44960994034342, 39.03792245001774],
          [-75.27108210831217, 38.749333591706616],
          [-75.2175237587028, 38.64000615971098],
          [-75.24361628799967, 38.42515395341523],
          [-74.98269099503092, 38.431608852473744],
          [-75.05135554581217, 38.82212568429309],
          [-75.18868464737467, 38.868117613891286],
          [-75.32052058487467, 39.10189397963279],
          [-75.3493596962028, 39.260505709514746],
          [-75.18319148331217, 39.1423792861488],
          [-74.9648382118278, 39.12427031461566],
          [-75.01015681534342, 38.913011256977086],
          [-74.85909480362467, 38.891636870406856],
          [-74.62700862198405, 39.08377460002858],
          [-74.33724421768717, 39.37843341227569],
          [-74.09829158096842, 39.673967726504884],
          [-73.9046575477653, 40.43081437262192],
          [-73.98293513565592, 40.516477195196124]]]),
    studyArea = 
    /* color: #e2bc00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-75.5217668127786, 39.689354342991614],
          [-75.57944503543484, 39.635437913003386],
          [-75.58493819949734, 39.594179322493176],
          [-75.54785934207547, 39.564542606526615],
          [-75.56708541629422, 39.489335565217495],
          [-75.55335250613797, 39.452231702844955],
          [-75.40229049441922, 39.32274360210501],
          [-75.16059127566922, 39.15255915573299],
          [-74.93537154910672, 39.1429740195605],
          [-75.00815597293484, 38.95740492869559],
          [-75.00678268191922, 38.91040220259837],
          [-74.8516007971536, 38.89864665420411],
          [-74.72663131473172, 39.007577970800554],
          [-74.6019321519174, 39.22335060092906],
          [-74.3712192612924, 39.35408465976484],
          [-74.21603737652677, 39.539667518409594],
          [-74.0690952378549, 39.765242615067045],
          [-73.94000588238615, 40.433332817727425],
          [-73.98944435894865, 40.524212041069035],
          [-74.24899636090177, 40.48975509350169],
          [-74.2943149644174, 40.48244376830412],
          [-74.27371559918302, 40.434378105335355],
          [-74.09381447613615, 40.408241040605404],
          [-74.11029396832365, 40.34547065858663],
          [-74.11990700543302, 40.24072343706391],
          [-74.25448952496427, 39.93077384581769],
          [-74.39875315683152, 39.61185176771979],
          [-74.42347239511277, 39.57904730736889],
          [-74.56492136972214, 39.62137273328971],
          [-74.62122630136277, 39.57904730736889],
          [-74.46329783456589, 39.496438346550384],
          [-74.58964060800339, 39.37764847590419],
          [-74.67615794198777, 39.342609262094705],
          [-74.79288767831589, 39.16821438004735],
          [-75.05518626230027, 39.278856578748695],
          [-75.26667307870652, 39.37021738416685],
          [-75.35044383065964, 39.45721767137062],
          [-75.40812205331589, 39.64331977352853],
          [-75.40674876230027, 39.69723005592599]]]),
    barnegatBayRectangle = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-74.22526137496692, 39.87836597082428],
          [-74.22526137496692, 39.769467220101404],
          [-74.08278243209581, 39.769467220101404],
          [-74.08278243209581, 39.87836597082428]]], null, false),
    manualPois = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-74.308093917115, 39.50102996262959],
         [-74.30815829013136, 39.49947358514042],
         [-74.31158177411122, 39.474251205518286],
         [-74.31321255719227, 39.48104186781751],
         [-74.32259620589222, 39.47570856526921],
         [-74.3713474667636, 39.404119477653786],
         [-74.56762855689902, 39.25844489091467],
         [-74.95901649635215, 39.01558477326517],
         [-74.92743080299277, 39.076378324427736]]),
    wet = 
    /* color: #00e6f7 */
    /* shown: false */
    ee.Feature(
        ee.Geometry({
          "type": "GeometryCollection",
          "geometries": [
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.16623191923547,
                    40.487546593971636
                  ],
                  [
                    -74.1646869668429,
                    40.46743787170617
                  ],
                  [
                    -74.11988334745813,
                    40.46913559399504
                  ],
                  [
                    -74.12331657499719,
                    40.48846048369481
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.09464912504602,
                    40.47266149546471
                  ],
                  [
                    -74.06478004545617,
                    40.45450765568302
                  ],
                  [
                    -74.06786995024133,
                    40.47801528813466
                  ],
                  [
                    -74.0932758340304,
                    40.4821935614027
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.0328510293429,
                    40.45934045192111
                  ],
                  [
                    -74.03422432035852,
                    40.43778611164999
                  ],
                  [
                    -74.0115650186007,
                    40.43830872287016
                  ],
                  [
                    -74.01276664823938,
                    40.45999350583135
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.09551372293345,
                    40.10686210693082
                  ],
                  [
                    -74.0942262626063,
                    40.10400639776517
                  ],
                  [
                    -74.0901922202479,
                    40.10492548965935
                  ],
                  [
                    -74.09263839486948,
                    40.10768269083945
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.09525623086802,
                    40.11293419344581
                  ],
                  [
                    -74.0951274848353,
                    40.10896278197073
                  ],
                  [
                    -74.09268131021372,
                    40.109553585136986
                  ],
                  [
                    -74.09306754831186,
                    40.11293419344581
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.06255473855845,
                    40.09727695386582
                  ],
                  [
                    -74.06929244760386,
                    40.0935016085628
                  ],
                  [
                    -74.06615962747446,
                    40.090415518574595
                  ],
                  [
                    -74.05989398721567,
                    40.09474913713699
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.04208411935679,
                    40.10548350367992
                  ],
                  [
                    -74.04208411935679,
                    40.102923166377565
                  ],
                  [
                    -74.03920879129282,
                    40.103415546419136
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.0292095160853,
                    40.102365131355874
                  ],
                  [
                    -74.0294240928065,
                    40.09445367190981
                  ],
                  [
                    -74.02581920389048,
                    40.0956355251216
                  ],
                  [
                    -74.02513255838267,
                    40.10295599182453
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.64834617631385,
                    39.199587170089224
                  ],
                  [
                    -74.65139316575477,
                    39.1954631556408
                  ],
                  [
                    -74.64452671067664,
                    39.195030785267804
                  ],
                  [
                    -74.64115785615394,
                    39.20011928335288
                  ],
                  [
                    -74.64811014192054,
                    39.20083430420423
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.12323144691256,
                    39.78453765774741
                  ],
                  [
                    -74.12336019294527,
                    39.77662234713828
                  ],
                  [
                    -74.11709455268648,
                    39.77708409859553
                  ],
                  [
                    -74.11769536750582,
                    39.784504679175384
                  ]
                ]
              ],
              "geodesic": true,
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.1076893209212,
                    39.790440315481995
                  ],
                  [
                    -74.10350507485796,
                    39.79040733973927
                  ],
                  [
                    -74.10333341348101,
                    39.79263316689663
                  ],
                  [
                    -74.10760349023272,
                    39.79256721749772
                  ]
                ]
              ],
              "geodesic": true,
              "evenOdd": true
            }
          ],
          "coordinates": []
        }),
        {
          "class": 0,
          "system:index": "0"
        }),
    dry = 
    /* color: #e7c285 */
    /* shown: false */
    ee.Feature(
        ee.Geometry({
          "type": "GeometryCollection",
          "geometries": [
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.25000753965271,
                    40.46179962241032
                  ],
                  [
                    -74.25020065870179,
                    40.461587386291995
                  ],
                  [
                    -74.24990025129212,
                    40.4613914754338
                  ],
                  [
                    -74.24972858991516,
                    40.461587386291995
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.27246261140188,
                    40.453745053312005
                  ],
                  [
                    -74.27334237595876,
                    40.45335318528543
                  ],
                  [
                    -74.27201200028738,
                    40.45134482578102
                  ],
                  [
                    -74.2708103706487,
                    40.45183467509724
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.13903710735775,
                    40.45652395066748
                  ],
                  [
                    -74.13794276607968,
                    40.454009528440004
                  ],
                  [
                    -74.13418767345883,
                    40.45484223713095
                  ],
                  [
                    -74.13562533749081,
                    40.4569811082358
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.03706302408091,
                    40.099771849727865
                  ],
                  [
                    -74.03792133096567,
                    40.095734011962776
                  ],
                  [
                    -74.03465976480356,
                    40.09501177181751
                  ],
                  [
                    -74.03315772775522,
                    40.09934509771059
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.06216890752886,
                    40.087806369884085
                  ],
                  [
                    -74.06015188634966,
                    40.08439167851156
                  ],
                  [
                    -74.05023844183061,
                    40.08803619872792
                  ],
                  [
                    -74.05225546300981,
                    40.09214015457324
                  ],
                  [
                    -74.06315596044634,
                    40.08911966711104
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.63616367916492,
                    39.22957769590049
                  ],
                  [
                    -74.63908192257313,
                    39.22532246251441
                  ],
                  [
                    -74.63358875851063,
                    39.22233034706442
                  ],
                  [
                    -74.63032719234852,
                    39.22612033842639
                  ],
                  [
                    -74.62843891720203,
                    39.22871337249941
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.65435432450721,
                    39.20048510888371
                  ],
                  [
                    -74.65783046739051,
                    39.19682676785086
                  ],
                  [
                    -74.6545689012284,
                    39.19538000769878
                  ],
                  [
                    -74.65081380860755,
                    39.19923796856955
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.66175722138831,
                    39.199620427286256
                  ],
                  [
                    -74.66283010499427,
                    39.19779125806863
                  ],
                  [
                    -74.66068433778236,
                    39.197940919157126
                  ],
                  [
                    -74.66023372666785,
                    39.19925459725271
                  ]
                ]
              ],
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.09389810683896,
                    39.81951595761426
                  ],
                  [
                    -74.09552888992002,
                    39.812758457840346
                  ],
                  [
                    -74.08977823379209,
                    39.812395841509726
                  ],
                  [
                    -74.0890057575958,
                    39.824591886262986
                  ],
                  [
                    -74.0921385777252,
                    39.824558926896835
                  ]
                ]
              ],
              "geodesic": true,
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.09403599206881,
                    39.80583199662207
                  ],
                  [
                    -74.09594572488741,
                    39.79933692382227
                  ],
                  [
                    -74.09197605554537,
                    39.798924779214786
                  ],
                  [
                    -74.09081734125094,
                    39.803507688268894
                  ],
                  [
                    -74.0906671375461,
                    39.806359488287505
                  ]
                ]
              ],
              "geodesic": true,
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.09567715293305,
                    39.788666948829594
                  ],
                  [
                    -74.09627796775239,
                    39.78497347218211
                  ],
                  [
                    -74.09370304709809,
                    39.78429741257834
                  ],
                  [
                    -74.09314514762299,
                    39.788205275092096
                  ]
                ]
              ],
              "geodesic": true,
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -74.09352725732256,
                    39.79184176993648
                  ],
                  [
                    -74.09284061181475,
                    39.79174284467628
                  ],
                  [
                    -74.09236854302813,
                    39.79490838243912
                  ],
                  [
                    -74.09288352715899,
                    39.79490838243912
                  ]
                ]
              ],
              "geodesic": true,
              "evenOdd": true
            }
          ],
          "coordinates": []
        }),
        {
          "class": 1,
          "system:index": "0"
        });
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/**
* Final Project: main module
* Joseph R. Tricarico
* Rutgers School of Environmental and Biological Sciences
* 573:462 Advanced Geomatics
* Dr. Richard G. Lathrop
* May 10, 2021
*
* @fileoverview New Jersey Shoreline Change Analysis
* 
****************************** DATA ATTRIBUTIONS ****************************** 
* 
* Contains modified Copernicus Sentinel data [2015-] processed by Sentinel Hub
* 
* Global 1 Arc-Minute Elevation data from NOAA NCEI
* 
* JRC Global Surface Water Mapping Layers, v 1.2
* Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward, High-
* resolution mapping of global surface water and its long-term changes.  
* Nature 540, 418-422 (2016). (https://www.nature.com/articles/nature20584)
* 
* National Agriculture Imagery Program, USDA Farm Production and 
* Conservation Business Center, Geospatial Enterprise Operations
* 
*******************************************************************************
**/
/** IMPORT REQUIRED CODE from other file(s) */
var logging = require('users/jrt/gee:final/logging.js');
var settings = require('users/jrt/gee:final/settings.js');
var util = require('users/jrt/gee:final/util.js');
var vis = require('users/jrt/gee:final/vis.js');
// set logging level
if(settings.DEBUG) logging.level = 'DEBUG';

/** Set GEOMETRIES */
settings.AOI = studyArea; // barnegatBayRectangle|studyArea
settings.BUFFER_MASK_PATH = 'users/jrt/final/bufferMask'; //...bufferMask|...noaaMask
settings.BASE_SHORELINE = noaaMedResShoreline; // noaaMedResShoreline|noaaCompositeShoreline
settings.TRAINING_REGION = studyArea; // barnegatBayRectangle|studyArea

/** Set NAMESPACE(s) */
var data = {}; // this allows us to dynamically reference data collections
var otsu = {}; // hold variables to calculate NAIP-based NDWI threshold 
var manNDWI = {}; // hold vars to calculate change w/ manual NDWI threshold
var manNIR = {}; // hold vars to calculate change w/ manual NIR threshold

/** Local functions extend util module */
/**
 * Add a pair of layers to the map for YEAR_1 and YEAR_2 in settings dictionary
 * @param {string}  objPrefix - prefix of layer stored in global data dictionary
 * @param {object}  [vp]      - [Image visualization parameters](https://git.io/JObzs) 
 * @param {string}  [name]    - The name of the layer. Defaults to "Layer N".
 * @param {Boolean} [shown]   - A flag indicating whether the layer should be on by default.
 * @returns {void}
 */
util.addTwoLayers = function(objPrefix, vp, name, shown){
  vp = (typeof vp !== 'undefined') ?  vp : {};
  // TODO: pull name from 
  name = (typeof name !== 'undefined') ? name : 'Layer (Unnamed)';
  shown = (typeof shown !== 'undefined') ?  shown : true;
  var i, iStr, newName, eeObj;
  for(i = 1; i < 3; i++){
    iStr = i.toString();
    newName = settings['YEAR_'+ iStr] + ' ' + name;
    eeObj = data[objPrefix + iStr];
    Map.addLayer(eeObj, vp, newName, shown);
  }
};

// Make reusable combined reducer (adapted from Murray et al., 2018)
// https://developers.google.com/earth-engine/guides/reducers_intro#combining-reducers
var superDuperReducer = ee.Reducer.median()
  // .combine(ee.Reducer.percentile(
  //   [0, 10, 25, 75, 90, 100],
  //   // https://en.wikipedia.org/wiki/Quantile#Specialized_quantiles
  //   ['min', 'decile1', 'quartile1', 'quartile3', 'decile9', 'max']), '', true)
  .combine(ee.Reducer.stdDev(), '', true) // args = reducer, no prefix, use same inputs
  // .combine(ee.Reducer.intervalMean(0, 10).setOutputs(['intMean0to10']), '', true)
  // .combine(ee.Reducer.intervalMean(10, 25).setOutputs(['intMean10to25']), '', true)
  // .combine(ee.Reducer.intervalMean(25, 50).setOutputs(['intMean25to50']), '', true)
  // .combine(ee.Reducer.intervalMean(50, 75).setOutputs(['intMean50to75']), '', true)
  // .combine(ee.Reducer.intervalMean(75, 90).setOutputs(['intMean75to90']), '', true)
  // .combine(ee.Reducer.intervalMean(90, 100).setOutputs(['intMean90to100']), '', true)
  .combine(ee.Reducer.intervalMean(10, 90).setOutputs(['intMean10to90']), '', true)
  .combine(ee.Reducer.intervalMean(25, 75).setOutputs(['iqrMean']), '', true)
  ;

/****************************************************************************** 
*************************** GENERAL INPUT PROCESSING **************************   
*******************************************************************************/
/***************************
 * SHORELINE BUFFER / MASK *
 ***************************/
/** MAKE VECTOR FEATURES */
/**
 * Returns input buffered by settings.BUFFER_M
 * @param {ee.Feature} f - feature
 * @returns {ee.Feature}
 */
var bufferShoreline = function(f){
  return f.simplify(settings.MAX_ERROR)
          .buffer(settings.BUFFER_M, settings.MAX_ERROR);
};
// turn shoreline collection into a collection with one feature
// different resolutions available at https://shoreline.noaa.gov/
var baseShoreline = settings.BASE_SHORELINE;
baseShoreline = baseShoreline
  .filterBounds(settings.AOI) // narrow feature collection to features intersecting study area
  // uncomment line below for composite shoreline only!
  // .filterMetadata('F_CODE', 'greater_than', 0) // don't count water boundaries - composite ONLY!
  .union(settings.MAX_ERROR); // returns a collection containing a single feature
// logging.debug('baseShoreline', baseShoreline);
// map over collection (even though it's one feature) and buffer feature
data.bufferedShoreline = baseShoreline.map(bufferShoreline); // FeatureClass

/** GET OR CREATE RASTER MASK */
var makeBufferMask = function(){
  // make the buffer mask if we don't already have it
  data.bufferMask = ee.Image(1).byte().clipToCollection(data.bufferedShoreline);
  Export.image.toAsset({ // export mask for future use
    assetId: 'final/bufferMask',
    image: data.bufferMask,
    description: 'bufferMaskExport' + settings.EXPORT_BUFFER_SCALE_M + 'm',
    maxPixels: settings.EXPORT_MAX_PIXELS,
    region: settings.AOI, // TODO: maybe don't need this?
    scale: settings.EXPORT_BUFFER_SCALE_M,
  });
};
try {
  // usually getInfo is bad but in this case we want to wait and see if this exists+
  // and it is not resource intensive. Alternative we could use evaluate() but that
  // would involve restructuring every piece of code that depends on this image --
  // but that probably would have been the better way to do it.
  ee.Image(settings.BUFFER_MASK_PATH).getInfo();
  data.bufferMask = ee.Image(settings.BUFFER_MASK_PATH);
  logging.debug('found buffer mask:', settings.BUFFER_MASK_PATH);
} catch (error) {
  // this will break the script. Export mask & run again.
  logging.debug('Error getting bufferMask:', error);
  makeBufferMask(); // sets data.bufferMask and makes export task
}
logging.debug("data.bufferMask", data.bufferMask);
// TODO: turn mask into shapes with transparent fill for visualization
// data.bufferMaskOutline = ee.Image().byte().paint({
//   featureCollection: data.bufferedShoreline,
//   color: 1,
//   width: 2,
// });

/************
 * NOAA ESI *
 ************/
/**
 * Below code doesn't work because ESI is a string (There is 5A, 5B, etc)
 * TODO:  enumerate unique ESI values, then assign sequential palette in viz sec
 * to indicate less sensitive -> more sensitive and add color legend for ESI vals
 */ 
// data.esiOutlines = ee.Image().byte().paint({
//   featureCollection: esi,
//   color: 'ESI',
// });

/****************************************************************************** 
******************************* S2 DATA ANALYSIS ******************************   
*******************************************************************************/
/***********************
 * S2 INPUT PROCESSING *
 ***********************/
// declare filter used for multiple datasets
var spaceTimeFilter = ee.Filter.and(ee.Filter.bounds(settings.AOI), 
                                    util.getEntireRangeFilter());
// SENTINEL-2 INPUT PROCESSING //
// Generate a pair of cloud-masked S2 layers
// https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_CLOUD_PROBABILITY
// data.s2CloudFilter = ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20); // NOT USED
// filter by space and time - TODO: maybe the latter is unnecessary?
s2 = s2.filter(spaceTimeFilter).select(
  ["B.+", 'QA60'], // all bands starting with B + 60m QA (bitmask) band
  [ 'coastal', 'blue', 'green', 'red', 'vre5', 'vre6', 'vre7', 'nir', 'nnir',
    'waterVapor', 'cirrus', 'swir1', 'swir2', 'QA60']);
s2Clouds = s2Clouds.filter(spaceTimeFilter);
var s2Join = ee.Join.saveFirst('cloud_mask').apply({
  primary: s2,
  secondary: s2Clouds,
  condition: ee.Filter.equals({leftField: 'system:index', rightField: 'system:index'})
});
// cast Join result as ImageCollection
// https://developers.google.com/earth-engine/tutorials/tutorial_js_02#casting
s2Join = ee.ImageCollection(s2Join);
// mask out pixels not in the shoreline buffer
// TODO: figure out if this is better or worse than doing .clipToCollection(settings.AOI)
s2Join = s2Join.map(function(i){return i.updateMask(data.bufferMask);}); // TODO: see if needed
var s2CloudMasked = s2Join.map(util.maskS2Clouds);
// stir in some covariates
data.s21 = s2CloudMasked.filter(util.getPeriodRangeFilter(1));
data.s22 = s2CloudMasked.filter(util.getPeriodRangeFilter(2));

/************************************************
 * S2: CALCULATE COVARIATES AND MAKE COMPOSITES *
 ************************************************/
/**
 * Returns dictionary of Images, with each image containing related covariates
 * @param {ee.Image} img with standardized band names (see util.indexFunctions)
 * @returns {Object} Object containing ee.Image objects
 */
var getCovariates = function(img){
  var covariates = { // dictionary of ee.Images
    // awei: img.map(util.indexFunctions.applyAWEI)
    //   .reduce(superDuperReducer, settings.PARALLEL_SCALE),
    // ndwi: img.map(util.indexFunctions.applyNDWI)
    //   .reduce(superDuperReducer, settings.PARALLEL_SCALE),
    // mndwi: img.map(util.indexFunctions.applyMNDWI)
    //   .reduce(superDuperReducer, settings.PARALLEL_SCALE),
    swi: img.map(util.indexFunctions.applySWI)
      .reduce(superDuperReducer, settings.PARALLEL_SCALE),
    nir: img.select(['nir'])
      .reduce(ee.Reducer.intervalMean(10, 90).setOutputs(['intMean10to90'])),
    // elevation: etopo1.select(['bedrock']).resample('bicubic'),
  };
  return covariates;
};

/**
 * Returns composite image using all covariates in getCovariates()
 * @param {ee.Image} img
 * @returns {ee.Image}
 */
var getCovariateComposite = function(img){
  var composite, covariates = getCovariates(img);
  for(var key in covariates){
    try { // add band to existing composite image
      composite = composite.addBands(covariates[key]);
    } catch(error) { // composite is not defined
      composite = covariates[key];
    }
  }
  return composite;
};

// Option 1/2: more bands, more resource-intensive
data.s2composite1 = getCovariateComposite(data.s21); // composite for first year
data.s2composite2 = getCovariateComposite(data.s22); // composite for second year
// // Option 2/2: fewer bands, less resource-intensive, for dev purposes
// data.s2composite1 = getCovariates(data.s21).swi; // composite for first year
// data.s2composite2 = getCovariates(data.s22).swi; // composite for second year
util.makeImgExpTasks(data.s2composite1, 'Year1Composite');
util.makeImgExpTasks(data.s2composite2, 'Year2Composite');

/****************************
 * S2: SUP. CLASSIFICATION  *
 ***************************/
var sup = {}; // namespace
var doSupervisedClassification = function() {
  sup.sample = data.bufferMask.sample({ // just to help us pick places to draw
      // region: data.bufferedShoreline,
      numPixels: 400,
      // dropNulls: false,
      geometries: true,
      scale: 10,
      tileScale:4,
  });
  util.makeImgExpTasks(sup.sample, 'supSample');
  logging.debug('sup.sample', sup.sample);

  // S2 composite bands used for prediction
  sup.bands = ['swi_median', 'swi_stdDev', 'swi_iqrMean', 'swi_intMean10to90',
               'nir_intMean10to90',];
  sup.collection = ee.FeatureCollection([wet, dry]);
  sup.training = data.s2composite1 // TODO: find out if this is the best way to do this or if it's even needed
      .sampleRegions({
      collection: sup.collection,
      properties: ['class'], // 0 or 1
      scale: 10,
  });
  sup.classifier = ee.Classifier.smileRandomForest(settings.TREES);
  sup.trainedClassifier = sup.classifier.train(sup.training, 'class', sup.bands);
  data.classified1 = data.s2composite1.classify(sup.trainedClassifier).toInt8();
  data.classified2 = data.s2composite2.classify(sup.trainedClassifier).toInt8();
  data.changeSup = data.classified2.subtract(data.classified1).toInt8(); // -1=erosion; 1=accretion; 0=no change
  data.changeSupUnmasked = data.changeSup; // need unchanged pixels for analysis
  data.changeSup = util.selfMaskNonZero(data.changeSup); // make no-change transparent
  // .toInt8() SHOULD save storage space
  util.makeImgExpTasks(data.classified1, 'classified1');
  util.makeImgExpTasks(data.classified2, 'classified2');
  util.makeImgExpTasks(data.changeSup, 'changeSup');
};
if(settings.DO_SUPERVISED_CLASSIFICATION) doSupervisedClassification();

/************************************
 * S2: UNSUPERVISED CLASSIFICATION  *
 ************************************/
var doUnsupervisedClassification = function(){
  var trainingUnsup = data.s2composite1.sample({ // Make the training dataset
    // region: settings.TRAINING_REGION,
    region: data.bufferedShoreline,
    scale: 10, // largest S2 pixel in use
    seed: 0,
    numPixels: settings.TRAINING_PIXELS,
  });
  // Instantiate the clusterer and train it.
  // selects the best k according to calinski-harabasz criterion analogous to:
  // http://cc.oulu.fi/~jarioksa/softhelp/vegan/html/cascadeKM.html see Calinski, T.
  var clusterer = ee.Clusterer.wekaCascadeKMeans().train(trainingUnsup);
  logging.debug(clusterer);
  // turns out that 0 is water, 1 is land /JT 5/6/21
  // Cluster the composites using the trained clusterer.
  var clusters1 = data.s2composite1.cluster(clusterer);
  var clusters2 = data.s2composite2.cluster(clusterer);
  // logging.debug("clusters1 histogram", util.getHistogram(clusters1, 'cluster', settings.AOI));
  
  // CALCULATE CHANGE
  // TODO: see if it's more efficient to store pixels as byte (unsigned) instead of signed int
  var changeUnsup = clusters2.subtract(clusters1); // -1=erosion; 1=accretion; 0=no change
  var changeUnsupUnmasked = changeUnsup;
  changeUnsup = util.selfMaskNonZero(changeUnsup); // make no-change transparent
  // export unsup shoreline change (erosion/no change/accretion image)
  Export.image.toAsset(changeUnsup, 'unsupChange', 'final/unsupChange');
  Export.image.toDrive({
    description: 's2UnsupShorelineChange',
    folder: 'advgeo',
    image: changeUnsup.toInt8(),
    region: settings.AOI,
    scale: 10,
  });
  
  /** S2: UNSUPERVISED ACCURACY ANALYSIS **/
  // This was not successful (attempted 5/7/21) */
  // stratified sample of points in shoreline buffered study area
  var stratifiedSample = changeUnsupUnmasked.stratifiedSample({
    classBand: 'cluster',
    geometries: true,
    numPoints: settings.STRATIFIED_SAMPLE_POINTS,
    projection: 'EPSG:3857', // [Pseudo-Mercator](http://epsg.io/3857)
    // region: histoSample, // smaller, simple rectangle for faster debug
    region: data.bufferedShoreline,
    scale: 10,
    tileScale: 16,
  });
  if(settings.SHOW_CHARTS) print(stratifiedSample.reduceColumns(ee.Reducer.frequencyHistogram(),['cluster']));
  // export stratified sample
  Export.table.toAsset(stratifiedSample, 'StratifiedSampleExport', 'final/stratifiedSample');
};
if(settings.DO_UNSUPERVISED_CLASSIFICATION) doUnsupervisedClassification();

/****************************************************************************** 
***************************** NAIP DATA ANALYSIS ******************************   
*******************************************************************************/
/*************************
 * NAIP INPUT PROCESSING *
 *************************/
/**
 * newer imagery is collected with an additional near-infrared band (RGBN).
 * RGB asset ids begin with 'n_', NRG asset ids begin with 'c_',
 * RGBN asset ids begin with 'm_'
**/
// use with ee.ImageCollection.map() because this map only takes one arg
var addNaipIndexBands = function(image){
  var indices = ee.Image([
    util.indexFunctions.applyNDWI(image, 'mcfeeters'),
    util.indexFunctions.applyNDVI(image),
  ]);
  return image.addBands(indices);
};
data.naip = naip.filter(spaceTimeFilter)
    .filterMetadata('system:index', 'starts_with', 'm') // limit to four-band images
     // standardize band names to be less ambiguous
    .select(['R', 'G', 'B', 'N'], ['red', 'green', 'blue', 'nir']);
var ndwiBand = data.naip.map(util.indexFunctions.applyNDWI);
// can only add bands to images!
// TODO: don't run median on each band. instead run reducer
data.naip = data.naip.map(addNaipIndexBands);
data.naip1 = data.naip.filterDate(settings.YEAR_1 + '-01-01', settings.YEAR_1 + '-12-31').median();
data.naip2 = data.naip.filterDate(settings.YEAR_2 + '-01-01', settings.YEAR_2 + '-12-31').median();

/**********************
 * NAIP ANALYSIS      *
 **********************/
 var doNaipNdwiAnalysis = function(){
  //First Year
  otsu.dict = util.getHistogram(data.naip1, 'ndwi', data.bufferedShoreline);
  otsu.threshold = util.getOptimalThreshold(otsu.dict, settings.SHOW_CHARTS);
  print('The optimal threshold for ' + settings.YEAR_1 + ' NDWI (Otsu) is', otsu.threshold);
  otsu.land1 = data.naip1.select('ndwi').lt(otsu.threshold);
  //Next Year
  otsu.dict = util.getHistogram(data.naip2, 'ndwi', data.bufferedShoreline);
  otsu.threshold = util.getOptimalThreshold(otsu.dict, settings.SHOW_CHARTS);
  print('The optimal threshold for ' + settings.YEAR_2 + ' NDWI (Otsu) is', otsu.threshold);
  otsu.land2 = data.naip2.select('ndwi').lt(otsu.threshold);
  otsu.diff = util.selfMaskNonZero(otsu.land1.subtract(otsu.land2).rename('change'));
  // Otsu Vis

  // Change analysis w/ manual threshold of NDWI
  settings.manualNDWIThreshold = 0.12; // water has higher NDWI, generally
  manNDWI.land1 = data.naip1.select('ndwi').lt(settings.manualNDWIThreshold);
  manNDWI.land2 = data.naip2.select('ndwi').lt(settings.manualNDWIThreshold);
  manNDWI.diff = manNDWI.land1.subtract(manNDWI.land2).rename('change');
  if(settings.SHOW_CHARTS) {
    print('NDWI Change With Manual Threshold of ' + settings.manualNDWIThreshold,
      'based on NAIP imagery from two time periods',
      '(1=erosion; -1=accretion; 0=no change)',
      ui.Chart.image.histogram({
        image: manNDWI.diff,
        region: data.bufferedShoreline,
        scale: 32,
      }));
  }
  // do mask after chart, otherwise we can't see what stayed at zero!
  manNDWI.diff = util.selfMaskNonZero(manNDWI.diff);
  
  // Change analysis w/ manual threshold of NIR
  settings.manualNIRThreshold = 50; // land reflects more NIR
  manNIR.land1 = data.naip1.select('nir').gt(settings.manualNIRThreshold);
  manNIR.land2 = data.naip2.select('nir').gt(settings.manualNIRThreshold);
  manNIR.diff = manNIR.land1.subtract(manNIR.land2).rename('change');
  manNIR.diff = util.selfMaskNonZero(manNIR.diff);
  // manNIR.connected = manNIR.diff.connectedComponents(ee.Kernel.square(1), 512)
  // manNIR.objSize = manNIR.connected.select('labels').connectedPixelCount({
  //     maxSize: 512, eightConnected: false
  //   });
  // manNIR.objArea = manNIR.objSize.multiply(ee.Image.pixelArea());

  // Map.addLayer(manNIR.connected.randomVisualizer(), {}, 'Change objects');
  // Map.addLayer(manNIR.objSize, null, 'Object n pixels');
  // Map.addLayer(manNIR.objArea,
  //             {min: 0, max: 512, palette: ['0000FF', 'FF00FF']},
  //             'Object area m^2');
  // Map.addLayer(manNIR.connected.select('change'), vis.params.shoreChangeLighter, 'Change (NIR-Man-Connected)');  
};
if(settings.DO_NAIP_ANALYSIS) doNaipNdwiAnalysis();

/****************************************************************************** 
************************** VISUALIZATION & EXPORTS ****************************   
*******************************************************************************/
/*******************************************************************
 * HELPER FUNCTIONS TO ADD LAYERS - helps keeps code concise later *
 *******************************************************************/
// add NAIP + derived layers
var addNaipLayers = function(){
  var addCompositeLayer = function(){
    var nirCombo = data.naip1.select(['nir'], ['nir1'])
                             .addBands(data.naip2.select(['nir'], ['nir2']));
    var lyrName = [settings.YEAR_1, settings.YEAR_2, settings.YEAR_1]
                  .join('-') + ' NAIP NIR false color composite';
    Map.addLayer(nirCombo, {bands: ['nir1', 'nir2', 'nir1'], min:0, max:100}, lyrName, false);
  };
  util.addTwoLayers('naip', vis.params.naipTC, 'NAIP True Color', false);
  util.addTwoLayers('naip', vis.params.naipFC, 'NAIP False Color', false);
  util.addTwoLayers('naip', vis.params.naipNDWI, 'NAIP NDWI', false);
  util.addTwoLayers('naip', vis.params.naipNDVI, 'NAIP NDVI', false);
  addCompositeLayer();
};
var addNaipDerivedLayers = function() {
  // NDWI with Otsu threshold
  Map.addLayer(otsu.land1.not().selfMask(), vis.params.wet, settings.YEAR_1 + ' Extracted Water (NDWI-Otsu)', false);
  Map.addLayer(otsu.land2.not().selfMask(), {palette: 'cyan'}, settings.YEAR_2 + ' Extracted Water (NDWI-Otsu)', false);
  Map.addLayer(otsu.diff, vis.params.shoreChange, 'Change (NDWI-Otsu): 1=erosion, -1=accretion', false);
  // NDWI with manual threshold
  Map.addLayer(manNDWI.diff, vis.params.shoreChange, 'Change (NDWI-Manual): 1=erosion, -1=accretion', false);
  // NIR with manual threshold
  Map.addLayer(manNIR.diff, vis.params.shoreChangeLighter, 'Change (NIR-Manual): 1=erosion, -1=accretion', false);
};
var addSupLayers = function(){
  util.addTwoLayers('classified', vis.params.binary, 'Supervised Classification', false);
  Map.addLayer(data.changeSup,
    {min:-1, max:1, palette: vis.palettes.shoreChange.reverse()},
    'Shoreline change (from S2 supervised classification)',
    false);
  Map.addLayer(sup.sample, {}, 'Sample points from data.bufferMask', false);
};
var addAllLayers = function(){
  addNaipLayers(); // NAIP composites before any analysis is done
  if(settings.DO_NAIP_ANALYSIS) addNaipDerivedLayers();
  // ADD REFERENCE LAYERS
  Map.addLayer(etopo1.select('bedrock'), null, 'ETOPO1', false);
  Map.addLayer(gsw, null, 'JRC Global Surface Water', false);
  Map.addLayer(data.bufferMask, {palette:'yellow'}, 'final/bufferMask (buffered shoreline)', false);
  // add S2 layers to map
  util.addTwoLayers('s2', vis.params.s2TC, 'S2 RGB', false);
  util.addTwoLayers('s2composite', vis.params.s2Composite, 'S2 Composite', false);
  if(settings.DO_UNSUPERVISED_CLASSIFICATION) {
    Map.addLayer(clusters1.randomVisualizer(), {}, settings.YEAR_1 + ' Clusters', false);
    Map.addLayer(clusters2.randomVisualizer(), {}, settings.YEAR_2 + ' Clusters', false);
    Map.addLayer(changeUnsup,
      {min:-1, max:1, palette: vis.palettes.shoreChange.reverse()},
      'Shoreline change (from S2 unsup. clusters)',
      true);
  }
  if(settings.DO_SUPERVISED_CLASSIFICATION) addSupLayers();

  // Map.addLayer(data.bufferMaskOutline, // TODO show outline only
  //             {palette: 'yellow'},
  //             'Study Area (NOAA Composite Shoreline ±' + settings.BUFFER_M + 'm',
  //             false);
  // NO-FILL VECTOR LAYERS:
  // doesn't work; see TODO in general input processing section above
  // Map.addLayer(data.esiOutlines, {}, '2014 Environmental Sensitivity Index DE/NJ/PA');
  // does work; this is the original vector asset
  Map.addLayer(esi, {}, '2014 Environmental Sensitivity Index DE/NJ/PA', false);
  Map.addLayer(data.bufferedShoreline, {}, 'bufferedShoreline vector', false);
  Map.addLayer(noaaCompositeShoreline, {}, 'noaaCompositeShoreline', false);
  Map.addLayer(noaaMedResShoreline, {}, 'noaaMedResShoreline', false);
  // Map.addLayer(stratifiedSample, {}, 'Stratified Sample'); // was not successful
};

/*****************
 * CONFIGURE MAP *
 *****************/
if(settings.CENTER_MAP) Map.setCenter(-74.30815, 39.49947, 13); // southern LBI
Map.setOptions('SATELLITE');
Map.setLocked(false, 7, 16); // prevent zooming to ridiculous scales
addAllLayers();

/***************
 * MORE CHARTS *
 ***************/
if(settings.SHOW_CHARTS){
  print(ui.Chart.image.histogram({ // Print NAIP NDWI Histogram for Year 1
    image: data.naip1.select('ndwi'),
    region: histoSample,
    scale: 8,
    minBucketWidth: 1e-2,
  }));
  // var chart = ui.Chart.feature.histogram(ee.List(naip.features), 'system:time_start');
  // print(chart);
}

/**********************************
 * CREATE MORE BATCH EXPORT TASKS *
 **********************************/
Export.table.toDrive(baseShoreline, 'baseShoreline');
Export.table.toDrive(data.bufferedShoreline, 'bufferedShoreline');
// export CSVs of NAIP image ids with index & acq. time to Drive*
// * acquisition time is a lie
var exportParams = {
  collection: naip,
  description: 'naipNJ',
  fileFormat: 'CSV',
  folder: 'advgeo',
  selectors: ['system:index', 'system:time_start'],
};
Export.table.toDrive(exportParams); // export ImageCollection info
Export.table.toAsset(ee.FeatureCollection(settings.AOI), 'AOI');