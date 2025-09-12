<?php include 'partials/header.php'; ?>
<div class="d-flex justify-content-between align-items-center mb-3">
  <h1 class="h3">Products</h1>
  <a href="product-form.php" class="btn btn-primary">Add Product</a>
</div>
<table class="table table-bordered table-striped">
  <thead><tr><th>ID</th><th>Name</th><th>Price</th><th>Status</th><th></th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Sample Product</td><td>$19.99</td><td><span class="badge bg-success">Active</span></td><td><a href="product-form.php" class="btn btn-sm btn-secondary">Edit</a></td></tr>
  </tbody>
</table>
<?php include 'partials/footer.php'; ?>
