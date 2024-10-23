/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import React from 'react';
import { RotateConfig } from "./meta/config";
import { RotateData } from "./meta/data";
import { RotateEvent } from "./meta/event";
export interface Props extends React.HTMLAttributes<HTMLElement> {
    data: RotateData;
    config?: RotateConfig;
    events?: RotateEvent;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
