function doBlogListingMods() {
    var buttns = jQuery('.lotusActionBar.lotusBtnContainer.aria_toolbar .lotusBtn a');    
    //container-fluid
    for (var d = 0; d < buttns.length; d++) {
        if (buttns[d].innerHTML == "New Entry") buttns[d].innerHTML = 'New Blog Entry';
        if (buttns[d].innerHTML == "View All Entries") buttns[d].innerHTML = 'View All Blog Entries';
    }
    jQuery('h4').addClass('bidiAware');
    jQuery(".lotusui30_layout .lotusMain .lotusContent").css("margin-left", '');
    jQuery('#lotusFrame').addClass('container-fluid');
    jQuery('#lotusBanner').parent().addClass('row');
    jQuery('#lotusBanner').addClass('col-lg-12 col-md-12 col-sm-12 col-xs-12');
    jQuery('#lotusTitleBar').addClass('row');
    jQuery('#lotusTitleBar .lotusWrapper').addClass('col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xxs-12');
    jQuery('#lotusMain').addClass('row');
    jQuery('#lotusColLeft').addClass('col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12');
    jQuery('#lotusColRight').addClass('col-lg-3 col-lg-push-6 col-md-3 col-md-push-6 col-sm-6 col-xs-6 col-xxs-12');
    jQuery('#lotusContent').addClass('col-lg-6 col-lg-pull-3 col-md-6 col-md-pull-3 col-sm-12 col-xs-12 col-xxs-12'); 
}