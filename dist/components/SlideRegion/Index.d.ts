/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import React from 'react';
import { SlideRegionConfig } from "./meta/config";
import { SlideRegionData } from "./meta/data";
import { SlideRegionEvent } from "./meta/event";
export interface Props extends React.HTMLAttributes<HTMLElement> {
    data: SlideRegionData;
    config?: SlideRegionConfig;
    events?: SlideRegionEvent;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
