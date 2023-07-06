const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    const filters = {
        all: markAll,
        lovers: wrapper.querySelectorAll('.lovers'),
        chef: wrapper.querySelectorAll('.chef'),
        girl: wrapper.querySelectorAll('.girl'),
        guy: wrapper.querySelectorAll('.guy'),
        grandmother: null,
        granddad: null
    };

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.tagName === 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');

            const filterType = target.classList[0];
            const markType = filters[filterType];

            typeFilter(markType);
        }
    });
};

export default filter;


