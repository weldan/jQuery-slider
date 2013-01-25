(function($){
    
    $.fn.slide = function(options, method) {
        
        var options = $.extend({
            'target' : '#target',
            'content' : '#content p',
            'source' : '',
            'interval' : 2000
        }, options);
        
        var _target = $(options.target);
        var _content = $(options.content);
        var _source = options.source;
        var _length = _content.length;
        var _count = 0;
        var _seconds = options.interval; 
        
        if (_source !== '') {
            
        }else {
            _content.css('display', 'none');
            _content.first().addClass('slider-current-item');
            _target.empty();
            setInterval(function(){
                _target.slideUp('slow');
                setTimeout(function(){
                    _target.html($('.slider-current-item').html());
                    _target.slideDown('slow');
                }, 1000);
                $('.slider-current-item')
                .removeClass('slider-current-item')
                .next().addClass('slider-current-item');
                _count++;
                if (_count == _length) {
                    _count = 0;
                    _content.first().addClass('slider-current-item');
                }
            }, _seconds);
        }
        
           
    }
})(jQuery);