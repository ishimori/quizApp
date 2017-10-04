Answer = {
    start_page:function(page, nav){
        
        //alert(page.data.title + page.data.content + page.data.fileKey);
        page.querySelector('.title').innerHTML=page.data.title;
        //page.querySelector('.content').innerHTML=page.data.content;
        //page.querySelector('.fileKey').innerHTML=page.data.fileKey;
        
        //test();
        function test(){
            
            alert('this is test.');
        }
        
    }
    
}