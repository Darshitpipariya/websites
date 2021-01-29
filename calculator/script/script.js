$('document').ready(function () {
    var clearResult=false;
    $('button.number').click(function () {
        if(clearResult){
            $("#result").val('');
            clearResult=false;
        }
        console.log($(this).val());
        var numinput = $(this).val();
        var resultVal = $('#result').val();
        $('#result').val(resultVal + numinput);
    });
    $('#equalButton').click(function () {
        clearResult=true;
        evaluate();
    });
    $('#clearButton').click(function () {
        $("#result").val('');
    });
    $(this).keydown(function (e) {
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            evaluate();
            clearResult = true;
        }
        if(e.keyCode===8){
            var resultVal = $('#result').val();
            $('#result').val(resultVal.slice(0, -1));
        }
        if (numOperationKey.indexOf(e.key)!=-1) {
            console.log('number')
            if (clearResult) {
                $("#result").val('');
                clearResult = false;
            }
            var resultVal = $('#result').val();
            $('#result').val(resultVal + e.key);
        }
    })
    var numOperationKey=["1","2","3","4","5","6","7","8","9","0","+","-","*","/"]
    function evaluate() {
        $('#result').val(eval($('#result').val()));
    }
})