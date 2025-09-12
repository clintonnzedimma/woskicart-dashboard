<?php include 'partials/header.php'; ?>
<h1 class="h3 mb-4">Product Form</h1>
<ul class="nav nav-tabs" id="productTab" role="tablist">
  <li class="nav-item" role="presentation"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#general" type="button">General</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#images" type="button">Images</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#variants" type="button">Variants</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#meta" type="button">Meta</button></li>
</ul>
<div class="tab-content border border-top-0 p-3" id="productTabContent">
  <div class="tab-pane fade show active" id="general" role="tabpanel">
    <div class="mb-3"><label class="form-label">Name</label><input type="text" class="form-control"></div>
    <div class="mb-3"><label class="form-label">Price</label><input type="number" class="form-control"></div>
    <div class="mb-3"><label class="form-label">Description</label><textarea class="form-control"></textarea></div>
  </div>
  <div class="tab-pane fade" id="images" role="tabpanel">
    <div class="mb-3"><label class="form-label">Upload Images</label><input type="file" class="form-control" multiple></div>
  </div>
  <div class="tab-pane fade" id="variants" role="tabpanel">
    <p>Variant options placeholder.</p>
  </div>
  <div class="tab-pane fade" id="meta" role="tabpanel">
    <div class="mb-3"><label class="form-label">Meta Title</label><input type="text" class="form-control"></div>
    <div class="mb-3"><label class="form-label">Meta Description</label><textarea class="form-control"></textarea></div>
  </div>
</div>
<div class="mt-3">
  <button class="btn btn-primary">Save Product</button>
</div>
<?php include 'partials/footer.php'; ?>
