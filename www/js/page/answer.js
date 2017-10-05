Answer = {
    show_start_page:function(page, nav){
        
        //alert(page.data.title + page.data.content + page.data.fileKey);
        page.querySelector('.title').innerHTML=page.data.title;
        //page.querySelector('.content').innerHTML=page.data.content;
        //page.querySelector('.fileKey').innerHTML=page.data.fileKey;
        
        //test();
        function test(){
            
            alert('this is test.');
        }
        
    },
    start_quiz:function(){
            let nav = document.querySelector('#nav');
            //alert('start_quiz');
            // 問題ページを表示
            nav.pushPage('quiz1.html',{'animation':'none'});
        
    },
    show_answer:function(pAns){
            let nav = document.querySelector('#nav');
            //alert('start_quiz');
            // 解答ページの表示
            nav.pushPage('quiz2.html',{'animation':'none'});
        
    },
    break_quiz:function(){
        //alert('break_quiz');
        let nav = document.querySelector('#nav');
            //nav.pushPage('login.html',{'animation':'none'});
            nav.resetToPage('login.html',{'animation':'none'});
    }
    
}