/*http://www.script-tutorials.com/animated-jquery-progressbar/*/
$(document).ready(function(){
    jQuery.fn.anim_progressbar = function (aOptions) {
        // def values
        var iCms = 1000;
        var iMms = 60 * iCms;
        var iHms = 3600 * iCms;
        var iDms = 24 * 3600 * iCms;

        // def options
        var aDefOpts = {
            start: new Date(), // now
            finish: new Date().setTime(new Date().getTime() + 300 * iCms), // now + 60 sec
            interval: 1
        }
        var aOpts = jQuery.extend(aDefOpts, aOptions);
        var vPb = this;

        // each progress bar
        return this.each(
            function() {
                var iDuration = aOpts.finish - aOpts.start;

                // calling original progressbar
                $(vPb).children('.pbar').progressbar();

                // looping process
                var vInterval = setInterval(
                    function(){
                        var iLeftMs = aOpts.finish - new Date(); // left time in MS
                        var iElapsedMs = new Date() - aOpts.start, // elapsed time in MS
                            iDays = parseInt(iLeftMs / iDms), // elapsed days
                            iHours = parseInt((iLeftMs - (iDays * iDms)) / iHms), // elapsed hours
                            iMin = parseInt((iLeftMs - (iDays * iDms) - (iHours * iHms)) / iMms), // elapsed minutes
                            iSec = parseInt((iLeftMs - (iDays * iDms) - (iMin * iMms) - (iHours * iHms)) / iCms), // elapsed seconds
                            iPerc = (iElapsedMs > 0) ? iElapsedMs / iDuration * 100 : 0; // percentages
                            var calisan = parseInt(iPerc);
                        var sorgu = parseInt((new Date().getTime())/1000);
                        var sorguToplam = 1877642927;
                        // display current positions and progress
                        $(vPb).children('.percent1').html('<b>'+calisan+' başarılı sorgu</b>  '+sorgu+'/<b>'+sorguToplam+'</b>');
                        $(vPb).children('.elapsed').html(iHours+'h:'+iMin+'m:'+iSec+'s</b>');
                        $(vPb).children('.pbar').children('.ui-progressbar-value').css('width', iPerc+'%');

                        // in case of Finish
                        if (iPerc >= 100) {
                            clearInterval(vInterval);
                            $(vPb).children('.percent1').html('<b>100%</b>');
                            $(vPb).children('.elapsed').html('Yeni Sorgu Hazırlanıyor...');
                            setTimeout(function() { document.location = './'; }, 1500);
                            
                            
                        }
                    } ,aOpts.interval
                );
            }
        );
    }

});