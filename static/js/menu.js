(function (window, document) {
    var menu = document.getElementById('main-menu'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

    var mq = window.matchMedia( "(max-width: 48em)" );  /* this has to match the media query in _global.scss */

    function toggleHorizontal() {
        // document.getElementById('menu').style.visibility = "hidden";
        [].forEach.call(
            menu.querySelectorAll('.menu-can-transform'),
            function(el){
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }


    // media query event handler
    if (matchMedia) {
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    // media query change
    function WidthChange(mq) {
        if (mq.matches == !menu.classList.contains('small')) {
            menu.classList.toggle('small');
        }

        // if (mq.matches) {
        //     console.log("Small");
        // }
        // else {
        //     console.log("Big");
        // }

    }



    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);
