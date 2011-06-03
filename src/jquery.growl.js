/* Super simple Growl-like notification v0.1
 * Copyright 2010 Sebastian Wallin
 * licensed under the MIT license
 */

(function($){
        /* Attach this new method to jQuery */
  $.fn.extend({
    notify: function(options) {
      var self = this;

      /* Default options */
      var defaults = {
        text    : "",
        addClass: "",
        duration: 3000,
        sticky  : false
      }
      /* Parse user options */
      options =  $.extend(defaults, options);

      /* Add the notification. Only add to first matched element */
      var parent = $('<div></div>')
        .addClass('notice-outer')
        .appendTo(this[0]);
      this.item = $('<div></div>')
        .html(options.text)
        .addClass('notice-inner')
        .addClass(options.addClass)
        .appendTo(parent);

      /* Sticky or auto-remove? */
      if(options.sticky) {
        var close = $('<span>x</span>')
          .click(function() { self.disappear(); })
          .appendTo(this.item);
      }
      else {
        setTimeout(function() {
          self.disappear();
        }, options.duration)
      }
      /* Method for removing the item */
      this.disappear = function() {
        var item = this.item;
        var opts = { opacity: '0', height: '0px' };
        item.parent().animate( opts, 300, function() {
          item.parent().remove();
        });
      }
      return this;
    }
  });
})(jQuery);