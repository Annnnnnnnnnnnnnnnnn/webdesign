(function ( $ ) {
    
// Set up hex digit array
    
var hexDigits = new Array     ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
/* Function to convert RGB to HEX */
    
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


$.fn.cycleColors = function(cssProperty,arrayToCycle,milliseconds) {
    
    var jqueryObj = this;
    setInterval(function(){
        
       /* Loop through each color */
       
       for (var i = 0; i < arrayToCycle.length; i++) {
           var rgb = jqueryObj.css(cssProperty);
           console.log(rgb2hex(rgb) + " == "+ arrayToCycle[i]);
           if(rgb2hex(rgb) == arrayToCycle[i]){
               
               if(i == arrayToCycle.length - 1){
                   console.log('Setting css color to',arrayToCycle[0]);
                   jqueryObj.css(cssProperty,arrayToCycle[0]);
                   break;
               }else{
                   console.log('Setting css color to',arrayToCycle[i + 1]);
                   jqueryObj.css(cssProperty,arrayToCycle[i+1]);
                   break;
               }
              
               
           }
       }            
    
    },milliseconds);
        
    return this;
};

$.fn.musicify = function(musicURL,options){
    
        var audioTag = "<audio ";
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            controls: "true",
            loop: "false",
            autoplay: "false",
            width: '100%',
            height: '100%'
        }, options );
        
        if(settings.controls == 'true'){
            audioTag = audioTag + " controls";
        }
        if(settings.loop == 'true'){
            audioTag = audioTag + " loop";
        }
        if(settings.autoplay == 'true'){
            audioTag = audioTag + " autoplay";
        }
 
        // Make the music player
        
        this.html( audioTag + " width='"+ settings.width + "' height='" + settings.height +"' > <source src=" + musicURL +" >Your browser does not support the audio element.</audio>");
        return this;
    
};

$.fn.vidify = function(videoURL,options){
    
        var videoTag = "<video ";
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            controls: "true",
            loop: "false",
            autoplay: "false",
            width: '100%',
            height: '100%'
        }, options );
        
        if(settings.controls == 'true'){
            videoTag = videoTag + " controls";
        }
        if(settings.loop == 'true'){
            videoTag = videoTag + " loop";
        }
        if(settings.autoplay == 'true'){
            videoTag = videoTag + " autoplay";
        }
 
        // Make the music player
        
        this.html( videoTag + " width='"+ settings.width + "' height='" + settings.height +"' > <source src=" + videoURL +" >Your browser does not support the video element.</video>");
        return this;
    
};
    
}( jQuery ));