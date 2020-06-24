
  /* tab*/
  $('.tab-list').each(function(){                 
      var $this = $(this);                            
      var $tab = $this.find('li.active');             
      var $link = $tab.find('a');                    
      var $panel = $($link.attr('href'));            
    
      $this.on('click', '.svg-position', function(e) { 
        e.preventDefault();                          
        var $link = $(this),                          
            id = this.hash;                          
    
        if (id && !$link.is('.active')) {            
          $panel.removeClass('active');               
          $tab.removeClass('active');                 
    
          $panel = $(id).addClass('active');         
          $tab = $link.parent().addClass('active');   
        }
      
      });
    });
/*  slider   */
// import Glide from '@glidejs/glide';
new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  startAt: 0,
  perView: 3
}).mount();