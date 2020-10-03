$(document).ready(function () {
    init()



    function init() {
        let url = "https://api.covid19api.com/summary"

        $.get(url, function (data) {
            console.log(data.Countries[99]);

            data = `
            
            <td class="text-center">${data.Countries[99].NewConfirmed}</td>;
            <td class="text-center">${data.Countries[99].NewDeaths}</td>;
            <td class="text-center">${data.Countries[99].NewRecovered}</td>;

            `

            $('#data').html(data);
        })
    }
})