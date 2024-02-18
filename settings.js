/**
* Final Project: settings module
* Joseph R. Tricarico
* Rutgers School of Environmental and Biological Sciences
* 573:462 Advanced Geomatics
* Dr. Richard G. Lathrop
* May 10, 2021
*
* @fileoverview Settings 
**/
exports.BUFFER_M = 1000; // buffer to apply to NOAA composite shoreline (m)
// exports.CENTER_MAP = true; // center on southern end of LBI?
exports.DEBUG = true; // print debug & informational output to console?
// exports.DO_NAIP_ANALYSIS = true;
exports.DO_SUPERVISED_CLASSIFICATION = true;
// exports.DO_UNSUPERVISED_CLASSIFICATION = true;
exports.EXPORT_MAX_PIXELS = 10e9,
exports.EXPORT_BUFFER_SCALE_M = 60; // meters per pixel on exports
exports.EXPORT_RESULTS_SCALE_M = 10; // meters per pixel on exports

exports.MAX_CLOUD_PROBABILITY = 65; // sets threshold for Sentinel-2 cloud mask
/**
* max reproj err for geom functions (just to buffer shoreline for AOI)
* https =//developers.google.com/earth-engine/guides/best_practices#use-a-non-zero-errormargin
*/ 
exports.MAX_ERROR = ee.ErrorMargin(200, 'meters');
exports.PARALLEL_SCALE = 2; // A scaling factor used to limit memory use
// exports.SHOW_CHARTS = true;
exports.STRATIFIED_SAMPLE_POINTS = 90; // changed for debug
exports.TRAINING_PIXELS = 100; // changed for debug
exports.TREES = 10; // for random forest
exports.YEAR_1 = '2015'; // first year to compare (YYYY-01-01 to YYYY-12-31 UTC)
exports.YEAR_2 = '2019'; // second year to compare (YYYY-01-01 to YYYY-12-31 UTC)