/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
export interface ClickConfig {
    width?: number;
    height?: number;
    thumbWidth?: number;
    thumbHeight?: number;
    verticalPadding?: number;
    horizontalPadding?: number;
    showTheme?: boolean;
    title?: string;
    buttonText?: string;
}
export declare const defaultConfig: () => ClickConfig;
