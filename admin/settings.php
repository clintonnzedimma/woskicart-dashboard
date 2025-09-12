<?php include 'partials/header.php'; ?>
<h1 class="h3 mb-4">Settings</h1>
<ul class="nav nav-tabs" id="settingsTab" role="tablist">
  <li class="nav-item" role="presentation"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#general" type="button">General</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#stock" type="button">Stock</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#checkout" type="button">Checkout</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#payments" type="button">Payments</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#routes" type="button">Routes</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#appearance" type="button">Appearance</button></li>
</ul>
<div class="tab-content border border-top-0 p-3" id="settingsTabContent">
  <div class="tab-pane fade show active" id="general" role="tabpanel"><p>General settings form.</p></div>
  <div class="tab-pane fade" id="stock" role="tabpanel"><p>Stock settings form.</p></div>
  <div class="tab-pane fade" id="checkout" role="tabpanel"><p>Checkout settings form.</p></div>
  <div class="tab-pane fade" id="payments" role="tabpanel"><p>Payments settings form.</p></div>
  <div class="tab-pane fade" id="routes" role="tabpanel"><p>Routes settings form.</p></div>
  <div class="tab-pane fade" id="appearance" role="tabpanel">
    <div class="mb-3">
      <label class="form-label">Theme</label>
      <div class="dropdown theme-switcher">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="appearanceThemeDropdown" data-bs-toggle="dropdown">Select Theme</button>
        <ul class="dropdown-menu" aria-labelledby="appearanceThemeDropdown">
          <li><span class="dropdown-item" data-theme="default">Default</span></li>
          <li><span class="dropdown-item" data-theme="dark">Dark</span></li>
          <li><span class="dropdown-item" data-theme="custom">Custom</span></li>
        </ul>
      </div>
    </div>
    <p>Custom theme colors can be adjusted via <code>custom.css</code>.</p>
  </div>
</div>
<?php include 'partials/footer.php'; ?>
