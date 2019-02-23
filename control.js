function Speed() {
	var h = 0,
		c, d, a = $(window.parent.document).contents().find("#lhgfrm_lhgdgId")[0].contentWindow,
		b = $(window.parent.document).contents().find("#lhgfrm_lhgdgId").contents();
	if (a.Startime <= 2700) a.Startime += 300, b.find("#hflooknum").val(h++), a.UpdateTime(), a.__doPostBack("lbtnStudentCourse", ""), window.setTimeout("Speed();", 500);
	else {
		for (c = b.find("#UpdatePanel2").children("table").children("tbody").children("tr").eq(1).children("td").html(), d = 0; d < 24 / c.length; d++) c += c;
		b.find("#txtareainnertContents").val(c), b.find("#txtareaExperience").val(c), b.find("#btnaddRecord").click()
	}
}
Speed();
