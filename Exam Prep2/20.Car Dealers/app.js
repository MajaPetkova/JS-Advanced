window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById("publish");
  const makeEl = document.getElementById("make");
  const modelEl = document.getElementById("model");
  const yearEl = document.getElementById("year");
  const fuelEl = document.getElementById("fuel");
  const originalPriceEl = document.getElementById("original-cost");
  const sellPriceEl = document.getElementById("selling-price");
  const tableBodyEl = document.getElementById("table-body");
  publishBtn.addEventListener("click", onPublish);

  function onPublish(e) {
    e.preventDefault();
    if (
      !makeEl.value &&
      !modelEl.value &&
      !yearEl.value &&
      !fuelEl.value &&
      !originalPriceEl.value &&
      !sellPriceEl.value
    ) {
      return;
    }
    if (sellPriceEl.value < originalPriceEl.value) {
      return;
    }
    const rowElement = document.createElement("tr");
    rowElement.classList.add("row");

    let makeCellEl = document.createElement("td");
    makeCellEl.textContent = makeEl.value;

    let modelCellEl = document.createElement("td");
    modelCellEl.textContent = modelEl.value;

    let yearCellEl = document.createElement("td");
    yearCellEl.textContent = yearEl.value;

    let fuelCellEl = document.createElement("td");
    fuelCellEl.textContent = fuelEl.value;

    let originalPriceCellEl = document.createElement("td");
    originalPriceCellEl.textContent = originalPriceEl.value;

    let sellPriceCellEl = document.createElement("td");
    sellPriceCellEl.textContent = sellPriceEl.value;

    let editBtn = document.createElement("button");
    editBtn.className = "action-btn edit";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editHandler);

    let sellBtn = document.createElement("button");
    sellBtn.className = "action-btn sell";
    sellBtn.textContent = "Sell";
    sellBtn.addEventListener("click", soldCar);

    rowElement.appendChild(makeCellEl);
    rowElement.appendChild(modelCellEl);
    rowElement.appendChild(yearCellEl);
    rowElement.appendChild(fuelCellEl);
    rowElement.appendChild(originalPriceCellEl);
    rowElement.appendChild(sellPriceCellEl);
    rowElement.appendChild(editBtn);
    rowElement.appendChild(sellBtn);
    tableBodyEl.appendChild(rowElement);
    // console.log(makeEl.value, modelEl.value, yearEl.value, fuelEl.value, originalPriceEl.value,sellPriceEl.value );

    makeEl.value = "";
    modelEl.value = "";
    yearEl.value = "";
    fuelEl.value = "";
    originalPriceEl.value = "";
    sellPriceEl.value = "";

    function editHandler() {
      makeEl.value = makeCellEl.textContent;
      modelEl.value = modelCellEl.textContent;
      yearEl.value = yearCellEl.textContent;
      fuelEl.value = fuelCellEl.textContent;
      originalPriceEl.value = originalPriceCellEl.textContent;
      sellPriceEl.value = sellPriceCellEl.textContent;

      rowElement.remove();
    }

    function soldCar() {
      const soldList = document.getElementById("cars-list");
      let totalProfitEl = document.getElementById("profit");
  
      const carList = document.createElement("li");
      carList.className = "each-list";

      const spanName = document.createElement("span");
      spanName.textContent = makeCellEl.textContent + ' ' + modelCellEl.textContent;
      
      const spanYear = document.createElement("span");
      spanYear.textContent = yearCellEl.textContent;

      const spanSellPrice = document.createElement("span");
      spanSellPrice.textContent = sellPriceCellEl.textContent-originalPriceCellEl.textContent ;
      
      carList.appendChild(spanName);
      carList.appendChild(spanYear);
      carList.appendChild(spanSellPrice);
      soldList.appendChild(carList);
      rowElement.remove();
      
      let currentCarPrice = Number(totalProfitEl.textContent)
      totalProfitEl.textContent= (currentCarPrice + Number(spanSellPrice.textContent)).toFixed(2)
     
    }
  }
}
