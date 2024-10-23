/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import { ClickData, ClickDot } from "../meta/data";
import { ClickEvent } from "../meta/event";
export declare const useHandler: (_data: ClickData, event: ClickEvent) => {
    setDots: import("react").Dispatch<import("react").SetStateAction<ClickDot[]>>;
    getDots: any;
    clickEvent: any;
    confirmEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
