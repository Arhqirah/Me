$(document).ready(function(){
    const scrollContainer = $('#videoCarousel');

    // Move to the next set of items
    $('#next').click(function() {
        const currentScroll = scrollContainer.scrollLeft(); // Get current scroll position
        const newScrollAmount = currentScroll + 500;        // Calculate new position to scroll to
        scrollContainer.animate({
            scrollLeft: newScrollAmount
        }, 'slow');
    });

    // Move to the previous set of items
    $('#prev').click(function() {
        const currentScroll = scrollContainer.scrollLeft(); // Get current scroll position
        const newScrollAmount = currentScroll - 500;        // Calculate new position to scroll to
        scrollContainer.animate({
            scrollLeft: newScrollAmount
        }, 'slow');
    });

    // Optional: Log current scroll position during scroll - for debugging
    scrollContainer.on('scroll', function() {
        console.log("Current Scroll Position:", scrollContainer.scrollLeft());
    });
});
