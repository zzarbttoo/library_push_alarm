const express = require('express');
const bookRouter = express.Router();
const newBookList = require('../api/newBookList');
const BookCategoryService = require('../services/bookCategory');

//신간 도서 목록 출력
bookRouter.get('/book-list', async (req, res, next) =>{

    //session 처리 
    try{

    await newBookList(1, 30, 25);

    }catch(error){
        console.log(error);
    }

});



//신간 도서를 아카이브(session처리)


//관심 있는 책 키워드를 저장->키워드 관련 신간 서적 추천 


//책 카테고리
bookRouter.get('/book-category', async (req, res, next) => {
    
    // 세션 처리

    const bookCategory = new BookCategoryService();

    await bookCategory.selectBookCategory().then((bookCategoryJson) =>{

        console.log(bookCategoryJson);
        res.status(200).send(bookCategoryJson);

    }).catch((err)=>{
        console.log(err);
    });





});

module.exports = bookRouter;

