$(document).ready(function(){
    let scrollAmount = 0;
    const scrollContainer = $('#videoCarousel');

    $('#next').click(function() {
        scrollContainer.animate({
            scrollLeft: (scrollAmount += 500) // Adjust scroll step size as needed
        }, 'slow');
    });

    $('#prev').click(function() {
        scrollContainer.animate({
            scrollLeft: (scrollAmount -= 500) // Adjust scroll step size as needed
        }, 'slow');
    });
});