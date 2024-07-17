module.exports = {
	printWidth: 130, //超过最大值换行
	tabWidth: 2, //缩进字节数
	useTabs: true, //使用制表符而不是空格缩进行
	semi: true, //结尾不用分号（true是有，false没有）
	singleQuote: false, //使用单引号（true单引号，false双引号）
	quoteProps: "as-needed", //更改引用对象属性的时间 可选值（as-needed / consistent / preserve)
	bracketSpacing: true, //在对象，数组括号与文字之间加空格 "{ foo: bar }"
	trailingComma: "none", //多行时尽可能打印尾随逗号，（例如，单行数组永远都不会出现逗号结尾）可选值（none / es5 / all）默认none
	jsxSingleQuote: false, //在jsx中使用单引号而不是双引号
	arrowParens: "avoid", //箭头函数参数只有一个时是否要有小括号 avoid省略括号 always不省略括号
	insertPrama: false, //对通过prettier格式化后的文件顶部添加@format特殊注释
	requirePrama: false, //只格式化文件顶部有特殊注释（pragma）的文件
	proseWrap: "preserve", //对一行字符数超过printWidth的文本换行 （仅对markdown文件有效）
	htmlWhitespaceSensitivity: "css", //在html中空格是否是敏感的 css遵守css显示属性的默认值 strict空格被认为是敏感的 ignore空格被认为是不敏感的
	endOfLine: "auto", //换行符使用lf （auto / lf /	crlf / cr）
	//这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
	rangeStart: 0,
	rangeEnd: Infinity,
	vueIndentScriptAndStyle: false //vue文件中<script>和<style>标签内部代码是否缩进
 }
