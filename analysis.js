/**
* Final Project: analysis module
* Joseph R. Tricarico
* Rutgers School of Environmental and Biological Sciences
* 573:462 Advanced Geomatics
* Dr. Richard G. Lathrop
* May 10, 2021
*
* @fileoverview Matrix for manual accuracy analysis
*/
/**
 * Axis 1 (the rows) of the matrix correspond to the actual values,
 * and Axis 0 (the columns) to the predicted values.
 */
// 0, 1, 2 = erosion, no change, accretion
var array = ee.Array([
    [12,  0,  0],
    [18, 30, 23],
    [ 0,  0,  7],
  ]);
var matrix = ee.ConfusionMatrix(array);
print('Error matrix: ', matrix);
print(
  'Overall accuracy: ',
  matrix.accuracy(),
  "Consumer's accuracy:",
  matrix.consumersAccuracy(),
  "Producer's accuracy:",
  matrix.producersAccuracy(),
  "Kappa:",
  matrix.kappa()
);
// Overall accuracy: 
// 0.544
// Consumer's accuracy:
// [[0.4,1,0.233]]
// Producer's accuracy:
// [[1],[0.422],[1]]
// Kappa:
// 0.316