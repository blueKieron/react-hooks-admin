// @see: https://stylelint.io

module.exports = {
	extends: [
		"stylelint-config-standard", //配置stylelint扩展插件
		"stylelint-config-prettier", //配置stylelint和prettier兼容
		"stylelint-config-recess-order" //配置stylelint css属性书写顺序插件
	],
	plugins: ["stylelint-less"],
	rules: {
		indentation: null, //指定缩进空格
		"no-descending-specificity": null, //禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		"function-url-quotes": "always", //要求或禁止url的引号 （always必须加上引号 / never没有引号）
		"string-quotes": "double", //指定字符串使用单引号或双引号
		"unit-case": null, //指定单位的大小写 （lower全小写 / upper全大写）
		"color-hex-case": "lower", //指定16进制颜色的大小写 （lower全小写 / upper全大写）
		"color-hex-length": "long", //指定16进制颜色的简写或扩写 （short简写 / long扩写）
		"rule-empty-line-before": "never", //要求或禁止在规则之前的空行 （always规则之前必须有一个空行 / never规则之前绝不能有空行 / always-multi-line多行规则之前必须始终有一个空行 / never-multi-line多行规则之前绝不能有空行）
		"font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
		"block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符 （always大括号前必须始终有一个空格 / never左大括号之前绝不能有空格 / always-single-line在单行块中的左大括号之前必须始终有一个空格 / never-single-line在单行块中的左大括号之前绝不能有空格 / always-multi-line在多行块中，左大括号之前必须始终有一个空格 / never-multi-line多行块中的左大括号之前绝不能有空格）
		"property-no-unknown": null, // 禁止未知的属性(true 为不允许)
		"no-empty-source": null, // 禁止空源码
		"declaration-block-trailing-semicolon": null, // 要求或不允许在声明块中使用尾随分号 （always必须始终有一个尾随分号 / never不得有尾随分号）
		"selector-class-pattern": null, // 强制选择器类名的格式
		"value-no-vendor-prefix": null, // 关闭 vendor-prefix(为了解决多行省略 -webkit-box)
		"at-rule-no-unknown": null,
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global", "v-deep", "deep"]
			}
		]
	}
};
