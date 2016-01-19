/**
 * Google Image Chart URL Generator
 * @author: Carl-Fredrik Herö, Elvenite AB
 * @link: https://github.com/elvenite/GoogleImageChart
 */

(function(global, factory){
  if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = factory(global, true);
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal){

  'use strict';

  function Chart(){
    this.VERSION = '0.1';
    this.url = 'https://chart.googleapis.com/chart?';
    this.data = [];
    this.colors = [
      '444444', // 0 = gray
      'c52622', // 1 = red
      'c1aa1b', // 2 = yellow
      '45713a', // 3 green
    ];

    this.options = this.getDefaults();
    this.markerOptions = this.getMarkerDefaults();
  }

  Chart.prototype.getDefaults = function(){
    return {
      chs :  '200x50',
      cht :  'ls',
      chco: 'aaaaaa',
      chma: '6,6,6,6',
      chds: '0,3'
    };
  };

  Chart.prototype.getMarkerDefaults = function(){
    return {
      type :  'o',
      color :  'aaaaaa',
      size: 12
    };
  };

  Chart.prototype.setData = function(data){
    if (!data || !Array.isArray(data)){
      return;
    }

    this.data = data.map(function(v){
      return parseInt(v);
    });

    this.raw_data = data;

    // set markers
    var markers = [];
    for(var i in this.data){
      var mark = [];
      var v = this.data[i];
      // type
      mark.push(this.markerOptions.type);

      // color
      mark.push(this.colors[v] || this.colors[0]);
       
      // data index (always 0 in this lib)
      mark.push('0');

      // marker index
      mark.push(i);

      // size
      mark.push(this.markerOptions.size);

      markers.push(mark.join(','));
    }

    this.options.chm = markers.join('|');
  };

  Chart.prototype.generate = function() {
    this.chm = '';
    // add data type at the end
    this.chd = 't:' + this.data.join(',');

    this.options.chd = this.chd;

    var option_string = [];

    // generate options string
    for(var i in this.options){
      option_string.push(i + '=' + this.options[i]);
    }

    return this.url + option_string.join('&');
  };

  Chart.prototype.getLastValue = function(){
    if (this.data){
      return this.data[this.data.length-1];
    }

    return 0;
  };

  if (!noGlobal){
    window.Chart = Chart;
  }

  return Chart;
});