var showDialog = function (id) {
  document
    .getElementById(id)
    .show();
};

var hideDialog = function (id) {
  document
    .getElementById(id)
    .hide();
};

var fromTemplate = function () {
  var dialog = document.getElementById('dialog-3');

  if (dialog) {
    dialog.show();
  }
  else {
    ons.createDialog('dialog.html')
      .then(function (dialog) {
        dialog.show();
      });
  }
};

function toggleToast() {
  document.querySelector('ons-toast').toggle();
}