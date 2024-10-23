/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import { MutableRefObject } from "react";
import { SlideData } from "../meta/data";
import { SlideEvent } from "../meta/event";
export declare const useHandler: (data: SlideData, event: SlideEvent, containerRef: MutableRefObject<any>, tileRef: MutableRefObject<any>, dragBlockRef: MutableRefObject<any>, dragBarRef: MutableRefObject<any>) => {
    getState: () => {
        dragLeft: number;
        thumbLeft: number;
    };
    getPoint: any;
    dragEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
