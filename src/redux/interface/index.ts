import type { SizeType } from "antd/lib/config-provider/SizeContext";

export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
	breadcrumb: boolean;
	tabs: boolean;
	footer: boolean;
}

export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: SizeType;
	language: string;
	themeConfig: ThemeConfigProp;
}
