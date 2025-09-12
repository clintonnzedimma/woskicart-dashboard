<?php include 'partials/header.php'; ?>
<h1 class="mb-4">Dashboard</h1>
<div class="row g-4 mb-4">
  <div class="col-md-3">
    <div class="card text-center p-3">
      <h5>Orders</h5>
      <p class="display-6">120</p>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card text-center p-3">
      <h5>Revenue</h5>
      <p class="display-6">$3,200</p>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card text-center p-3">
      <h5>Customers</h5>
      <p class="display-6">85</p>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card text-center p-3">
      <h5>Products</h5>
      <p class="display-6">240</p>
    </div>
  </div>
</div>
<div class="row g-4">
  <div class="col-lg-8">
    <div class="card p-3">
      <h5>Sales Overview</h5>
      <canvas id="salesChart" height="150"></canvas>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card p-3 mb-4">
      <h5>Orders by Status</h5>
      <canvas id="ordersStatusChart" height="150"></canvas>
    </div>
    <div class="card p-3">
      <h5>Top Products</h5>
      <canvas id="topProductsChart" height="150"></canvas>
    </div>
  </div>
</div>
<div class="row mt-4">
  <div class="col-12">
    <div class="card p-3">
      <h5>Recent Orders</h5>
      <table class="table table-striped">
        <thead><tr><th>#</th><th>Customer</th><th>Status</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>1001</td><td>John Doe</td><td><span class="badge bg-warning">Pending</span></td><td>$99</td></tr>
          <tr><td>1002</td><td>Jane Smith</td><td><span class="badge bg-success">Completed</span></td><td>$150</td></tr>
          <tr><td>1003</td><td>Bob Lee</td><td><span class="badge bg-info">Shipped</span></td><td>$200</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<?php include 'partials/footer.php'; ?>
