// JavaScript Document
$(document).ready(function(){
    leftNav();
    init()
})

function leftNav() {
    $('#header .menu .btnMenu').on('click',function(){
        $('#menuArea').addClass('active')
    })
    $('#menuArea .btnCLose').on('click',function(){
        $('#menuArea').removeClass('active')
    })

    $('.gnb>ul>li').each(function(){
        if($(this).find('ul').size()==1){
            $(this).addClass('hasSub')
        }
    })
    $('.gnb>ul>li>a').on('click',function(){
        $(this).next().slideToggle(200).parent().toggleClass('active');
        $(this).parent().siblings('li').removeClass('active').find('ul').slideUp(200);
    })
}


function init(){
    $('#header .topUtil .searchBtn').on('click',function(){
        $('#header .searchSub').toggle();
    })
    $("[data-role='toggleList']>li>a").on('click',function(){
        $(this).next().slideToggle(200).parent().toggleClass('active');
        $(this).parent().siblings('li').removeClass('active').find('ul').slideUp(200);
    })
    $('.listType01 dt a').on('click',function(){
        $(this).parent().addClass('active')
        $(this).parents().siblings('dl').find('dt').removeClass('active')
    })
    $('.bibleListHeader .btnHead .openPlayer').on('click',function(){
        $('.bibleListHeader .playerArea').slideToggle(200)

    })
    $("#readCon").change(function(){
        if($("#readCon").is(":checked")){
            $('.readContent').addClass('active')
        }else{
            $('.readContent').removeClass('active')
        }
    });


}
var popName = '';
var overay = $('<div class="overay-layer"></div>')
var overay_sec = $('<div class="overay-layer-sec"></div>')
function layer_init(name){
    popName = name;
    var layer = $('.popupWrap[data-role="'+ name +'"]');
//    var layer_w = -layer.outerWidth()/2;
//    var layer_h = -layer.outerHeight()/2;
    overay.appendTo('.lightBoxArea').fadeIn() // 11
    layer.fadeIn()
//
//    if($('.popupLayer.active').size()>=2){
//        overay_sec.appendTo('.popupWrap').fadeIn()
//    }else if($('.popupLayer.active').size()===1){
//        overay.appendTo('.popupWrap').fadeIn()
//    }
    return false;
}

function layer_close(e){
    $(overay).fadeOut(function(){
        $(overay).remove();
    })
    $(e).parents('.popupWrap').fadeOut()
    return false;
}

