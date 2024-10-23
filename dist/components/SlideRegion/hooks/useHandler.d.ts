/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import { MutableRefObject } from "react";
import { SlideRegionData, SlideRegionPoint } from "../meta/data";
import { SlideRegionEvent } from "../meta/event";
export declare const useHandler: (data: SlideRegionData, event: SlideRegionEvent, containerRef: MutableRefObject<any>, tileRef: MutableRefObject<any>) => {
    thumbPoint: SlideRegionPoint;
    dragEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
