/**
* Final Project: vis module
* Joseph R. Tricarico
* Rutgers School of Environmental and Biological Sciences
* 573:462 Advanced Geomatics
* Dr. Richard G. Lathrop
* May 8, 2021
*
* @fileoverview Palettes and visualization parameters
* 
* Palettes from [ColorBrewer](https://colorbrewer2.org/)
* keyed as type + start color + end color + array length
*   starts with d: diverging
*   starts with s: sequential
* 
* by Cynthia A. Brewer, Mark Harrower and The Pennsylvania State University.
* The original ColorBrewer (v1.0) was funded by the NSF Digital Government
* program during 2001-02, and was designed at the GeoVISTA Center at Penn 
* State (National Science Foundation Grant No. 9983451, 9983459, 9983461).
* New version (v2.0) was donated by Axis Maps LLC, 2009 and updated in 2013.
*/
exports.palettes = { // 
  dRdBu7: ['b2182b','ef8a62','fddbc7','f7f7f7','d1e5f0','67a9cf','2166ac'],
  sBuGn7: ['edf8fb','ccece6','99d8c9','66c2a4','41ae76','238b45','005824'],
  shoreChange: ['4d9221', 'c51b7d'], // green, pink
};
/** [Image visualization parameters](https://git.io/JObzs)*/
exports.params = {
  binary: {min:0, max:1},
  binaryDiff: {min:-1, max:1},
  naipTC: {bands: ['red', 'green', 'blue'], min: 0.0, max: 255.0},
  naipFC: {bands: ['nir', 'red', 'green'], min: 0.0, max: 255.0, gamma: [0.95, 1.1, 1]}, // for NAIP
  naipNDWI: {bands: ['ndwi'], min: -0.5, max: 1, palette: exports.palettes.dRdBu7},
  naipNDVI: {bands: ['ndvi'], min: -1, max: 1, palette: exports.palettes.sBuGn7},
  s2Composite: {min: -1, max: 1}, // normalized diff range, depends on what bands we pick
  s2TC: {min: 0.0, max: 3000, bands: ['red', 'green', 'blue']}, //TODO: change to standardized bands
  s2FC: {},
  s2ShoreChange: {min:0, max:1, palette: exports.palettes.shoreChange},
  wet: {palette: 'blue'},
  dry: {palette: 'brown'},
  accretion: {palette: 'green'},
  erosion: {palette: 'red'},
  shoreChange: {palette: exports.palettes.shoreChange},
  shoreChangeLighter: {palette: ['7fbf7b', 'af8dc3']},
};