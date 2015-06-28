$('button').click(function(){
    var value = parseInt($(this).attr('data-clipboard-text').replace("U+",''), 16);
    copy(String.fromCodePoint(value));
});

function copy(str) {
    var sandbox = $('#sandbox').val(str).select();
    document.execCommand('copy');
    sandbox.val('');
}

function paste() {
    var result = '',
        sandbox = $('#sandbox').val('').select();
    if (document.execCommand('paste')) {
        result = sandbox.val();
    }
    sandbox.val('');
    return result;
}