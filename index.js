var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var contentFooter = document.getElementById('content-footer')
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar == true){
        navigationHeader.style.marginLeft = '-10vw';
        console.log(showSidebar)
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)';
        contentFooter.style.filter = 'blur(2px)';
    }
    else
    {
        navigationHeader.style.marginLeft = '-100vw';
        console.log(showSidebar)
        navigationHeader.style.animationName = 'closeSidebar'
        content.style.filter = '';
        contentFooter.style.filter = '';
    }
    
}

function closeSidebar()
{
    if (showSidebar) 
    {
        toggleSidebar();  
    }
}

window.addEventListener('resize', function(event){
    if (this.window.innerWidth > 768 && showSidebar) 
    {
        toggleSidebar();
    }
})