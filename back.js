const form = document.getElementById("demand-form");
const resultsDiv = document.getElementById("demand-results");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = form.elements["product-name"].value;
  const previousMonthSales = Number(form.elements["previous-month-sales"].value);
  const conversionRate = Number(form.elements["conversion-rate"].value);
  const marketFactor = Number(form.elements["market-factor"].value);

  const demand = previousMonthSales * conversionRate * marketFactor;

  resultsDiv.innerHTML = `
    <h2>Results for ${productName}</h2>
    <p>The estimated demand for next month is <strong>${demand}</strong>.</p>
  `;

  form.reset();
});
