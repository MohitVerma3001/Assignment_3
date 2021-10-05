function getJSON() {
  $.getJSON("team.json", function (data) 
  {
    //   var items = [];
    console.log(data);
    $.each(data, function () 
    {
      $.each(this, function () 
      {
        var name = `<h3>${this.name}</h3>`;
        var title = `<h4>${this.title}</h4>`;
        var bio = `<p>${this.bio}</p>`;
        $("#team").append(name, title, bio);
      });
    });
  });
}

function getAJAX() 
{
  $.get("/team.json", function (data, textStatus, jqXHR) 
  {
    $("#team").append("Loading..");
    setTimeout(() => 
    {
      $("#team").empty();
      $.each(data, function () 
      {
        $.each(this, function ()
         {
          var name = `<h3>${this.name}</h3>`;
          var title = `<h4>${this.title}</h4>`;
          var bio = `<p>${this.bio}</p>`;
          $("#team").append(name, title, bio);
        });
      });
    }, 5000);
  });
}
getJSON();
