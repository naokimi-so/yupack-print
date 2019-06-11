$(function(){
  $("#send").on("click", function() {
    var data = {
      "name":  $("#name").val(),
      "address": $("#address").val(),
      "postal_code": $("#postal-code").val(),
      "tel": $("#tel").val()
    }
    localStorage.setItem("datalist", JSON.stringify(data));
    console.table(data);
    var data = localStorage.getItem("datalist");
    data = JSON.parse(data);
    console.table(data);
  });
  console.table("asbcjaks");
  var data = localStorage.getItem("datalist");
  console.table(data);
  data = JSON.parse(data);
  $("#lp-name").text(data.name);
  $("#lp-address").text(data.address);
  $("#lp-postal-code0").text(data.postal_code[0]);
  $("#lp-postal-code1").text(data.postal_code[1]);
  $("#lp-postal-code2").text(data.postal_code[2]);
  $("#lp-postal-code3").text(data.postal_code[3]);
  $("#lp-postal-code4").text(data.postal_code[4]);
  $("#lp-postal-code5").text(data.postal_code[5]);
  $("#lp-postal-code6").text(data.postal_code[6]);
  $("#lp-tel").text(data.tel);

});
