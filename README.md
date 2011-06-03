# Minimalistic jQuery Growl plugin #
This is a minimalistic implementation of a (yet another) Growl-like jQuery plugin. I wrote this for a specific purpose where I just needed a simple notification box with as little markup as possible.

Feel free to use it and abuse it!

See documentation on [homepage](http://wallin.github.com/jquery-growl)

## Example ##

    //Creates a self-removing message in "EventContainer" element;
    $(document).ready(function() {
      $("#EventContainer").notify({
        text: "Hello World!"
      });
    });
