toggleBtn.addEventListener( 'click', (event)=> {
    event.prevetDefault();
    dashboard_sidebar.style.width='10%';
    dashboard_content_sontainer.style.width= '90%'
    dashboard_logo.style.fontSize= '60px';
    userImage.style.width= '60px';
});