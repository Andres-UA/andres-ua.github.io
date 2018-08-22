$(document).ready(function(){
    
    document.querySelectorAll('.box').forEach(skills => {
        skills.addEventListener('click', function() {

            let tipo_skill = this.getAttribute('data-type')
            let titulo = '';
            let contenido = '';

            switch (tipo_skill) {
                case 'frontend':
                    titulo = 'Front-end'
                    contenido = 'HTML5, CSS, SASS, JS/ES6, jQuery, Vuejs, Typescript, Angular, React, FullCalendar, AdminLTE'
                    break;
                case 'backend':
                    titulo = 'Back-end'
                    contenido = 'Nodejs, C#, PHP, Django, Meteor, Express, Sails, Adonis, Java Spring, Go, Laravel'
                    break;
                case 'frameworks':
                    titulo = 'Frameworks'
                    contenido = 'Bootstrap, foundation, Material Design Lite, Bulma CSS, Semantic UI, BootFlat, FlatUI'
                    break;
                case 'wireframes':
                    titulo = 'Wireframes and Prototypes'
                    contenido = 'Axure, Adobe XD, Sketch, Photoshop, Gravity Design, Krita, Gimp'
                    break;
                case 'platforms':
                    titulo = 'Plataforms'
                    contenido = 'Wordpress, OpenCart, Drupal, Komercia, Joomla, Shopify, WooComerce, Magento, PrestaShop'
                    break;
                case 'vector':
                    titulo = 'Vector (icons)'
                    contenido = 'Inkscape, Illustrator, Gravity Design, Krita'
                    break;
                case 'auto':
                    titulo = 'Automation tools'
                    contenido = 'Gulp, Grunt, Jenkins, Chef, Memcached'
                    break;
                case 'others':
                    titulo = 'Others'
                    contenido = 'Git, Hotjar, Resposive Design (mobile-fisrt), basic SEO, Agile methodologies, Vagrant, VSCode, Full-Stack, Chef'
                    break;
                default:
                    titulo = ''
                    contenido = ''
                    break;
            }
            
            document.getElementById('modal-title').innerHTML = titulo
            document.getElementById('modal-content').innerHTML = contenido

            let altura = 250
            let anchura = 500 

            let y = parseInt( ($(document).height()/2) - (altura/2));
            let x = parseInt( ($(document).width()/2) - (anchura/2));

            $('#popup').css('top',y)
            $('#popup').css('left',x)

            // Cancelar Scroll
            $('body').css({'overflow':'hidden'});
            $(document).bind('scroll',function () { 
                window.scrollTo(0,0); 
            });

            $('#popup').fadeIn('slow');
            $('.popup-overlay').fadeIn('slow');
            $('.popup-overlay').height($(document).height());
            $('.popup-overlay').width($(document).width());        
            
        })
    })

    $('#close').on('click', function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');

        // Reestablecer Scroll
        $(document).unbind('scroll');
        $('body').css({'overflow':'visible'});
        return false;
    });
});