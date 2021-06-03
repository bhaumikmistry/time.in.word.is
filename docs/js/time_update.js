console.log("time_update!");

const get_time = function() {
    const time = new TimeFactory();
    return time.timeInWord
}

const update = function() {
    console.log("update()")
    var element = document.getElementById("show-time");
    const time = get_time();
    console.log(time);
    element.innerHTML = time;

}

update();