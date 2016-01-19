/**
 * Google Image Chart URL Generator
 * @author: Carl-Fredrik Herö, Elvenite AB <carl-fredrik.hero@elvenite.se>
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

  function Chart(options){
    options = options || {};
    this.VERSION = '0.2';
    this.url = 'https://chart.googleapis.com/chart?';
    this.data = [];
    this.colors = [
      '444444', // 0 = gray
      'c52622', // 1 = red
      'c1aa1b', // 2 = yellow
      '45713a', // 3 green
    ];

    this.setOptions(options);
    this.markerOptions = this.getMarkerDefaults();
  }

  Chart.prototype.getDefaults = function(){
    return {
      chs :  '400x100',
      cht :  'bvs',
      chds: 'a',
      chxt: 'x,y'
    };
  };

  Chart.prototype.setOptions = function(options){
    var new_options = this.getDefaults();

    for(var i in options){
      if (options.hasOwnProperty(i)){
        new_options[i] = options[i];
      }
    }

    this.options = new_options;
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
  };

  Chart.prototype.setMarkers = function(data){
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
      option_string.push(i + '=' + encodeURIComponent(this.options[i]));
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