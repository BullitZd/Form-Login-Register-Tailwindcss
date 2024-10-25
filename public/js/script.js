$(document).ready(function() {
  
  // Menampilkan form login dan register
  const reg = $(".register-section");
  const login = $(".login-section");
  
  reg.removeClass("hidden");
  
  $("#link-log").click(function() {
    reg.addClass("hidden");
    login.removeClass("hidden");
  });
  
  $("#link-reg").click(function() {
    login.addClass("hidden");
    reg.removeClass("hidden");
  });
  
  //Icon Mata password
  $("#togglePassword1").click(function() {
  let passwordField = $("#password1");

  if (passwordField.attr("type") === "password") {
    passwordField.attr("type", "text");
    $(this).text("visibility_off");
  } else {
    passwordField.attr("type", "password");
    $(this).text("visibility");
  }
  
  // console.log("Current input type: ", passwordField.attr("type"));
});

  $("#togglePassword").click(function() {
  let passwordField = $("#password");

  if (passwordField.attr("type") === "password") {
    passwordField.attr("type", "text");
    $(this).text("visibility_off");
  } else {
    passwordField.attr("type", "password");
    $(this).text("visibility");
  }
  
  // console.log("Current input type: ", passwordField.attr("type"));
  });
  
  // Input kosong error
  $(".btn").click(function(e) {

    // Seleksi semua input di dalam form yang memiliki kelas .inp
    $(".inp").each(function() {
        const input = $(this); // Ambil elemen input saat ini

        if (input.val().trim() === "") {
            // Jika input kosong, tambahkan kelas untuk mengubah warna placeholder
            input.addClass("text-red");
        } else {
            // Jika input sudah diisi, hapus kelas text-red
            input.removeClass("text-red");
        }
    });
});


  
});