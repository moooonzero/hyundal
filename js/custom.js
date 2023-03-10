(function($){
    //배너 이미지 슬라이드
    var mySwiper = new Swiper ('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
    });


    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        
        // console.log(sct);

        //header부분 스크롤 시 변화
        if(sct > 0 ){
            $("header").addClass("scroll");
        }else{
            $("header").removeClass("scroll");
        }

        //탑버튼
        if(sct > 500){
            $(".top_btn").css("display","block");
        }else{
            $(".top_btn").css("display","none");
        }

    });

    //탑버튼 클릭시 맨위로 올리기
    $(".top_btn").click(function(){
        $('html').animate({scrollTop : 0},600);
    });

    // 오른쪽 사이드바 함수(tap,mo)
    $("#m_btn").click(function(){

        if($("#ham").hasClass('on')){
            // 닫을 때 펼쳐져있던 메뉴들 다 접기
            $(".top_menu").children('a').removeClass('on');
            $(".top_menu").children('ul').stop().slideUp();

            $("#ham").removeClass('on');
            $("nav").removeClass('on');
            $("#menu_wrap").removeClass('on');
            
        }else{
            $("#ham").addClass('on');
            $("nav").addClass('on');
            $("#menu_wrap").addClass('on');
        }

    });

    // 메뉴 접히고 펼치기(tap,mo)
    $(".top_menu>a").click(function(e){
        e.preventDefault();

        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings('ul').stop(true,true).slideUp();
            
        }else{
            $(".top_menu").children('a').removeClass('on');
            $(".top_menu").children('ul').stop().slideUp();
            $(this).addClass('on');
            $(this).siblings('ul').stop(true,true).slideDown();
        }

    });

    //tap, mo 메뉴 배경 클릭했을 때도 닫히게
    $("nav").click(function(){

        $("#m_btn").click();

    });

    //사이드바를 클릭할 때 상위요소인 배경이 같이 클릭되어서 사이드바가 들어가버리기 때문에 그것을 막음
    $("#menu_wrap").click(function(e){
        e.stopPropagation();
    });



})(jQuery);