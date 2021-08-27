const webdriver = require('selenium-webdriver');
const { By, until } =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('../config/config.json').development.webDriverPath;

//책 이릅을 입력받으면 책을 보유한 도서관 리스트를 호출 
const crawlLibrary = async(bookName) =>{

    const service = new chrome.ServiceBuilder("C:\\Users\\qodbw\\Documents\\library_push_alarm\\library\\api\\chromedriver.exe").build();
    chrome.setDefaultService(service);

    let driver = await new webdriver
    .Builder()
    .forBrowser('chrome')
    .build();

    const url = await urlBuilder(bookName);
    //const url = "https://www.naver.com/";

    await driver.get(url).catch(error => {
        console.log(error)
        throw new Error('selenium error');
    });

    await driver.findElement(By.id('searchResultDiv_dan')).findElement(By.className('first_lib')).click();
    //const list =await driver.wait(until.elementLocated(By.className('table_bd')), 3000).getText();
    await driver.wait(until.elementsLocated(By.className('table_bd')), 3000).then((values) => {
        
        //values => 전체 도서관 list
        values.forEach(async (element) => {
            element.findElement(By.className('txt_link')).getText().then((library_name) => {
                console.log(library_name) // 도서관 이름
            });

            
        });




    });

    //driver.quit()




}


const urlBuilder = (bookName) => {

    return "https://books.nl.go.kr/PU/contents/P60100000000.do?page_move_status=0&page_num=1&sort_desc=&sort=&logic2=and&collection=dan&first_search=Y&search_type=SIMPLE&search_field1=total&max_count=&page_size=30&hanja_trans=N&value1="
    + bookName + "&kdcddc=&kdcddcCode=&kdcName=&schM=searchResultTotalList";

}




module.exports = crawlLibrary;