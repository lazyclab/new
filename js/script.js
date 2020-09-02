$(document).ready(function() {
    let myRow_1 = $("#rows-1");
    let myRow_2 = $("#rows-2");
    let myRow_3 = $("#rows-3");
    let myRow_4 = $("#rows-4");
    let myRow_5 = $("#rows-5");
    let promise = $.ajax({
        url: "https://reqres.in/api/unknown?per_page=12",
        test: 1,

    }).then(function(reslut) {
        let resultData = reslut.data;
        console.log(resultData);
        for (row of resultData) {
            $(myRow_1).append(`<div class='rows__item id'>${row.id}</div>`);
            $(myRow_2).append(`<div class='rows__item name'>${row.name}</div>`);
            $(myRow_3).append(`<div class='rows__item year'>${row.year}</div>`);
            $(myRow_4).append(`<div class='rows__item color'>${row.color}</div>`);
            $(myRow_5).append(`<div class='rows__item value'>${row.pantone_value}</div>`);

        }

        let checkbox_id = $('#bar-id');
        let checkbox_name = $('#bar-name')
        let checkbox_year = $('#bar-year')
        let checkbox_color = $('#bar-color')
        let checkbox_value = $('#bar-value')
        $(checkbox_id).on('click', e => {
            $(".bar__id").addClass('active')
        })
        $(checkbox_name).on('click', e => {
            $(".bar__name").addClass('active')
        })
        $(checkbox_year).on('click', e => {
            $(".bar__year").addClass('active')
        })
        $(checkbox_color).on('click', e => {
            $(".bar__color").addClass('active')
        })
        $(checkbox_value).on('click', e => {
            $(".bar__value").addClass('active')
        })
        $('.column-1__btr').on('click', e => {
            $(".bar__item").removeClass('active')
            $(".myCheckBox").prop('checked', true);
        })

    }).catch(function(err) {
        console.log("error", err);
    })
});