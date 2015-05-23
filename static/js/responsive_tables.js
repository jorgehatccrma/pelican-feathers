/*
* @Author: jorgeh
* @Date:   2015-05-22 13:32:32
* @Last Modified by:   jorgeh
* @Last Modified time: 2015-05-22 17:12:42
*/

// Minimal JS to add 'data-th' attributed to td elements. The rest of the
// responsiveness is handled by CSS

(function() {

    var tables = document.getElementsByTagName("table");

    for (var i = tables.length - 1; i >= 0; i--) {
        var t = tables[i];
        var headers = t.getElementsByTagName("thead")[0]
                       .getElementsByTagName("th");
        var h = [];
        for (var j = 0; j < headers.length; j++) {
             h.push(headers[j].innerHTML);
        };
        var rows = t.getElementsByTagName("tbody")[0]
                    .getElementsByTagName("tr");
        for (var k = 0; k < rows.length; k++) {
            var ds = rows[k].getElementsByTagName("td");
            for (var l = 0; l < ds.length; l++) {
                ds[l].setAttribute("data-th", h[l]);
            }
        }

    };


})();