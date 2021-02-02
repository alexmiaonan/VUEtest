import mock from "mockjs"
mock.mock(/getbooks/, {
	"books|10": [{
		"title": "@CTITLE",
		"mainimg": "@DATAIMAGE(240x320,@COLOR)",
		"outline": "@CSENTENCE(50,80)",
		"id|+1": 101
	}, ]
})
mock.mock(/getbook\/\d+/, function(option) {
	let datas = option.url.split("/");
	let pk = datas[datas.length - 2]
	return mock.mock({
		"title": "@CTITLE",
		"mainimg": "@DATAIMAGE(240x320)",
		"outline": "@CPARAGRAPH(20,50)",
		"id": pk,
		"articles|200": [{
			"id|+1": 100001,
			"title": "@CTITLE",
			"bookid": pk,
			"content": "@CPARAGRAPH(200,500)"
		}, ],
	})
})
mock.mock(/article\/\d+/, function(option) {
	let datas = option.url.split("/");
	let pk = datas[datas.length - 2]
	return mock.mock({
		"id": pk,
		"title": "@CTITLE(5,15)",
		"bookid": "@NATURAL(101,110)",
		"content": "@CPARAGRAPH(150,300)"
	})
})
mock.mock(/collects/,/get/, function() {
	return mock.mock({
		"books|10":[{
			"id":"@NATURAL(101,110)",
			"title":"@CTITLE"
		}],
	})
})
mock.mock(/collects/,/post/, function() {
	return {
		success:"添加成功"
	}
})
mock.mock(/collects/,/delete/, function() {
	return {
		success:"删除成功"
	}
})