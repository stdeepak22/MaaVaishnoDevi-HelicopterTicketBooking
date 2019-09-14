(function () {
    // let routeIds = {
    //     'Katra-Sanjhichhat (Global Vectra)': '1,7',
    //     'Katra-Sanjhichhat (Himalayan)': '1,8',
    //     'Katra-Sanjhichhat-Katra (Global Vectra)': '3,6',
    //     'Katra-Sanjhichhat-Katra (Himalayan)': '3,10',
    //     'Sanjhichhat-Katra (Global Vectra)': '2,2',
    //     'Sanjhichhat-Katra (Himalayan)': '2,9'
    // }
    document.querySelector(`#DrpRoute option[value="${stProfile.routeName}"]`).setAttribute('selected', 'selected')
    document.querySelector('#DrpRoute').dispatchEvent(new Event('change'));

    setTimeout(function () {
        var intvl = setInterval(function () {
            var btn = document.querySelector('#BtnAccept')
            if (btn.clientHeight > 0) {
                clearInterval(intvl);

                document.querySelector(`#DrpTotalPassenger option[value="${stProfile.passengerCount}"]`).setAttribute('selected', 'selected')
                var dt = stProfile.travelDate;
                if(!dt)
                {
                    let allDt = document.querySelectorAll('#DrpResvDate option');
                    dt = allDt[allDt.length - 1].value;
                }
                document.querySelector(`#DrpResvDate option[value="${dt}"]`).setAttribute('selected', 'selected');

                btn.click();

                // setTimeout(() => {
                //     alert('Select the Timeslot, and nevigate to next screen.  I will handle rest there.');
                // }, 1000);
            }
        }, 250);
    }, 1000);

})()