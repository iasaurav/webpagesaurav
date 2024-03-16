function myFunction() {
  var email = document.getElementById("emai").value;
  var week = ['portfolio', 'upsc', 'delete', 'spam', 'rtps', 'bihar', 'stockmarket']
  week.sort();
  
  let mail = "mailto:";
  let delete_mail = "https://mail.google.com/mail/u/0/#search/";
  var no = ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az'];
  $.each(week, function(i, data) {
    var ul_data = ["<tr><td><input type='text' id='" + no[i] + "'value='" + email + "+" + week[i] + "@gmail.com'onclick='myFunction" + no[i] + "()'readonly></td>"+"<td><a href='" + mail + email + "+" + week[i] + "@gmail.com'>" + email + "+" + week[i] + "@gmail.com</a></td>"+"<td><a href='" + delete_mail + email + "%2B" + week[i] + "%40gmail.com'target='_blank'>" + email + "+" + week[i] + "@gmail.com</a></td></tr>"];
    $("#custom").append(ul_data);
  });
  }
