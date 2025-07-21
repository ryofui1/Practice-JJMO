const imgList = [
    "https://www.imojp.org/archive/mo2025/jjmo/problems/jjmo23yqa.pdf",
    "https://www.imojp.org/archive/mo2024/problems/jjmo22yqa.pdf",
    "https://www.imojp.org/archive/mo2023/jjmo/problems/jjmo21yqa.html",
    "https://www.imojp.org/archive/mo2022/jjmo2022/problems/jjmo20yq.html",
    "",
    "https://www.imojp.org/archive/mo2020/jjmo2020/problems/jjmo18yq.html",
    "https://www.imojp.org/archive/mo2019/jjmo2019/problems/jjmo17yq.html",
    "https://www.imojp.org/archive/mo2018/jjmo2018/problems/jjmo16yq.html",
    "https://www.imojp.org/archive/mo2017/jjmo2017/problems/jjmo15yq.html",
    "https://www.imojp.org/archive/mo2016/jjmo2016/problems/jjmo14yq.html",
    "https://www.imojp.org/archive/mo2015/jjmo2015/problems/jjmo13yq.html",
    "https://www.imojp.org/archive/mo2014/jjmo2014/problems/jjmo12yq.html",
    "https://www.imojp.org/archive/mo2013/jjmo2013/problems/jjmo11yq.html",
    "https://www.imojp.org/archive/mo2012/jjmo2012/problems/jjmo10yq.html",
    "https://www.imojp.org/archive/mo2011/jjmo2011/problems/jjmo9yq.html",
    "https://www.imojp.org/archive/mo2010/jjmo2010/problems/jjmo8yq.html",
    "https://www.imojp.org/archive/mo2009/jjmo2009/problems/jjmo7yq.html",
    "https://www.imojp.org/archive/mo2008/jjmo2008/problems/jjmo6q.html",
    "https://www.imojp.org/archive/mo2007/jjmo2007/problems/jjmo5q.html",
    "https://www.imojp.org/archive/mo2006/jjmo2006/problems/jjmo4q.html",
    "https://www.imojp.org/archive/mo2005/jjmo2005/problems/jjmo3q.html",
    "https://www.imojp.org/archive/mo2004/jjmo2004/problems/jjmo2q.html",
    "https://www.imojp.org/archive/mo2003/jjmo2003/problems/jjmo1q.html"
];

// Sliderの設定
const slider = document.getElementById('slider');
noUiSlider.create(slider, {
  start: [2003, 2025],         // 初期値の下限と上限
  connect: true,           // 範囲を色付け
    range: {
    'min': 2003,
    'max': 2025
    },
});


const minValueInput = document.getElementById('min-value');
const maxValueInput = document.getElementById('max-value');

slider.noUiSlider.on('update', function(values, handle) {
    minValueInput.innerText = Math.trunc(values[0]);
    maxValueInput.innerText = Math.trunc(values[1]);
});

const slider2 = document.getElementById('slider2');
noUiSlider.create(slider2, {
  start: [1,12],         // 初期値の下限と上限
  connect: true,           // 範囲を色付け
    range: {
    'min': 1,
    'max': 12
    },
});

const minValueInput2 = document.getElementById('min-value2');
const maxValueInput2 = document.getElementById('max-value2');

slider2.noUiSlider.on('update', function(values, handle) {
    minValueInput2.innerText = Math.trunc(values[0]);
    maxValueInput2.innerText = Math.trunc(values[1]);
});

// 抽選ボタン
const randomBtn = document.getElementById("randomBtn");
const task = document.getElementById("task");
const displayIframe = document.getElementById("displayIfra");

randomBtn.addEventListener("click", () => {
    const MinValue = Number(minValueInput.innerText)
    const MaxValue = Number(maxValueInput.innerText)

    const MinValue2 = Number(minValueInput2.innerText)
    const MaxValue2 = Number(maxValueInput2.innerText)

    const randomIndex = 2025-Math.floor(Math.random() * (MaxValue-MinValue)+MinValue);
    const questionIndex = Math.floor(Math.random() * (MaxValue2-MinValue2)+MinValue2);
    console.log(randomIndex);
    displayIframe.src = imgList[randomIndex];


    var Stars = ""; 
    if (questionIndex == 1) {
        Stars = "<span style='font-weight: 1000;color: springgreen;'>Q." + (questionIndex) + "   ★" + "</span>";
    } else if (questionIndex <= 4) {
        Stars = "<span style='font-weight: 1000;color: orange;'>Q." + (questionIndex) + "   ★★" + "</span>";
    } else if (questionIndex <= 8) {
        Stars = "<span style='font-weight: 1000;color: red;'>Q." + (questionIndex) + "   ★★★" + "</span>";
    } else {
        Stars = "<span style='font-weight: 1000;color: purple;'>Q." + (questionIndex) + "   ★★★★★" + "</span>";
    }

    task.innerHTML = "Your Quest | " + 
    "<span style='font-weight: 1000;color: red;'>" + (2025 - randomIndex) + "</span>" 
    + " - " 
    // +"<span style='color: red;'>" + (questionIndex) + "</span>" 
    +Stars;
});