// Get all the tabs
const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
    // Add onclick event listener on each tab
    clickedTab.addEventListener('click', () => {
        //Remove the active clas from all the tabs
        tabs.forEach(tab = > {
            tab.classList.remove('active');
        });

        //Add the active class on the clicked tab
        clickedTab.classList.add('active');
    });
});