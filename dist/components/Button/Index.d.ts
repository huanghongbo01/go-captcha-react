/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import React from "react";
import { ButtonConfig } from "./meta/config";
export declare type ButtonType = "default" | "warn" | "error" | "success";
export interface Props extends React.HTMLAttributes<HTMLElement> {
    config?: ButtonConfig;
    clickEvent?: () => void;
    disabled?: boolean;
    type?: ButtonType;
    title?: string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
