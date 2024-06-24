document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu > li > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {


            const parentL = this.parentElement;
            const isOpen = parentL.classList.contains('open');

            // Fecha o submenus e remove as marcacoes
            document.querySelectorAll('.menu li.open').forEach(li => li.classList.remove('open'));
            document.querySelectorAll('.menu a.selected').forEach(a => a.classList.remove('selected'));

            //Marca o item selecionado
            this.classList.add('selected');

            if (!isOpen) {
                //Abrir o submenu do item cliado
                parentL.classList.add('open');
            }
        });
    });

    const subMenuItems = document.querySelectorAll('.menu li ul li a');

    subMenuItems.forEach(subItem => {
        subItem.addEventListener('click', function () {


            //Remove as marcoes de todos os item do submenu 
            document.querySelectorAll('.menu li ul li a.selected').forEach(a => a.classList.remove('selected'));

            //Marca item escolhido no submenu 
            this.classList.add('selected');

            // Marca marca o item principal do menu como selecionando
            const parentL = this.closest('.menu > li');
            parentL.querySelector('a').classList.add('selected');
        });
    });


});

/*
document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = '/siteCassava2';
    
    function updateAttribute(element, attribute) {
        const value = element.getAttribute(attribute);
        if (value && value.startsWith('/') && !value.startsWith(baseUrl)) {
            element.setAttribute(attribute, baseUrl + value);
        }
    }

    document.querySelectorAll('a').forEach(anchor => {
        updateAttribute(anchor, 'href');
    });

    document.querySelectorAll('link').forEach(link => {
        updateAttribute(link, 'href');
    });

    document.querySelectorAll('script').forEach(script => {
        updateAttribute(script, 'src');
    });

    document.querySelectorAll('img').forEach(img => {
        updateAttribute(img, 'src');
    });
});
*/
