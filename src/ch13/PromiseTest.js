import { computeHeadingLevel } from "@testing-library/react";

function PromiseTest() {
    /**
     - Promise 비동기 객체 // 자바스크립트에서 비동기 만들 때 주로 사용
     - promise 자체는 비동기, Promise 안의 함수는 동기처리, 인데 resolve랑 reject는 비동기....
     - new Promise((resolve, reject) => {
        } // 에서 resolve = 이행, reject = 거부


     - Promise 상태 3가지 
       1. 대기 -> 이행되지도 거부되지도 않은 상태
       2. 이행 -> 연산이 성공했을 때의 상태 resolve-.then
       3. 거부 -> 연산이 실패했을 때의 상태 reject-.catch
     
     - promise는 then을 찍을수있고 => return 은 프로미스! ( 프로미스에서 return 해줘야 then사용 가능 )>> 그래서 then뒤에 thenㅇ 꼐속 가능
     - then에서 return 을 걸어야 다음 then 으로 이행 ???
       */

    function p1(name) {
        return new Promise((resolve, reject) => {
            // 대기(동기처리)
            console.log(name + "프로미스 생성");
            if(!name) {
                reject("오류"); // 이걸 하면 .catch 실행
            }
            resolve(name); // then의 result로, 이걸 하면 then 실행 가능
        }); 
    }
 
    // 프로미스 생성(async 사용)
    async function p2() {
        let a = null;

        try {
            a = await p4(); // awiat으로 동기처리 + p4()의 return 값 들고옴 // 이행할떄까지 기다려 
            // await 은 async 안에서만 사용 가능, Promise 객체에만 사용 가능
            setTimeout(() => {}, 2000); // await 사용 불가
    
            await p5();
        } catch(error) {
            console.log(error);
            a = "p5";
        }

        return a;
        // return "p2 test"; // return 으로 then의 result로
    }

    // async 사용 안하고 프로미스 생성
    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3 test"); // resolve로 then의 result로
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!!!");
    }

    const handleClick = () => {
        p1("p1") 
        .then(result => { // p1함수 다 실행되면 then
            console.log("이행");
            console.log(result);
            if(true) {
                throw new Error("거부!"); // throw new Error = 거부(reject)
            }
            return "두번째 then"; // return = 이행(resolve) -> 두번째then 의 reslut 로 감
        })
        .then(result => {
            console.log(result);

        }).catch(error => {
            //console.log(error);
        });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then( r => {
                console.log(r);
            });
        }, 2000);

       // p3().then( r => console.log(r));
    }




    return ( 
        <>
            <button onClick={handleClick}>Promise</button>
            <button onClick={handleClick2}>async</button>
        </>
     );
}

export default PromiseTest;