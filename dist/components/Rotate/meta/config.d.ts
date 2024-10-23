/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
export interface RotateConfig {
    width?: number;
    height?: number;
    size?: number;
    verticalPadding?: number;
    horizontalPadding?: number;
    showTheme?: boolean;
    title?: string;
}
export declare const defaultConfig: () => RotateConfig;
