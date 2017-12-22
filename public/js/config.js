requirejs.config({
    baseUrl: '/js',
    paths: {
        'template' : "/js/template/template",
        'jquery' : "jquery-3.1.1.min"
    }
});

require([
	'loadPianoInf',
	'loadOrganInf',
	'loadAccordeonInf',
	'loadBajanInf',
	'loadViolinInf',
	'loadArfaInf',
	'loadValtornaInf',
	'loadTrombon',
	'focusOut'
	], function(loadPianoInf, loadOrganInf, loadAccordeonInf, loadBajanInf, loadViolinInf, loadArfaInf, loadValtornaInf, loadTrombon, focusOut){
	loadPianoInf.pianoInf();
	loadOrganInf.organInf();
	loadAccordeonInf.accordeonInf();
	loadBajanInf.bajanInf();
	loadViolinInf.violinInf();
	loadArfaInf.arfaInf();
	loadValtornaInf.valtornaInf();
	loadTrombon.trombonInf();
	focusOut.focus();
})
