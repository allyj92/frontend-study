// ScrollMagic 사용법
let spyEls = document.querySelectorAll("section.scroll-spy");
console.log(spyEls);

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5, // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller());
});

// 모달창 띄우기
let modalEl = document.querySelector("#modal");
let modalBtn = document.querySelectorAll(".port .btn-modal");
let closeBtn = document.querySelector("#modal .btn-close");
console.log(modalBtn);
console.log(modalBtn[0]);
console.log(modalBtn[1]);

// 첫번째 버튼
modalBtn[0].addEventListener("click", function () {
  // console.log('클릭됨');
  modalEl.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  modalEl.style.display = "none";
});

// 두번째 버튼

modalBtn[1].addEventListener("click", function () {
  // console.log('클릭됨');
  modalEl.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  modalEl.style.display = "none";
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
new Date().getFullYear(); // 현재 연도 정보가 숫자 데이터로 반환됨
console.log(new Date().getFullYear());

let thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
let toTopBtn = document.querySelector("#to-top");

// 페이지에 스크롤 이벤트 감지를 추가
// Window: 브라우저 창 객체
window.addEventListener("scroll", function () {
  console.log(this.window.scrollY); // y축 스크롤 위치

  // 페이지 스크롤 위치가
  // 500px을 넘으면 요소를 보이고
  // 500px을 넘지 않으면 요소 숨기기!
  if (window.scrollY > 500) {
    // 오소 보이기
    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 1;
    toTopBtn.style.transform = "translateX(0)";
  } else {
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = "translateX(100px)";
  }
});

// course
document.addEventListener("DOMContentLoaded", function () {
  const courses = document.querySelectorAll(".inner-list .inner"); // Select all course elements
  const totalCourses = courses.length; // Total number of courses
  let currentCourseIndex = 0;

  function showCurrentCourse() {
    courses.forEach((course, index) => {
      if (index === currentCourseIndex) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  }

  showCurrentCourse();

  const intervalTime = 5000;
  let intervalId = setInterval(() => {
    currentCourseIndex = (currentCourseIndex + 1) % totalCourses;
    showCurrentCourse();
  }, intervalTime);

  const leftArrow = document.querySelector(".left_arrow");
  const rightArrow = document.querySelector(".right-arrow");

  leftArrow.addEventListener("click", function () {
    clearInterval(intervalId); // Stop automatic transition
    currentCourseIndex = (currentCourseIndex - 1 + totalCourses) % totalCourses;
    showCurrentCourse();
  });

  rightArrow.addEventListener("click", function () {
    clearInterval(intervalId); // Stop automatic transition
    currentCourseIndex = (currentCourseIndex + 1) % totalCourses;
    showCurrentCourse();
  });

  /*
  주기적으로 화면 넘기기
*/
  const getInterval = () => {
    return setInterval(() => {
      currentIndex++;
      currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
      innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
    }, 2000);
  };

  let interval = getInterval(); // interval 등록
});
