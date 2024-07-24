import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

import useTheme from "@/hooks/useTheme";
import i18n from "@/language";
import { setLanguage } from "@/redux/modules/global/action";
import { getBrowserLang } from "@/utils/utils";

const App = (props: any) => {
	const { language, assemblySize, themeConfig, setLanguage } = props;
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	useTheme(themeConfig);

	//设置antd语言国际化
	const setAntdLanguage = () => {
		if (language && language == "zh") return setI18nLocale(zhCN);
		if (language && language == "en") return setI18nLocale(enUS);
		if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() == "en") return setI18nLocale(enUS);
	};

	useEffect(() => {
		//全局使用国际化
		i18n.changeLanguage(language || getBrowserLang());
		setLanguage(language || getBrowserLang());
		setAntdLanguage();
	}, [language]);

	return (
		<HashRouter>
			<ConfigProvider locale={i18nLocale} componentSize={assemblySize}></ConfigProvider>
		</HashRouter>
	);
};

const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps, { setLanguage })(App);
