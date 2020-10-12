$(document).ready(function() {

	/* NON REPEATING COLOURS */
    setInterval(
        function() {
            let colours = ['#00aeef', '#fff200', '#ec008c'];
            document.querySelectorAll('.random-cmyk').forEach(function(ele) {
                const colIndex = Math.floor(Math.random() * colours.length);
                ele.style.color = colours[colIndex];
                colours.splice(colIndex, 1);
            });
        }, 1000);

    /* REPEATING COLOURS BECAUSE WHO CARES */
    /*let colours = ['#00aeef', '#fff200', '#ec008c']
    setInterval(
        function() {
            var randomColor = Math.floor(Math.random() * colours.length);
            document.querySelectorAll('.random-cmyk').forEach(ele => ele.style.color = colours[Math.floor(Math.random() * colours.length)])
        }, 1000);*/
});