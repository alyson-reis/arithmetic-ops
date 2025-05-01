document.querySelectorAll(".operation").forEach(operation => {
    const btn = operation.querySelector("button");
    btn.addEventListener("click", () => {
      const num1 = parseFloat(operation.querySelectorAll("input")[0].value);
      const num2 = parseFloat(operation.querySelectorAll("input")[1].value);
      const resultSpan = operation.querySelector(".result");
      const type = operation.dataset.operation;
  
      let result;
  
      switch (type) {
        case "sum":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "division":
          if (num2 === 0) {
            result = "Erro";
          } else {
            result = num1 / num2;
            result = Number.isInteger(result) ? result : result.toFixed(2);
          }
          break;
      }
  
      resultSpan.textContent = isNaN(result) ? "Invalid" : result;
    });
  });
  