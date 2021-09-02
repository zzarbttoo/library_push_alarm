const fetch = require('node-fetch');
const ttbkey = require('../config/config.json').key.ttbkey;

//신간 리스트를 호출 

const newBookList = async(start, categoryId, MaxResults) =>{

    //TODO : 커밋 전 secret file로 옮기기 
    let apiURL = urlBuilder(start, categoryId);

    
    fetch(apiURL).then((response) => {
        response.json().then((data) =>{
            console.log(data.item.length);
        });
    });

}



const urlBuilder = (start, categoryId, MaxResults) => {

let itemNewAllUrl = "https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey="+ ttbkey + "&QueryType=ItemNewAll&MaxResults=" + MaxResults+ "&start=" + start +"&SearchTarget=Book&output=js&Version=20131101&CategoryType=" + categoryId;

return itemNewAllUrl;
}


module.exports = newBookList;