/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import { MutableRefObject } from "react";
import { RotateData } from "../meta/data";
import { RotateEvent } from "../meta/event";
export declare const useHandler: (data: RotateData, event: RotateEvent, dragBlockRef: MutableRefObject<any>, dragBarRef: MutableRefObject<any>) => {
    getState: () => {
        dragLeft: number;
        thumbAngle: number;
    };
    thumbAngle: number;
    dragEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
