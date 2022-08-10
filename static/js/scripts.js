$(document).ready(function () {
  $(".list-group-item-action").click(function () {
    const product_title = $(this).attr("id");
    $.get("http://127.0.0.1:5000/detail?title=" + product_title).then(function (result) {
      $("#ModalLabel").text(result.title);
      $("#ModalContent").text(result.content);
      $("#Modal").modal("show");
    });
  });
});
