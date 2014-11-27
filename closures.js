function zpracuj() {
    var i, elm;
    for (i=1;i<=2;i++) {
        elm = document.getElementById('tlacitko'+i);
        elm.onclick = function(){ alert(i); }
    }
    i = 30;
}

function zpracuj1() {
    var i;
    for (i=3;i<=4;i++) {
        (function() {
            elm = document.getElementById('tlacitko'+i);
            var j = i;
            elm.onclick = function(){ alert(j); }
        })();
    }
}
function zpracuj2() {
    var i;
    for (i=5;i<=6;i++) {
        (function() {
            var elm = document.getElementById('tlacitko'+i);
            var j = i;
            elm.onclick = function(){ alert(j); }
        })();
    }
}

zpracuj();
zpracuj1();
zpracuj2();

// zkouska pres kolik vnoreni plati uzavery
(function(){
    console.log('a');
    var a = 1;
    (function(){
        var b = 2;
        (function(){
            var c = 3;
                var elm = document.getElementById('tl1');
                elm.onclick = function(){
                    alert(a, 'a');
                    alert(b, 'b');
                    alert(c, 'c');
                };
            c = 30;
        })();
        b = 20;
    })();
    a = 10;
})();

