$(function () {
    $('.accordion').on('click', '.accordion-control', function (e) {
        console.log("Event data", e);
        e.preventDefault();
        console.log("this is ", this);
        $(this)
            .toggleClass('active')
            .next('.accordion-panel')
            .slideToggle(1000);
    });
});
  
  
  
$(function () {
    $('.tab-list').each(function () {         // Find lists of tabs
        var $tabList = $(this);                   // Store this list
        var $tab = $tabList.find('li.active');    // Get the active li
        var $link = $tab.find('a');            // Get its link
        var $tabID = $link.attr('href');        //ex. #tab1
        var $panel = $($tabID);    // Get active panel
        $tabList.on('click', '.tab-control', function (e) { // Click tab
            e.preventDefault();                  // Prevent link
            var $currentLink = $(this);                 // Store current link
            var idTheHardWay = $(this).attr('href').slice(1); //this is how you do it if it's not an anchor tag
            var id = this.hash;                  // Get clicked tab
            if (id && !$currentLink.is('.active')) {    // If not active
                $tabList
                    .next('.tab-panel-wrapper')
                    .find('div.active')
                    .removeClass('active');
                $tab.removeClass('active');        // tab inactive
                $(id).addClass('active'); // Make new panel and
                $tab.parent().addClass('active'); // tab active 
            }
        });
    });
});
  