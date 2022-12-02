// get input:date
const dateChoose = document.getElementsByClassName("dateText");

// handler date with datepicker jquery
$(function () {
  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>',
    dateFormat: "DD dd-mm-yy",
    onSelect: function (dateText) {
      for (let i = 0; i < dateChoose.length; i++) {
        if (dateChoose[i].innerHTML === "") {
          dateChoose[i].innerHTML = dateText;
        }
      }
    },
  });
});
