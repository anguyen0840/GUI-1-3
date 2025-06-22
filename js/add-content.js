$(document).ready(function() {
    function generateTable() {

        var startingR = parseFloat($('#startingR').val());
        var endingR = parseFloat($('#endingR').val());
        var startingC = parseFloat($('#startingC').val());
        var endingC = parseFloat($('#endingC').val());

        if (isNaN(startingR) || isNaN(endingR) || isNaN(startingC) || isNaN(endingC)) {
            $('#error').text("Please enter a valid integer. No characters or strings");
            
            return;
        }

        $('#error').empty();

        if (startingR > endingR || startingC > endingC) {
            $('#error').text('Your starting value inputs has be less than or equal to ending value inputs.');
            return;
        }

        var table = '<table>';
        table += '<tr><th></th>';

        for (var i = startingR; i <= endingR; i++) {
            table += '<th>' + i + '</th>';
        }
        table += '</tr>';

        for (var i = startingC; i <= endingC; i++) {
            table += '<tr><th>' + i + '</th>';
            for (var j = startingR; j <= endingR; j++) {
                table += '<td>' + (i * j) + '</td>';
            }
            table += '</tr>';
        }

        table += '</table>';

        $('#multiplicationTable').html(table);
    }

    $("#tableGrid").validate( {
        parameters: {
            startingR: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endingR: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            startingC: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endingC: {
                required: true,
                number: true,
                range: [-50, 50]
            }
        },
        warningInputs: {
            startingR: {
                required: "Please enter a starting value for the top row of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            },
            endingR: {
                required: "Please enter an ending value for the top row of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            },
            startingC: {
                required: "Please enter a starting value for the first column of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            },
            endingC: {
                required: "Please enter an ending value for the first column of the table",
                number: "Please enter a valid integer. No characters or strings",
                range: "You input needs to fall between a range of -50 and 50"
            }
        },
        submitHandler: function() {
            generateTable();
            return false;
        }
    });
});