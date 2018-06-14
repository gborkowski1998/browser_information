"use strict";

//It will refresh content every time window was changed
window.addEventListener('load', info);
window.addEventListener('resize', info);

function info () {
    const element = document.querySelectorAll(".__information");

    const width = window.innerWidth || 
    document.documentElement.clientWidth || 
    document.body.clientWidth;

    const height = window.innerHeight || 
    document.documentElement.clientHeight || 
    document.body.clientHeight;

    if (navigator.geolocation) {
       const position = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        element[0].textContent = "Your browser doesn't allow it";
    }

    function showPosition (position) {
        element[0].innerHTML = "Your position:<br> Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
    }

    const text = ['',
    {
        name: "Window width: ",
        size: width,
        add: " px"
    },
    {
        name: "Window height: ",
        size: height,
        add: " px"
    },
    {
        name: "Screen width: ",
        size: screen.width,
        add: " px"
    },
    {
        name: "Screen height: ",
        size: screen.height,
        add: " px"
    },
    {
        name: "Avaliable screen width: ",
        size: screen.availWidth,
        add: " px"
    },
    {
        name: "Avaliable screen height: ",
        size: screen.availHeight,
        add: " px"
    },
    {
        name: "Toolbar height ",
        size: (screen.height - screen.availHeight),
        add: " px"
    },
    {
        name: "Screen color depth: ",
        size: screen.colorDepth,
        add: " bit"
    },
    {
        name: "Screen pixel depth: ",
        size: screen.pixelDepth,
        add: " bit"
    },
    {
        name: "",
        size: navigator.cookieEnabled ? "Cookies enabled: Yes":"Cookies enabled: No",
        add: ""
    },
    {
        name: "Browser name: ",
        size: navigator.appName,
        add: ""
    },
    {
        name: "Browser code name: ",
        size: navigator.appCodeName,
        add: ""
    },
    {
        name: "Browser product name: ",
        size: navigator.product,
        add: ""
    },
    {
        name: "Browser user agent: ",
        size: navigator.userAgent,
        add: ""
    },
    {
        name: "Browser platform: ",
        size: navigator.platform,
        add: ""
    },
    {
        name: "Browser language: ",
        size: navigator.language,
        add: ""
    },
    {
        name: "Browser languages: ",
        size: navigator.languages,
        add: ""
    },
    {
        name: "",
        size: navigator.javaEnabled() ? "Java enabled: Yes":"Java enabled: No",
        add: ""
    },
    {
        name: "Browser compilation: ",
        size: navigator.productSub,
        add: ""
    },
    {
        name: "Logical processors: ",
        size: navigator.hardwareConcurrency,
        add: ""
    }
    ]

    for(var i = 1; i < text.length; i++){
        element[i].textContent = text[i].name + text[i].size + text[i].add;
    }
}