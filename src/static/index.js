import './styles/style.scss';
import $ from 'jquery';
import './modules/slider';
import honeycomb from './modules/honeycomb';
import tabs from './modules/tabs';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => { //вызываем скрипты только после всей загрузки DOM
    "use strict";
    honeycomb(); // запускаем весь файл и его содержимое
    tabs();
    modals();
       
})


//header start
$(window).on("load", function ()
{
    if ($(window).width() < 769) {
        $('.header').addClass('scrolled');
    }

    if ($(window).width() > 769) {

$(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if( scrolled > 400 ) {
        $('.header').addClass('scrolled');
    }   
    if( scrolled <= 400 ) {     
        $('.header').removeClass('scrolled');
    }
    
});
}
});
//header end



//burger start
let page = document.querySelector('.page');
let burger_menu = document.querySelector('.burger-menu-back');
let burger = document.querySelector('.burger');
    burger.addEventListener('click', function(){
    burger_menu.classList.toggle('burger-menu-back-open');
    page.classList.toggle('page-fixed');
    this.classList.toggle('burger-open');
})
//burger end


    $('#read_more').click(
        function(){
            $('.articles-row').addClass('read_open')
            
        }
    )
  

//плавное раскрытие блока статей start
    let elBlock = document.querySelector('.articles-row');
    let btn_article_web = document.querySelector('.web');
    let btn_article_seo = document.querySelector('.seo');
    let btn_article_smm = document.querySelector('.smm');
    let btn_article_show_all = document.querySelector('.show-all');
    let btn_read = document.querySelector('#read_more');
    let tabs_row = document.querySelector('.tabs');
    if (btn_read ) {
    btn_read.addEventListener("click", () => {
        if (elBlock.style.height === "539px") {
            elBlock.style.height = `${ elBlock.scrollHeight }px`
        } else {
            elBlock.style.height = `${ elBlock.scrollHeight }px`;
            window.getComputedStyle(elBlock, null).getPropertyValue("height");
            elBlock.style.height = "539";
        }
    });

    if (tabs_row) {
    btn_article_web.addEventListener('click', ()=>{
      elBlock.style.height = "auto";
       })
 btn_article_seo.addEventListener('click', ()=>{
  elBlock.style.height = "auto";
   })
 btn_article_smm.addEventListener('click', ()=>{
  elBlock.style.height = "auto";
   })
   btn_article_show_all.addEventListener('click', ()=>{
    if (elBlock.style.height === "auto"){
    elBlock.style.height = "539px";
     }
    })
}
}
//плавное раскрытие блока статей end

//плавное раскрытие блока кейсов start
let caseBlock = document.querySelector('.cases-row');
let casesItem = document.querySelectorAll('.cases-item');
let btn_case_read = document.querySelector('.more_cases');
let btn_case_web = document.querySelector('.web');
let btn_case_seo = document.querySelector('.seo');
let btn_case_smm = document.querySelector('.smm');
let btn_case_show_all = document.querySelector('.show-all');
if (btn_case_read ) {

    let maxHeight = 0;
$(casesItem).each(function(){
   let thisH = $(this).height();
   if (thisH > maxHeight) { maxHeight = thisH; }
});
$(caseBlock).height(maxHeight + 40);


btn_case_read.addEventListener("click", () => {
    // if (caseBlock.style.height === "469px") {
        caseBlock.style.height = `${ caseBlock.scrollHeight }px`
    // } 
    // else {
    //     caseBlock.style.height = `${ caseBlock.scrollHeight }px`;
    //     window.getComputedStyle(caseBlock, null).getPropertyValue("height");
    //     caseBlock.style.height = "469";
    // }
});

if (tabs_row) {
btn_case_web.addEventListener('click', ()=>{
     caseBlock.style.height = "auto";
      })
btn_case_seo.addEventListener('click', ()=>{
      caseBlock.style.height = "auto";
  })
btn_case_smm.addEventListener('click', ()=>{
      caseBlock.style.height = "auto";
  })
  btn_case_show_all.addEventListener('click', ()=>{
    if (caseBlock.style.height === "auto"){
      caseBlock.style.height = "469px";
     }
    })
}

}
//плавное раскрытие блока кейсов end


// Блок Комментарии START

let respBlock = document.querySelectorAll('.response-block');
let respBtn = document.querySelectorAll('.response-btn');
let commentsRow = document.querySelector('.comments-row');
let commentsAll = document.querySelectorAll('.comment');
let firstComment = commentsAll[0];
let firstCommentHeight = firstComment.offsetHeight;
commentsRow.style.height = `${firstCommentHeight}px`;


let btnAllComments = document.querySelector('.btn-all-comments');

if(btnAllComments) {
    btnAllComments.addEventListener('click', ()=>{
        commentsRow.classList.add('comments-row-all')
        // if (commentsRow.style.height === `${firstCommentHeight}px`) {
        //     commentsRow.style.height = `${ commentsRow.scrollHeight }px`
        // } else {
        //     commentsRow.style.height = `${ commentsRow.scrollHeight }px`;
        //     window.getComputedStyle(commentsRow, null).getPropertyValue("height"); // помагает сделать все плавно
        //     commentsRow.style.height = "469";
        // }
    })
}

if (respBtn) {

respBtn.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
        let commentRowHeight = firstCommentHeight + 170;
        commentsRow.style.height = `${commentRowHeight}px`;
        respBlock[i].classList.add('response-block-show'); //открываю окно конкретно в этом блоке
        item.style.display ="none";
    });
})

}



//Блок комментарии END











