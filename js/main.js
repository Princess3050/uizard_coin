$(document).ready(function(){



    let $button = $('.project-area .button-group button');

    $button.click(function(e){

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr(data-filter);
        $('.project-area .grid').isotope({
            filter:selector
        });

        return false;
    })


});