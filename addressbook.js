$(document).ready(function () {
    $.getJSON(
        'addressbook.json',
        function (data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push("<li data-id='" + val.cell_number + "' data-name = '" + val.firstname + " " + val.lastname + "'>" +
                    "<a href='#'><img src='" + val.img + "'/><h2 class='title'>"
                    + val.firstname + " " + val.lastname + "</h2><p class='position'>" + val.position + "</p></a></li>");
            });

            $('#list').append(items.join(''));
            $('#list').listview('refresh');

            $('#list').children('li').on('click', function () {
                let person = data.find(c => c.cell_number == $(this).data('id'));
                /*let content = "<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow " +
                    "ui-btn-b ui-icon-delete ui-btn-icon-notext ui-btn-right'>Close</a>" +
                    "<div data-role='header' data-theme='a' role='banner' class='ui-header ui-bar-a ui-corner-all ui-shadow'>" +
                    "<h1 class='ui-title' role='heading' aria-level='1'>"
                        + person.firstname + " " + person.lastname+ "</h1>" +
                    "</div>" +
                    "<div data-role='main' class='ui-content'>" +
                    "<h4 class='title'>Position:</h4>&nbsp;&nbsp;" + person.position + "<br/>" +
                    "<h4 class='title'>Phone Numbers:</h4>" +
                    "&nbsp;&nbsp;<span style='margin-right: 10px'>Office:</span><a href='tel:" + person.office_phone_number + "' class='phone-number'" +
                        " data-role='button' data-rel='external'>" + person.office_phone_number + "</a><br/>" +
                    "&nbsp;&nbsp;<span style='margin-right: 10px'>Cell:</span><a href='tel:" + person.cell_number + "' class='phone-number' " +
                        "data-role='button' data-rel='external'>" + person.cell_number + "</a>" +
                    "</div>";
                $("#details").html(content);*/
                $('#title').html(person.firstname + " " + person.lastname);
                $('#position').html(person.position);
                $('#mobile').html(person.cell_number);
                $('#callMobile').attr('href', 'tel:' + person.cell_number);
                $('#phone').html(person.office_phone_number);
                $('#callPhone').attr('href', 'tel:' + person.office_phone_number);
                $('#mail').html(person.mail);
                $('#sendMail').attr('href', 'mailto:' + person.mail);
                $("#details").popup('open', {transition: 'pop'});
            });
        }
    );

    /*$.mobile.document.one("filterablecreate", "#filter", function() {
        $("#filter").filterable( "option", "filterCallback", function( index, searchValue ) {
            console.log("Text: "+ text, ", SearchValue: "+ searchValue);
            return text.toLowerCase().indexOf( searchValue ) === -1;
        });
    });*/
});

/*$(document).one("filterablecreate", "#filter", function() {
    $("#filter").filterable("option", "filterCallback", function (index, searchValue) {
        console.log("Text: " + text, ", SearchValue: " + searchValue);
        return text.toLowerCase().indexOf(searchValue) === -1;
    });
});*/

/*$(document).on('pagecreate', '#main', function(event) {
    $('#list').listview('option', 'filterCallback', defaultSearch);
});

function defaultSearch( text, searchValue ) {
    console.log("Text: "+ text, ", SearchValue: "+ searchValue);
    return text.toLowerCase().indexOf( searchValue ) === -1;
}*/
