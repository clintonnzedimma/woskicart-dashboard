$(function() {
  function applyTheme(theme) {
    $('body').attr('data-theme', theme);
    localStorage.setItem('wcTheme', theme);
  }

  var savedTheme = localStorage.getItem('wcTheme') || 'default';
  applyTheme(savedTheme);

  $('.theme-switcher .dropdown-item').on('click', function() {
    var theme = $(this).data('theme');
    applyTheme(theme);
  });

  $('#sidebarToggle').on('click', function() {
    $('#sidebar').toggleClass('collapsed');
  });

  $('.alert-trigger').on('click', function() {
    var type = $(this).data('type');
    var alert = $('<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">'
      + 'This is a ' + type + ' alert!' +
      '<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>');
    $('.alerts-container').append(alert);
  });

  // Dashboard charts
  if (document.getElementById('salesChart')) {
    new Chart(document.getElementById('salesChart'), {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 9],
          borderColor: 'rgba(13,110,253,0.5)',
          backgroundColor: 'rgba(13,110,253,0.2)',
          tension: .4
        }]
      }
    });
  }

  if (document.getElementById('ordersStatusChart')) {
    new Chart(document.getElementById('ordersStatusChart'), {
      type: 'doughnut',
      data: {
        labels: ['Pending', 'Paid', 'Shipped', 'Completed'],
        datasets: [{
          data: [30, 50, 20, 10],
          backgroundColor: ['#ffc107', '#0d6efd', '#17a2b8', '#28a745']
        }]
      }
    });
  }

  if (document.getElementById('topProductsChart')) {
    new Chart(document.getElementById('topProductsChart'), {
      type: 'bar',
      data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
          label: 'Sales',
          data: [65, 59, 80, 81],
          backgroundColor: 'rgba(13,110,253,0.5)'
        }]
      }
    });
  }

  if (document.getElementById('customersChart')) {
    new Chart(document.getElementById('customersChart'), {
      type: 'bar',
      data: {
        labels: ['USA', 'UK', 'Canada', 'Germany'],
        datasets: [{
          label: 'Customers',
          data: [50, 40, 30, 20],
          backgroundColor: 'rgba(40,167,69,0.5)'
        }]
      }
    });
  }

  // Charts page filters
  $('.chart-filter .btn').on('click', function(){
    $('.chart-filter .btn').removeClass('active');
    $(this).addClass('active');
    // Placeholder: would reload charts with new data
  });
});
