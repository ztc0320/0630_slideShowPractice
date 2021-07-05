/* eslint-disable */

$(function () {

    /* 전환형 슬라이드 쇼 시작 */
    // 첫째 (first-child)를 fadeOut 한다.
    // 1-1 첫째에 콜백함수를 만들어 순서를 마지막으로 이동한다.
    // 둘째 (nth-child)를 fadeIn 한다.
    setInterval(fnSlide,8000);

    function fnSlide() {

        $("#slide a:first-child").fadeOut(
            3000,
            function () {
                $("#slide a:first-child").insertAfter("#slide a:last-child");
            }
        );

        $("#slide a:nth-child(2)").fadeIn(3000);

    };




    /* 전환형 슬라이드 쇼 시작 */

});
