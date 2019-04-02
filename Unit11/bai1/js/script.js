
$(function () {
    $('#add').on('click', function () {
        var input = $('#input').val();
        if (input.trim() == "") {
            alert('Xin hãy nhập thông tin !');
        }
        else {
            $('#content').append(`
            <tr>
                <td class="checkbox"></td>
                <td class="ip">`+ input + `</td>
                <td class="btn"><i class="fa fa-times"></i></td>
            </tr>
            `)
            $('#input').val("");
        }
        $('.checkbox').css("width", "5%");
        $('.checkbox').css("text-align", "center");
        $('.btn').css("width", "5%");
        $('.btn').css("text-align", "center");
    })

    $('body').on('click', '.btn', function () {
        $(this).parent().remove();
    })

    $('body').on('click', 'tr', function () {
        var check = $(this).children('.checkbox').html();

        if (check == "") {
            $(this).children('.checkbox').html('<p class="fa fa-check" ></p>');
            $(this).css('background', 'rgba(191, 191, 191, 1)');
            $(this).css('text-decoration', 'line-through');
            $(this).css('color', '#6c7a89');
        }
        else {
            $(this).children('.checkbox').html("");
            $(this).css('color', 'black');
            $(this).css('text-decoration', 'none');
            $(this).css('background', 'rgba(228, 241, 254, 1)');
        }
    })


    // var td2 = $('body').btn;
    // td2.css("width", "5%");
})