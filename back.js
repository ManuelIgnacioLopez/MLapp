const form = document.getElementById("demand-form");
const resultsDiv = document.getElementById("demand-results");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = form.elements["product-name"].value;
  const salesForecast = Number(form.elements["sales-forecast"].value);
  const avgSalePrice = Number(form.elements["average-sale-price"].value);
  const conversionRate = Number(form.elements["conversion-rate"].value);

  const demand = salesForecast * avgSalePrice * conversionRate;

  resultsDiv.innerHTML = `
    <h2>Results for ${productName}</h2>
    <p>The estimated demand for this
