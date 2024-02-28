blank=document.querySelectorAll(".blank");
for(let i = 0; i < blank.length; i++)   {
    blank[i].addEventListener("click", () => {
    blank[i].classList.toggle("true");
    })
}

//コードの練習
number = [3, 1, 6, 8, 4, 0, 5, 7, 2, 9]; //　配列 []のなかは”〇”番目

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
