/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import React from 'react';
import { ClickConfig } from './meta/config';
import { ClickData } from "./meta/data";
import { ClickEvent } from "./meta/event";
export interface Props extends React.HTMLAttributes<HTMLElement> {
    data: ClickData;
    config?: ClickConfig;
    events?: ClickEvent;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
