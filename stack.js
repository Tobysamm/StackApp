let box = document.querySelector("#box div");
const push = document.getElementById("push");
const pop = document.getElementById("pop");
const peek = document.getElementById("peek");
const isEmpty = document.getElementById("is-empty");
const size = document.getElementById("size");
const print = document.getElementById("print");
const clear = document.getElementById("clear");

// Modal DOM object selection.
const modal = document.getElementById("modal");
const info = document.getElementById("info");

// Modal responsive function.
function showModal() {
  modal.classList.remove("modal-scss");
  modal.classList.add("modal-open");
  setTimeout(() => {
    info.style.visibility = "visible";
  }, 1500);

  modal.onclick = function () {
    this.classList.remove("modal-open");
    this.classList.add("modal-scss");
    setTimeout(() => {
      info.style.visibility = "hidden";
      info.innerHTML = "";
    }, 15);
  };
}

// Using a constructor function.
function Stack(arr, idx) {
  this.items = arr;
  this.count = idx;
}

// Add element to top of stack using prototype chaining.
Stack.prototype.push = function (datas) {
  this.items[this.count] = datas;
  let text = `Stack ${this.count}`;
  this.count++;
  datas.innerHTML = text;
  datas.className = "data";
  box.appendChild(datas);
  return this.count - 1;
};

// Return and remove top element in stack.
// Return undefined if stack is empty.
Stack.prototype.pop = function () {
if (this.count === 0) return undefined;
  let deletedItem = this.items[this.count - 1];
  let lastData = box.lastElementChild
  this.count -= 1
  lastData.remove();
  return deletedItem;
};

// Check top element in stack.
Stack.prototype.peek = function () {
  if (this.count !== 0) {
    info.innerText = `Top data is ${this.items[this.count - 1].innerText}`;
  } else {
    info.innerText = "Stack is empty";
  }
  showModal();
  return this.items[this.count - 1];
};

// Check if no data in stack.
Stack.prototype.isEmpty = function () {
  this.count === 0
    ? (info.innerText = "Stack is empty")
    : (info.innerText = "Stack is NOT empty");
  showModal();
  return this.count == 0;
};

// Check data added to stack (Stack size).
Stack.prototype.size = function () {
  this.count !== 0
    ? (info.innerText = `${this.count} datas present`)
    : (info.innerText = "No data in stack");
  showModal();
  return this.count;
};

// Print all datas in stack.
Stack.prototype.print = function () {
  if (this.count !== 0) {
    for (let i = 0; i < this.count; i++) {
      let data = this.items[i].innerText + " ";
      info.append(data);
    }
  } else {
    info.innerText = "No data has been pushed";
  }
  showModal();
  return this.count.length;
};

// Clear stack after adding data.
Stack.prototype.clear = function () {
  this.items = [];
  this.count = 0;
  box.remove();
  setTimeout(() => {
    window.location.reload();
  }, 1000);
  return this.items;
};

const stack = new Stack([], 0);

// Invoking stack functions after clicking a button.
function runPush() {
  stack.push(document.createElement("div"));
}
function runPop() {
  stack.pop();
}
function runPeek() {
  stack.peek();
}
function checkEmpty() {
  stack.isEmpty();
}
function checkSize() {
  stack.size();
}
function printData() {
  stack.print();
}
function clearData() {
  stack.clear();
}

push.addEventListener("click", runPush);
pop.addEventListener("click", runPop);
peek.addEventListener("click", runPeek);
isEmpty.addEventListener("click", checkEmpty);
size.addEventListener("click", checkSize);
print.addEventListener("click", printData);
clear.addEventListener("click", clearData);