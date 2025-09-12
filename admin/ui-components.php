<?php include 'partials/header.php'; ?>
<h1 class="h3 mb-4">UI Components</h1>
<section class="mb-5">
  <h5>Buttons</h5>
  <button class="btn btn-primary me-2">Primary</button>
  <button class="btn btn-secondary me-2">Secondary</button>
  <button class="btn btn-success me-2">Success</button>
  <button class="btn btn-danger">Danger</button>
</section>
<section class="mb-5">
  <h5>Forms</h5>
  <form class="row g-3">
    <div class="col-md-6"><label class="form-label">Email</label><input type="email" class="form-control" placeholder="email@example.com"></div>
    <div class="col-md-6"><label class="form-label">Password</label><input type="password" class="form-control" placeholder="Password"></div>
    <div class="col-12"><label class="form-label">Address</label><input type="text" class="form-control" placeholder="1234 Main St"></div>
    <div class="col-12"><button class="btn btn-primary">Submit</button></div>
  </form>
</section>
<section class="mb-5">
  <h5>Tables</h5>
  <table class="table table-striped"><thead><tr><th>#</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>1</td><td>Item</td><td>100</td></tr></tbody></table>
</section>
<section class="mb-5">
  <h5>Alerts</h5>
  <button class="btn btn-success alert-trigger me-2" data-type="success">Success Alert</button>
  <button class="btn btn-danger alert-trigger" data-type="danger">Error Alert</button>
</section>
<section class="mb-5">
  <h5>Modals</h5>
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">Open Modal</button>
  <div class="modal fade" id="demoModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Modal title</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body">Modal body text</div><div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Close</button><button class="btn btn-primary">Save changes</button></div></div></div>
  </div>
</section>
<section class="mb-5">
  <h5>Badges</h5>
  <span class="badge bg-primary">Primary</span>
  <span class="badge bg-success">Success</span>
  <span class="badge bg-danger">Danger</span>
</section>
<section class="mb-5">
  <h5>Cards</h5>
  <div class="card p-3">Example card with text.</div>
</section>
<section class="mb-5">
  <h5>Sample Chart</h5>
  <canvas id="componentsChart" height="100"></canvas>
</section>
<script>
if(document.getElementById('componentsChart')){
  new Chart(document.getElementById('componentsChart'),{
    type:'line',
    data:{labels:['A','B','C'],datasets:[{label:'Data',data:[3,1,4],borderColor:'rgba(13,110,253,0.5)'}]}
  });
}
</script>
<?php include 'partials/footer.php'; ?>
