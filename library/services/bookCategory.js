const models = require('../models');

class BookCategoryService{

    constructor(){
    }

    async selectBookCategory(){
        const originalRecord = await models.aladin_category.findAll();

        let processedRecord = {};

        for(let i = 0; i < originalRecord.length; i ++ ){
            let cid = originalRecord[i].dataValues.CID;
            let categoryName = originalRecord[i].dataValues.CATEGORY_NAME;
            let mol = originalRecord[i].dataValues.MOL;
            let depth1 = originalRecord[i].dataValues['1Depth'];
            let depth2 = originalRecord[i].dataValues['2Depth'];
            let depth3 = originalRecord[i].dataValues['3Depth'];
            let depth4 = originalRecord[i].dataValues['4Depth'];

    
            if(processedRecord[mol] == undefined){
                processedRecord[mol] = {}
            }
    
            if(processedRecord[mol][depth1] == undefined){
                processedRecord[mol][depth1] = {} 
            }


            if(depth2 == null || depth2 == undefined || depth2 == ''){
                processedRecord[mol][depth1]['전체'] = cid;
            }else{

                if(processedRecord[mol][depth1][depth2] == undefined){
                    processedRecord[mol][depth1][depth2] = {}
                }

                if(depth3 == null || depth3 == undefined || depth3 == ''){
                    processedRecord[mol][depth1][depth2]['전체'] = cid;

                }else{

                    if(processedRecord[mol][depth1][depth2][depth3] == undefined){
                        processedRecord[mol][depth1][depth2][depth3] = {}
                    }

                    if(depth4 == null || depth4 == undefined || depth4 == ''){
                        processedRecord[mol][depth1][depth2][depth3]['전체'] = cid;
                    }else{
                        processedRecord[mol][depth1][depth2][depth3][depth4] = cid;
                    }
                }

            }

        }

       return processedRecord;



    }
}

module.exports = BookCategoryService;