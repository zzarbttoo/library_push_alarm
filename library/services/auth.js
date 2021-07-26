class AuthService{

    constructor(){
    }

    
    async sign_in(){


        return "helloworld";
    }

    async sign_up(){

        console.log('sign_up');
        return "sign_up";
    }

    async sign_out(){

        return "helloworld";
    }



}

module.exports = AuthService;

