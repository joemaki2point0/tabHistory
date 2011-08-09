//tabHistory.js
//copyright Joseph Maki


//sets the 'current' style on first page load by comparing the window.location 
//to all "historyTab" links
$(document).ready(function(){
    $(".historyTab").each(function(){
        if(this.href == window.location)
            $(this).addClass('current');
    });   
});

window.onpopstate = function(event){
    
    //if no state data set the path to the current window location pathname
    //because this means we have backed up to where we started
    //otherwise set the tabPath to tabData from the state data.
    var tabPath;
    if(event.state == null)
        tabPath = window.location.pathname;
    else
        tabPath = event.state.tabData;
    
    //remove the 'current' class, then step through all historyTab links
    //if the href of the link is either the same as tabPath or window.location
    //give it the 'current' class.
    //we check against window.location to cover for the user backs up the the original
    //null state
    $(".historyTab").removeClass('current');
    $(".historyTab").each(function(){
        if(this.href == tabPath || this.href == window.location)
        {
            $(this).addClass('current');
        }
    });
    
    //make the ajax call and overwrite the html contents of #tabBody
    $.ajax({
        url: tabPath,
        cache: false,
        success: function(html){
            $("#tabBody").html(html);        
        }
    });
};

//If any of these checks fail, the link will open normally and do a full page load
$(".historyTab").live('click', function(e){
       
    var tabTarget = this.href;
     
    //update the item with 'current' class
    $(".historyTab").removeClass('current');
    $(this).addClass('current');
    
    //check support for history, disable it on lieing OS's like iOS
    var histSupport = Boolean(
        window.history && window.history.pushState && window.history.replaceState
        && !((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent)
            || (/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent)));

    if ( histSupport )
    e.preventDefault();
    else
    return true;
    
    //so we dont touch any mouse click events other than unmodified left click.
    if ( e.which > 1 || e.metaKey )
    return true;    
    
    //make the ajax call and overwrite the html contents of #tabBody
    $.ajax({
      url: tabTarget,
      cache: false,
      success: function(html){
        $("#tabBody").html(html);
       
        
          }
     });
     
     //push new history entry with the target link as state data      
    history.pushState({tabData:tabTarget}, null, tabTarget);
       
          
});
//sets the 'current' style on first page load by comparing the window.location 
//to all "historyTab" links
$(document).ready(function(){
    $(".historyTab").each(function(){
        if(this.href == window.location)
            $(this).addClass('current');
    });   
});

window.onpopstate = function(event){
    
    //if no state data set the path to the current window location pathname
    //because this means we have backed up to where we started
    //otherwise set the tabPath to tabData from the state data.
    var tabPath;
    if(event.state == null)
        tabPath = window.location.pathname;
    else
        tabPath = event.state.tabData;
    
    //remove the 'current' class, then step through all historyTab links
    //if the href of the link is either the same as tabPath or window.location
    //give it the 'current' class.
    //we check against window.location to cover for the user backs up the the original
    //null state
    $(".historyTab").removeClass('current');
    $(".historyTab").each(function(){
        if(this.href == tabPath || this.href == window.location)
        {
            $(this).addClass('current');
        }
    });
    
    //make the ajax call and overwrite the html contents of #tabBody
    $.ajax({
        url: tabPath,
        cache: false,
        success: function(html){
            $("#tabBody").html(html);        
        }
    });
};

//If any of these checks fail, the link will open normally and do a full page load
$(".historyTab").live('click', function(e){
       
    var tabTarget = this.href;
     
    //update the item with 'current' class
    $(".historyTab").removeClass('current');
    $(this).addClass('current');
    
    //check support for history, disable it on lieing OS's like iOS
    var histSupport = Boolean(
        window.history && window.history.pushState && window.history.replaceState
        && !((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent)
            || (/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent)));

    if ( histSupport )
    e.preventDefault();
    else
    return true;
    
    //so we dont touch any mouse click events other than unmodified left click.
    if ( e.which > 1 || e.metaKey )
    return true;    
    
    //make the ajax call and overwrite the html contents of #tabBody
    $.ajax({
      url: tabTarget,
      cache: false,
      success: function(html){
        $("#tabBody").html(html);
       
        
          }
     });
     
     //push new history entry with the target link as state data      
    history.pushState({tabData:tabTarget}, null, tabTarget);
       
          
});

