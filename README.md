Title: Pelican Feathers  
Author: Jorge Herrera (jorgeh@ccrma.stanford.edu)  
Date: 05/20/2015  


# Pelican Feathers

A responsive [Pelican](http://blog.getpelican.com/) theme build with (almost) pure CSS. I got inspiration from [pelican-dopetrope](https://github.com/PierrePaul/html5-dopetrope) theme, but this is an implementation from scratch. I tried to use as little javascript as possible, so the theme is heavily based on [Pure](http://purecss.io), [Sass](http://sass-lang.com) (via [LibSass-python](https://github.com/dahlia/libsass-python)).

The only JS included handles menu interaction for small screens and the required MathJax include to display IPython Notebooks.


## License

Copyright (c) 2015 - Jorge Herrera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


## Plugin support

Support for a few plugins is included in the theme:

 - advthumbnailer
 - pelican-dynamic
 - liquid-tags

In particular, liquid-tags for IPython notebooks is included in the theme.


## Provided variables:

The theme provides these variables:


 - `PYGMENTS_STYLE`: pygments theme. There's an extra theme named `cheerfully_dark`, which is a port of my own [CeerfullyDark](https://github.com/jorgehatccrma/CheerfullyDark) Sublime Text color theme.
 - `LINKEDIN_USER`: exactly that
 - `ABOUT_TEXT`: text to display in the about section (called ME)
 - `ABOUT_IMAGE`: image to display in the about section
 - `ABOUT_LINK`: link to add to the about section
 - `MAIL`: contact email address
 - `SHOW_AUTHORS_IN_POST_LIST`: control the display of author information in the article list
 - `SHOW_DATE_IN_POST_LIST`: control the display of the date in the article list
 - `DISPLAY_PICTURE_IN_ARTICLE`: control the display of a banner image in the article view

On each article, it is possible to specify a `Picture` variable in the metadata. This picture will be automatically used in the post list (a thumbnail will be automatically created if the advthumbnailer plugin is installed/used) and also in the article view (see `DISPLAY_PICTURE_IN_ARTICLE`).


## Features

 - Responsive tables!

 
## Customization

Pre-compiled CSS files are provided with the theme. If you decide to change them, instead of editing them directly, I recommend editing the SCSS files (look in `static/scss`) and use `libsass` to compile the CSS files. 

### Theme development

Edit the files in `static/scss` and then simply run `python make_css.py` from this (the root) folder.

### Inside a Project

To automate this process when using the theme in a specific project, add the following lines to `pelicanconf.py`:

    import os
    import sass
    sass.compile(dirname=(os.path.join(THEME,'static/scss'),
                          os.path.join(THEME,'static/css')))
    sass.compile(dirname=(os.path.join(THEME,'static/font-awesome-4.3.0/scss'),
                          os.path.join(THEME,'static/fonts')))



