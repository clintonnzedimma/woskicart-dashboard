<?php include 'partials/header.php'; ?>
<h1 class="h3 mb-4">Customer: John Doe</h1>
<div class="row mb-4">
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Contact</h5>
      <p>Email: john@example.com<br>Phone: 123456789</p>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card p-3">
      <h5>Orders</h5>
      <p>Total Orders: 5<br>Total Spent: $500</p>
    </div>
  </div>
</div>
<div class="card p-3">
  <h5>Recent Orders</h5>
  <table class="table"><thead><tr><th>#</th><th>Status</th><th>Total</th></tr></thead>
    <tbody><tr><td>1001</td><td>Pending</td><td>$99</td></tr></tbody>
  </table>
</div>
<?php include 'partials/footer.php'; ?>
