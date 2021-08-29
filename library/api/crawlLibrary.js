const webdriver = require('selenium-webdriver');
const { By, until } =require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('../config/config.json').development.webDriverPath;

//책 이릅을 입력받으면 책을 보유한 도서관 리스트를 호출 
const crawlLibrary = async(bookName) =>{

 
    //TODO : path 따로 빼놓기
    const chromeDriverPath = "C:\\Users\\qodbw\\Documents\\library_push_alarm\\library\\api\\chromedriver.exe";


    const service = new chrome.ServiceBuilder(chromeDriverPath).build();
    chrome.setDefaultService(service);

    const options = new chrome.Options().headless();

    let driver = await new webdriver
    .Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();


    const url = await urlBuilder(bookName);

    await driver.get(url).catch(error => {

        driver.quit();
        throw new Error('셀레니움 세팅 에러');
    });


    await driver.findElement(By.id('searchResultDiv_dan')).findElement(By.className('first_lib')).click().catch((error) => {
        
        driver.quit();
        throw new Error('등록되지 않은 도서');

    });


    let libraryList = [];

    await driver.wait(until.elementsLocated(By.className('table_bd')), 3000).then( async (values) => {
        
        libraryList = await Promise.all(values.map((element) => {
            return element.findElement(By.className('txt_link')).getText();

        }))

    }).catch(() => {

        //console.log('도서관 목록을 불러오던 중 에러 발생');
        driver.quit();
        throw new Error('도서관 목록을 불러오던 중 에러 발생');

    })


    driver.quit();

    return libraryList;



}


const urlBuilder = (bookName) => {

    return "https://books.nl.go.kr/PU/contents/P60100000000.do?page_move_status=0&page_num=1&sort_desc=&sort=&logic2=and&collection=dan&first_search=Y&search_type=SIMPLE&search_field1=total&max_count=&page_size=30&hanja_trans=N&value1="
    + bookName + "&kdcddc=&kdcddcCode=&kdcName=&schM=searchResultTotalList";

}




module.exports = crawlLibrary;