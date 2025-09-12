<?php include 'partials/header.php'; ?>
<h1 class="h3 mb-4">Charts</h1>
<div class="chart-filter btn-group mb-4" role="group">
  <button class="btn btn-outline-primary active">Week</button>
  <button class="btn btn-outline-primary">Month</button>
  <button class="btn btn-outline-primary">Year</button>
</div>
<div class="row g-4">
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Sales Over Time</h5>
      <canvas id="salesChart" height="200"></canvas>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Orders by Status</h5>
      <canvas id="ordersStatusChart" height="200"></canvas>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Top Selling Products</h5>
      <canvas id="topProductsChart" height="200"></canvas>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Customers by Country</h5>
      <canvas id="customersChart" height="200"></canvas>
    </div>
  </div>
</div>
<?php include 'partials/footer.php'; ?>
