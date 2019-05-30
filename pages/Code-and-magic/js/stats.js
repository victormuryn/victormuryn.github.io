'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_MAX_HEIGHT = 150;
var SPACE_BETWEEN_COLUMNS = 50;

var makeHistogram = function (ctx, fill, times, names, index, maxTime) {
  var xPosition = 120 + index * (HISTOGRAM_WIDTH + SPACE_BETWEEN_COLUMNS);
  var columnHeight = times[index] * HISTOGRAM_MAX_HEIGHT / maxTime;

  ctx.fillStyle = '#000';
  ctx.fillText(times[index], xPosition, 80);
  ctx.fillText(names[index], xPosition, 265);
  ctx.fillStyle = fill;
  ctx.fillRect(xPosition, 90 + (HISTOGRAM_MAX_HEIGHT - columnHeight), HISTOGRAM_WIDTH, columnHeight);
};

var renderCloud = function (ctx, x, y, fill) {
  ctx.fillStyle = fill;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  // Render win cloud
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0,0,0,.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Render cloud text
  ctx.font = '16px PT Mono';
  ctx.textBasingLine = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура, вы победили', 120, 40);
  ctx.fillText('Список результатов:', 120, 56);

  // Render histogram
  var MAX_TIME = 0;

  for (var i = 0; i < times.length; i++) {
    times[i] = Math.round(times[i]);

    if (MAX_TIME < times[i]) {
      MAX_TIME = times[i];
    }
  }

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      makeHistogram(ctx, '#f00', times, names, i, MAX_TIME);
    } else {
      makeHistogram(ctx, 'rgb(0, 0, ' + Math.round(Math.random() * 255) + ')', times, names, i, MAX_TIME);
    }
  }
};
