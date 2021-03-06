startTime = ""
endTime = ""

times = []
for(var i = 0; i < 24; ++i) {
    for(var j = 0; j < 60; j += 15) {
        times.push(zeroPad(i, 2) + ":" + zeroPad(j, 2));
    }
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

        function joinRide(id, name) {
            $.ajax({
                url: "/api/v1/create/passenger",
                type: "POST",
                data: { carId: id, name: name },
                error: function(msg) {
                    console.log(msg);
                },
                success: function(msg) {
                    console.log(msg);
                    location.reload()
                }
            });
        }
        function leaveRide(id) {
            $.ajax({
                url: "/api/v1/remove/passenger",
                type: "POST",
                data: { id: id },
                error: function(msg) {
                    console.log(msg);
                },
                success: function(msg) {
                    console.log(msg);
                    location.reload()
                }
            });
        }
        function deleteRide(id, eventId) {
            $.ajax({
                url: "/api/v1/remove/ride",
                type: "POST",
                data: { id: id },
                error: function(msg) {
                    console.log(msg);
                },
                success: function(msg) {
                    console.log(msg);
                     location = "/edit/event/" + eventId;
                }
            });
        }
        function removeEvent(id) {
            $.ajax({
                url: "/api/v1/remove/event",
                type: "POST",
                data: { eventId: id },
                error: function(msg) {
                    console.log(msg);
                },
                success: function(msg) {
                    console.log(msg);
                     location = "/list/event";
                }
            });
        }
    function submit_createRide(id, name) {
        startTime_d = zeroPad(startTime.getFullYear(), 4) + "-" + zeroPad(startTime.getMonth() + 1, 2)
        + "-" + zeroPad(startTime.getDate(), 2) + " " + zeroPad(startTime.getHours(), 2) + ":"
        + zeroPad(startTime.getMinutes(), 2);

        endTime_d = zeroPad(endTime.getFullYear(), 4) + "-" + zeroPad(endTime.getMonth() + 1, 2)
        + "-" + zeroPad(endTime.getDate(), 2) + " " + zeroPad(endTime.getHours(), 2) + ":"
        + zeroPad(endTime.getMinutes(), 2);

            $.ajax({
                url: "/api/v1/create/ride",
                type: "POST",
                data: {
                    eventId: id,
                    comments: $('#comments').val(),
                    driverName: name,
                    capacity: $('#capacity').val(),
                    departureTime: startTime_d,
                    returnTime: endTime_d
                },
                error: function(msg) {
                    console.log(msg);
                },
                success: function(msg) {
                    console.log(msg);
                     location = "/edit/event/" + id;
                }
            });
        }
function submit_createEvent(user) {
    startTime_d = zeroPad(startTime.getFullYear(), 4) + "-" + zeroPad(startTime.getMonth() + 1, 2)
    + "-" + zeroPad(startTime.getDate(), 2) + " " + zeroPad(startTime.getHours(), 2) + ":"
    + zeroPad(startTime.getMinutes(), 2);

    endTime_d = zeroPad(endTime.getFullYear(), 4) + "-" + zeroPad(endTime.getMonth() + 1, 2)
    + "-" + zeroPad(endTime.getDate(), 2) + " " + zeroPad(endTime.getHours(), 2) + ":"
    + zeroPad(endTime.getMinutes(), 2);

console.log(startTime_d + " " + endTime_d);
    $.ajax({
        url: "/api/v1/create/event",
        type: 'POST',
        data: {
            startTime: startTime_d,
            endTime: endTime_d,
            driver: user,
            name: $('#name').val(),
            description: $('#description').val(),
        },
        error: function(msg) {
            console.log(msg);
        },
        success: function(msg) {
            console.log(msg);
            location = "/edit/event/" + msg.id
        }
    });
}
