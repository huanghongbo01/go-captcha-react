/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import React from 'react';
import { SlideData } from "./meta/data";
import { SlideConfig } from "./meta/config";
import { SlideEvent } from "./meta/event";
export interface Props extends React.HTMLAttributes<HTMLElement> {
    data: SlideData;
    config?: SlideConfig;
    events?: SlideEvent;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
