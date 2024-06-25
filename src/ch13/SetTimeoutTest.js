function setTimeoutTest() {
    /**
     * 비동기 
     * 
     */
    
    setTimeout(() => {
        print(count);
    }, 2000); // 콜백함수란? 함수의 매개변수 안에 함수자체를 넣어주는ㄱㅓ setTimeout(() => {}) >> 

    function print(fx) {
        console.log(4);
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    
    /**
     * 콜백함수
     */

    function test(fx) {
        console.log("test함수 호출");
        fx(); // add()함수
    }

    function add() {
        console.log("add함수 호출");
    }
    
    test(add); // 콜백함수

    return ( 
        <>
        
        </>
     );
}

export default setTimeoutTest;