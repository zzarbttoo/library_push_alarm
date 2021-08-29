const express = require('express');
const libraryRouter = express.Router();
const {celebrate, Joi, Segments} = require('celebrate');

const crawlLibrary = require('../api/crawlLibrary');

//좌표를 입력받았을 때 가장 가까운 거리의 도서관 10개 

//전체 도서관 리스트를 출력 

//전체 서점/중고서점 리스트를 출력 




//책을 입력받았을 때 그것을 보유한 도서관 리스트 출력  
// TODO : get방식도 celebrate를 사용하는건가 param validate 필요
libraryRouter.get('/library-list/:book', async(req, res, next) => {

    book = req.params.book;

    try{
    const libraryList = await crawlLibrary(book);
    console.log(libraryList);
    }catch(error){
        console.log(error);
    }

    res.status(200).send();

});

module.exports = libraryRouter;