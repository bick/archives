$(function () {
    "use strict";
    $(".mobiletoggleIcontainer").click(function () {
        "nav" === $(".nav").attr("class") ? ($(".nav").attr("class", "nav nav-mobileopen"), $(".mobiletoggleIcontainer").attr("class", "mobiletoggleIcontainer mobiletoggleIcontainer-closeIconVisible"), $("#mob_menu").attr("class", "nav-MobileContainer nav-MobileContainer-default nav-MobileContainer-visible")) : ($(".nav").attr("class", "nav"), $(".mobiletoggleIcontainer").attr("class", "mobiletoggleIcontainer"), $("#mob_menu").attr("class", "nav-MobileContainer nav-MobileContainer--default"))
    })
});
