<?php include 'partials/header.php'; ?>
<h1 class="h3 mb-4">Order #1001</h1>
<div class="row mb-4">
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Customer</h5>
      <p>John Doe<br>john@example.com</p>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Order Info</h5>
      <p>Status: <span class="badge bg-warning">Pending</span><br>Total: $99</p>
    </div>
  </div>
</div>
<div class="card p-3">
  <h5>Items</h5>
  <table class="table"><thead><tr><th>Product</th><th>Qty</th><th>Price</th></tr></thead>
    <tbody><tr><td>Sample Product</td><td>1</td><td>$99</td></tr></tbody>
  </table>
</div>
<?php include 'partials/footer.php'; ?>
