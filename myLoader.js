// 로더가 읽을 파일이 item으로 전달된다
// item은 기본적으로 파일의 콘텐츠를 담고 있는 문자열이다
module.exports = function myLoader(item){
    // 문자열 -> 다른 문자열
    // app.js의 console.log를 alert으로 바꿈
    return item.replace('console.log(','alert(');
}