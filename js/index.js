const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
const radio5 = document.getElementById("radio5");
const visitorContainer = document.getElementById("visitorContainer");
const cancleButton = document.getElementById("cancleButton");

form.addEventListener("submit", (event) => {
  const currentVisitor = nameInput.value;
  const count = caculateClickedRadioCount();

  cancleChecked();

  alert(`${currentVisitor}님, 저와 ${count}개의 취향이 같으시네요!`);

  event.preventDefault();
});

cancleButton.addEventListener("click", () => {
  cancleChecked();
});

const caculateClickedRadioCount = () => {
  let count = 0;

  if (radio1.checked) count += 1;
  if (radio2.checked) count += 1;
  if (radio3.checked) count += 1;
  if (radio4.checked) count += 1;
  if (radio5.checked) count += 1;

  return count;
};

const cancleChecked = () => {
  nameInput.value = "";

  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
  radio4.checked = false;
  radio5.checked = false;
};
