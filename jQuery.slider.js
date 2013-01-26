(function($){
    
    $.fn.slide = function(options) {
        
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
     
        _target.empty();        
                
        if (_source !== '') {
            $.get(_source, function(result){
                var _data = $.parseJSON(result);
                setInterval(function(){
                    _target.slideUp('slow');
                    setTimeout(function(){
                        _target.html(_data[_count]);
                        _target.slideDown('slow');
                    }, 1000);
                    _count++;
                    if (_count == _data.length) {
                        _count = 0;
                    }
                }, _seconds);    
            });
        }else {
            _content.css('display', 'none');
            _content.first().addClass('slider-current-item');
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
