// JS required to render IPython Notebooks
//
// modified from the output of liquid-tags

// <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" type="text/javascript"></script>

// <script type="text/javascript">
init_mathjax = function() {
    if (window.MathJax) {
        // MathJax loaded
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
            },
            displayAlign: 'left', // Change this to 'center' to center equations.
            "HTML-CSS": {
                styles: {'.MathJax_Display': {"margin": 0}}
            }
        });
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
}
init_mathjax();
// </script>

// <script type="text/javascript">
// jQuery(document).ready(function($) {
//     $("div.collapseheader").click(function () {
//     $header = $(this).children("span").first();
//     $codearea = $(this).children(".input_area");
//     console.log($(this).children());
//     $codearea.slideToggle(500, function () {
//         $header.text(function () {
//             return $codearea.is(":visible") ? "Collapse Code" : "Expand Code";
//         });
//     });
// });
// });
// </script>