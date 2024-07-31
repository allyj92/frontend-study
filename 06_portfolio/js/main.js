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
document.addEventListener("DOMContentLoaded", function () {
  // Get modal elements
  const modal = document.getElementById("modal");
  const btnClose = document.querySelector(".btn-close");
  const btnModals = document.querySelectorAll(".btn-modal");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Attach click event to open buttons
  btnModals.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // Attach click event to close button
  btnClose.addEventListener("click", closeModal);

  // Close modal if user clicks outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
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
