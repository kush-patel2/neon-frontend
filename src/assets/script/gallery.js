$(document).ready(function () {
    
    var itemSelector = '.grid-item';

    var $container = $('#container').isotope({
        itemSelector: itemSelector,
        masonry: {
            columnWidth: itemSelector,
            isFitWidth: true
        }
    });

    //Ascending order
    var responsiveIsotope = [
		[480, 12],
		[720, 12]
    ];

    var itemsPerPageDefault = 12;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = 'led';
    var filterAtribute = 'data-filter';
    var pageAtribute = 'data-page';
    var pagerClass = 'isotope-pager';

    function changeFilter(selector) {
        
        $container.isotope({
            filter: selector
        });
    }


    function goToPage(n) {
        
        currentPage = n;
       
        var selector = itemSelector;
        selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';
        selector += '[' + pageAtribute + '="' + currentPage + '"]';

        changeFilter(selector);
    }

    function defineItemsPerPage() {
        
        var pages = itemsPerPageDefault;

        for (var i = 0; i < responsiveIsotope.length; i++) {
            if ($(window).width() <= responsiveIsotope[i][0]) {
                pages = responsiveIsotope[i][1];
                break;
            }



        }

        return pages;
    }

    function setPagination() {
        
        var SettingsPagesOnItems = function () {

            var itemsLength = $container.children(itemSelector).length;

            var pages = Math.ceil(itemsLength / itemsPerPage);
            var item = 1;
            var page = 1;
            var selector = itemSelector;
            selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';

            $container.children(selector).each(function () {
                if (item > itemsPerPage) {
                    page++;
                    item = 1;
                }
                $(this).attr(pageAtribute, page);
                item++;
            });

            currentNumberPages = page;

        }();

        var CreatePagers = function () {

            var $isotopePager = ($('.' + pagerClass).length == 0) ? $('<div class="' + pagerClass + '"></div>') : $('.' + pagerClass);

            $isotopePager.html('');

            for (var i = 0; i < currentNumberPages; i++) {
                var $pager = $('<a href="javascript:void(0);" class="pager" ' + pageAtribute + '="' + (i + 1) + '"></a>');
                $pager.html(i + 1);

                $pager.click(function () {
                    var page = $(this).eq(0).attr(pageAtribute);
                    goToPage(page);
                });

                $pager.appendTo($isotopePager);
            }

            $container.after($isotopePager);

        }();

    }

    setPagination();
    goToPage(1);
    
    //Adicionando Event de Click para as categorias
    $('.filters a').click(function () {
        
        //$('.FiltImg').removeClass('active');
        //var filter = $(this).attr(filterAtribute);
        //currentFilter = filter;

        $('.FiltImg').hide();
        $('.FiltImg[data-filter="' + $(this).attr(filterAtribute) + '"]').show();
        //$('#filter[value^="' + $(this).attr(filterAtribute) + '"]').attr("selected", "selected");
        $('#filter option').removeAttr("selected");
        $('#filter option[value="' + $(this).attr('data-filter') + '"]').attr("selected", "selected");
        
        setPagination();
        goToPage(1);


    });
    
    //Evento Responsivo
    $(window).resize(function () {
        itemsPerPage = defineItemsPerPage();
        setPagination();
    });



});




// Dropdown selector
$("#filter").change(function () {

    var dat = $("#filter").val();
    $('.FiltImg').hide();
    $('.FiltImg[data-filter="' + dat + '"]').show();
    $('#filter option').removeAttr("selected");
    $('#filter option[value="' + dat + '"]').attr("selected", "selected");
});





$(document).ready(function () {
    
    // filter items on button click
    $('.filter-button-group').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.FiltImg').hide();
        $('.FiltImg[data-filter="' + $(this).attr('data-filter') + '"]').show();
        $('#filter option').removeAttr("selected");
        $('#filter option[value="' + $(this).attr('data-filter') + '"]').attr("selected", "selected");
        //$('#filter[value^="' + $(this).attr(filterAtribute) + '"]').attr("selected", "selected");
        //$('.grid').isotope({ filter: filterValue });
        //$('.filter-button-group li').removeClass('active');
        //$(this).addClass('active');
    });
})


$(document).ready(function () {
    
    // filter items on button click
    $('.isotope-pager').on('click', 'a', function () {
        var filterValue = $(this).attr('data-page');

        $('.isotope-pager a').removeClass('active');
        $(this).addClass('active');
    });
})








//$(document).ready(function () {
    
//    $('.popupimg').magnificPopup({
//        type: 'image',
//        mainClass: 'mfp-with-zoom',
//        gallery: {
//            enabled: true
//        },

//        zoom: {
//            enabled: true,

//            duration: 300, 
//            easing: 'ease-in-out', 

//            opener: function (openerElement) {

//                return openerElement.is('img') ? openerElement : openerElement.find('img');
//            }
//        }

//    });

//});