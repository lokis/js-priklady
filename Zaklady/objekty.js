function Test() {
    // verejne
    this.Verze = '1.0';
    this.Vysledek = 'Vysledek';

    // privatni
    var Mezivysledek = 'Mezi';

    // metody verejne
    this.vratMezivysledek = function() {
        //return this.Mezivysledek  // nefunguje;
        return Mezivysledek;
    };

    // metody privatni
    var privatni = function vratPrivat() {
        return Mezivysledek;
    };
}

var a = new Test();

alert(a.Verze, 'verze');
alert(a.Mezivysledek, 'Mezivysledek');
alert(a.vratMezivysledek(), 'vratMezivysledek');
alert(a.privatni, 'privatni');
alert(a instanceof Test, 'a instanceof Test');


alert('');
alert('---- Ultimatni zapouzdreni -----');

// takto zapouzdruje treba jQuerry
var Ult = function()
{
    this.InterniVerze  = '1.0.13';
    function vratInterniVerzi() {
        return this.InterniVerze;
    };
    //verejne metody
    return {
        Verze : '1.0',
        ZverejniVerzi : function() {
            return vratInterniVerzi();
        }
    };
};

var Ultimatni = Ult();


alert(Ultimatni instanceof Ult, 'Ultimatni instanceof Ult');
alert( Ultimatni.InterniVerze, 'InterniVerze' );
alert( Ultimatni.vratInterniVerzi, 'vratInterniVerzi' );

alert( Ultimatni.Verze, 'Verze' );
alert( Ultimatni.ZverejniVerzi(), 'zverejniVerzi' );



