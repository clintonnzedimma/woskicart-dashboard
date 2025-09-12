<?php include 'partials/header.php'; ?>
<h1 class="h3 mb-3">Orders</h1>
<table class="table table-bordered table-striped">
  <thead><tr><th>ID</th><th>Customer</th><th>Status</th><th>Total</th><th></th></tr></thead>
  <tbody>
    <tr><td>1001</td><td>John Doe</td><td><span class="badge bg-warning">Pending</span></td><td>$99</td><td><a href="order-detail.php" class="btn btn-sm btn-secondary">View</a></td></tr>
  </tbody>
</table>
<?php include 'partials/footer.php'; ?>
