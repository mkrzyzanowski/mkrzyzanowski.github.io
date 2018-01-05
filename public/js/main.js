// Copyright: Michael Rose (mmistakes)
// https://github.com/mmistakes/made-mistakes-jekyll/blob/master/src/assets/javascripts/main.js
// Static comments
(function($) {
  var $comments = $(".js-comments");

  $("#comment-form").submit(function() {
    var form = this;

    $("#comment-form .js-notice").addClass("hidden");

    $(form).addClass("disabled");
    
    $("#comment-form-submit")
    .html('<span class="fas fa-spinner fa-spin"></span> Loading...')
    .prop("disabled",true);
    
    grecaptcha.execute();
    return false;
  });
})(jQuery);

(function($) {
    $(".comment-reply a").click(function() {
      $("#cancel-comment-reply-link")
        .removeClass("hidden")
        .append("")
        .append($(this).data("name"));
      $("#comment-parent").val($(this).data("index"));
    });

    $("#cancel-comment-reply-link").click(function() {
      $(this).addClass("hidden");
      $("#comment-parent").val("");
    });
}
)(jQuery);

function captchaComplete() {
    var form = $("#comment-form");
    $.ajax({
        type: form.attr("method"),
        url: form.attr("action"),
        data: form.serialize(),
        contentType: "application/x-www-form-urlencoded",
        success: function(data) {
          resetSubmitButton();
          $("#comment-form .js-notice")
            .removeClass("notice-danger")
            .addClass("notice-success");
          $("#comment-form .js-notice-icon")
            .removeClass("fa-exclamation-triangle")
            .addClass("fa-thumbs-up");
          showAlert(
            '<strong>Thanks for your comment!</strong> It is currently pending a review and will show on the site once approved.'
          );
          grecaptcha.reset();
          form.removeClass("disabled");
        },
        error: function(err) {
          console.log(err);
          resetSubmitButton();
          $("#comment-form .js-notice")
            .removeClass("notice-success")
            .addClass("notice-danger");
          $("#comment-form .js-notice-icon")
            .removeClass("fa-thumbs-up")
            .addClass("fa-exclamation-triangle");
          showAlert(
            "<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again."
          );
          grecaptcha.reset();
          form.removeClass("disabled");
        }
    });

  function showAlert(message) {
      $("#comment-form .js-notice").removeClass("hidden");
      $("#comment-form .js-notice-text").html(message);
  }
    
  function resetSubmitButton() {
    $("#comment-form-submit")
      .html("Comment")
      .prop("disabled", false);
  }
};