jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href");
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 700);
        return false;
    });
});

//# sourceMappingURL=index.41b447fa.js.map
