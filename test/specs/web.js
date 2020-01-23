const assert = require("assert");

describe("57web forms testing", function() {
  it("Forms", function() {
    browser.url("https://57hours.com");
    $("#menu-item-7996").click();
    $(".ui-autocomplete-input").setValue("Amherst");
    $("#date").click();
    $(".ui-icon-circle-triangle-e").click();
    $(".ui-state-default").click();
    $(".quantity__button--increment").click();
    $("#fullName").setValue("Test");
    $("#email").setValue("cvitqa1@gmail.com");
    $("input[name='phone']").setValue("0996606367");
    $("textarea").setValue("This is automated test, please ignore");
    $("#inquiry-submit-button").click();
  });
});
