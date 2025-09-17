(function ($) {
  'use strict';

  const THEME_KEY = 'woskicart-theme';
  const themes = ['default', 'dark', 'custom'];

  function applyTheme(theme) {
    const sanitized = themes.includes(theme) ? theme : 'default';
    $('body').removeClass(themes.map((t) => `theme-${t}`).join(' ')).addClass(`theme-${sanitized}`);
    $('[data-theme-select]').removeClass('active');
    $(`[data-theme-select="${sanitized}"]`).addClass('active');
    localStorage.setItem(THEME_KEY, sanitized);
  }

  function initTheme() {
    const stored = localStorage.getItem(THEME_KEY) || 'default';
    applyTheme(stored);
  }

  function toggleSidebar() {
    $('.sidebar').toggleClass('show');
  }

  function setupSidebar() {
    $('#sidebarToggle').on('click', function (e) {
      e.preventDefault();
      toggleSidebar();
    });

    $('.sidebar .nav-link').on('click', function () {
      if (window.matchMedia('(max-width: 992px)').matches) {
        $('.sidebar').removeClass('show');
      }
    });
  }

  function setupNavigation() {
    const baseUrl = $('body').data('base-url') || '';
    const pageId = $('body').data('page-id');
    const navMap = {
      dashboard: 'index.html',
      products: 'products/index.html',
      'products-create': 'products/create/index.html',
      'products-edit': 'products/edit/index.html',
      categories: 'categories/index.html',
      tags: 'tags/index.html',
      orders: 'orders/index.html',
      'orders-detail': 'orders/detail/index.html',
      customers: 'customers/index.html',
      'customers-detail': 'customers/detail/index.html',
      reviews: 'reviews/index.html',
      transactions: 'transactions/index.html',
      'transactions-detail': 'transactions/detail/index.html',
      settings: 'settings/index.html',
      boilerplate: 'boilerplate/index.html',
      components: 'components/index.html',
      charts: 'charts/index.html',
    };

    $('[data-nav-target]').each(function () {
      const target = $(this).data('nav-target');
      if (navMap[target]) {
        $(this).attr('href', `${baseUrl}${navMap[target]}`);
      }
      if (pageId && (pageId === target || pageId.startsWith(target))) {
        $(this).addClass('active');
      }
    });
  }

  function setupTooltips() {
    $('[data-bs-toggle="tooltip"]').each(function () {
      new bootstrap.Tooltip(this);
    });
  }

  function setupThemeSwitcher() {
    $('[data-theme-select]').on('click', function () {
      const theme = $(this).data('theme-select');
      applyTheme(theme);
    });
  }

  window.Alert = {
    base(type, message, options = {}) {
      const id = `alert-${Date.now()}`;
      const icon = type === 'success' ? 'bi-check-circle-fill' : type === 'error' ? 'bi-x-circle-fill' : 'bi-info-circle-fill';
      const alert = $(`\
        <div class="alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show alert-glossy" id="${id}" role="alert">
          <div class="d-flex align-items-center gap-2">
            <i class="bi ${icon} fs-5"></i>
            <div>${message}</div>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `);
      const container = $('.alert-container');
      container.append(alert);
      const timeout = options.timeout ?? 4000;
      if (timeout) {
        setTimeout(() => {
          const bsAlert = bootstrap.Alert.getOrCreateInstance(alert[0]);
          bsAlert.close();
        }, timeout);
      }
    },
    success(message, options) {
      this.base('success', message, options);
    },
    error(message, options) {
      this.base('error', message, options);
    },
    info(message, options) {
      this.base('info', message, options);
    },
  };

  window.Loader = {
    show() {
      $('.loader-overlay').fadeIn(150);
    },
    hide() {
      $('.loader-overlay').fadeOut(150);
    },
  };

  function setupLoginForm() {
    const form = $('#loginForm');
    if (!form.length) return;
    form.on('submit', function (e) {
      e.preventDefault();
      const button = form.find('button[type="submit"]');
      button.prop('disabled', true);
      const spinner = $('<span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>');
      button.append(spinner);
      Loader.show();
      setTimeout(() => {
        Loader.hide();
        spinner.remove();
        button.prop('disabled', false);
        Alert.success('Logged in successfully (demo)');
      }, 1500);
    });
  }

  function handleImagePreview(input, previewContainer) {
    if (!input.files) return;
    const container = $(previewContainer);
    container.empty();
    Array.from(input.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const card = $(`\
          <div class="preview-card">
            <img src="${event.target.result}" class="img-fluid rounded mb-2" alt="Preview" />
            <div class="small text-muted">${file.name}</div>
          </div>
        `);
        container.append(card);
      };
      reader.readAsDataURL(file);
    });
  }

  function setupImageUploads() {
    $(document).on('change', '.image-upload-input', function () {
      const previewTarget = $(this).data('preview-target');
      handleImagePreview(this, previewTarget);
    });

    $('.dnd-area').each(function () {
      const area = $(this);
      const input = area.find('input[type="file"]');

      area.on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        area.addClass('dragover');
      });

      area.on('dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        area.removeClass('dragover');
      });

      area.on('drop', function (e) {
        const files = e.originalEvent.dataTransfer.files;
        input[0].files = files;
        input.trigger('change');
      });
    });
  }

  function cartesian(arr) {
    return arr.reduce(
      (a, b) =>
        a
          .map((x) => b.map((y) => x.concat([y])))
          .reduce((a, b) => a.concat(b), []),
      [[]]
    );
  }

  function renderVariantTable(combinations) {
    const body = $('#variantCombinations');
    if (!body.length) return;
    body.empty();
    combinations.forEach((combo, index) => {
      const label = combo.map((c) => `<span class="badge bg-light text-dark me-1">${c.option}</span>`).join('');
      const row = $(`\
        <tr>
          <td class="fw-semibold">${label}</td>
          <td><input type="number" class="form-control" value="49.99" min="0" step="0.01" /></td>
          <td><input type="number" class="form-control" value="20" min="0" step="1" /></td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <label class="btn btn-outline-secondary btn-sm mb-0">
                <i class="bi bi-upload me-1"></i> Upload
                <input type="file" class="d-none variant-image-input" accept="image/*" data-preview="#variantPreview-${index}" />
              </label>
              <div id="variantPreview-${index}" class="preview-card p-2 mb-0" style="display:none;"></div>
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-light btn-sm text-danger remove-variant-row"><i class="bi bi-trash"></i></button>
          </td>
        </tr>
      `);
      body.append(row);
    });
  }

  function setupVariantsBuilder() {
    const attributes = [];
    const list = $('#variantAttributeList');

    function refreshAttributeList() {
      if (!list.length) return;
      list.empty();
      attributes.forEach((attr, index) => {
        const item = $(`\
          <div class="d-flex align-items-center justify-content-between border rounded p-2 mb-2">
            <div>
              <div class="fw-semibold">${attr.name}</div>
              <div class="text-muted-soft small">${attr.values.join(', ')}</div>
            </div>
            <button class="btn btn-sm btn-outline-danger remove-variant-attr" data-index="${index}"><i class="bi bi-x"></i></button>
          </div>
        `);
        list.append(item);
      });
      const combos = attributes.length ? cartesian(attributes.map((attr) => attr.values.map((value) => ({ attribute: attr.name, option: value })))) : [];
      renderVariantTable(combos);
    }

    $('#addVariantAttribute').on('click', function () {
      const name = $('#variantAttributeName').val().trim();
      const values = $('#variantAttributeValues').val().split(',').map((v) => v.trim()).filter(Boolean);
      if (!name || !values.length) {
        Alert.error('Please provide attribute name and comma separated values.');
        return;
      }
      attributes.push({ name, values });
      $('#variantAttributeName').val('');
      $('#variantAttributeValues').val('');
      refreshAttributeList();
    });

    $(document).on('click', '.remove-variant-attr', function () {
      const index = $(this).data('index');
      attributes.splice(index, 1);
      refreshAttributeList();
    });

    $(document).on('change', '.variant-image-input', function () {
      const preview = $($(this).data('preview'));
      const [file] = this.files;
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (event) {
        preview.html(`<img src="${event.target.result}" class="img-fluid rounded" alt="Variant" />`).show();
      };
      reader.readAsDataURL(file);
    });

    $(document).on('click', '.remove-variant-row', function () {
      $(this).closest('tr').remove();
    });
  }

  function initCharts() {
    const ChartJs = window.Chart;
    if (!ChartJs) return;

    const palette = getComputedStyle(document.body);
    const accent = palette.getPropertyValue('--accent-color').trim() || '#0081ff';
    const textColor = palette.getPropertyValue('--text-color').trim() || '#1f2933';
    const muted = palette.getPropertyValue('--muted-color').trim() || '#6b7280';

    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
      new ChartJs(salesCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Sales',
              data: [320, 450, 380, 520, 610, 720, 680],
              fill: true,
              backgroundColor: ChartJs.helpers.color(accent).alpha(0.12).rgbString(),
              borderColor: accent,
              tension: 0.4,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: accent,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              ticks: { color: muted },
              grid: { display: false },
            },
            y: {
              ticks: { color: muted },
              grid: { color: ChartJs.helpers.color(muted).alpha(0.1).rgbString() },
            },
          },
        },
      });
    }

    const ordersCtx = document.getElementById('ordersStatusChart');
    if (ordersCtx) {
      new ChartJs(ordersCtx, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'Processing', 'Cancelled'],
          datasets: [
            {
              data: [55, 30, 15],
              backgroundColor: [accent, '#22c55e', '#ef4444'],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor },
            },
          },
        },
      });
    }

    const productsCtx = document.getElementById('topProductsChart');
    if (productsCtx) {
      new ChartJs(productsCtx, {
        type: 'bar',
        data: {
          labels: ['Shoes', 'Jackets', 'Bags', 'Accessories', 'Home'],
          datasets: [
            {
              label: 'Revenue',
              data: [480, 390, 320, 270, 350],
              backgroundColor: accent,
              borderRadius: 12,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              ticks: { color: textColor },
              grid: { display: false },
            },
            y: {
              ticks: { color: muted },
              grid: { color: ChartJs.helpers.color(muted).alpha(0.1).rgbString() },
            },
          },
        },
      });
    }

    const customersCtx = document.getElementById('customersCountryChart');
    if (customersCtx) {
      new ChartJs(customersCtx, {
        type: 'bar',
        data: {
          labels: ['USA', 'UK', 'Germany', 'Canada', 'Australia'],
          datasets: [
            {
              label: 'Customers',
              data: [1200, 980, 860, 720, 650],
              backgroundColor: [accent, '#22c55e', '#f97316', '#6366f1', '#14b8a6'],
              borderRadius: 12,
            },
          ],
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              ticks: { color: muted },
              grid: { color: ChartJs.helpers.color(muted).alpha(0.1).rgbString() },
            },
            y: {
              ticks: { color: textColor },
              grid: { display: false },
            },
          },
        },
      });
    }
  }

  function setupChartsFilters() {
    $('#chartRangeFilter').on('change', function () {
      Alert.info(`Filtering charts by ${$(this).val()} (demo)`);
    });
  }

  function setupStatusDropdowns() {
    $('#orderStatusSelect').on('change', function () {
      Alert.success(`Status updated to ${$(this).val()}`);
    });
    $('#transactionStatusSelect').on('change', function () {
      Alert.info(`Transaction status changed to ${$(this).val()}`);
    });
  }

  function setupFormValidation() {
    $('form[data-validate="true"]').on('submit', function (e) {
      const form = this;
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        Alert.error('Please fill in the required fields.');
      } else {
        Alert.success('Saved successfully (demo).');
      }
      $(form).addClass('was-validated');
    });
  }

  function initialize() {
    initTheme();
    setupThemeSwitcher();
    setupSidebar();
    setupNavigation();
    setupTooltips();
    setupLoginForm();
    setupImageUploads();
    setupVariantsBuilder();
    initCharts();
    setupChartsFilters();
    setupStatusDropdowns();
    setupFormValidation();
  }

  $(document).ready(initialize);
})(jQuery);
