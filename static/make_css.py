#!/usr/bin/env python

"""
Generate CSS files for the theme by running

    python make_css.py

from this folder. It requires libsass installed:

    pip install libsass

"""

from sass import compile

compile(dirname=('./scss', './css'))