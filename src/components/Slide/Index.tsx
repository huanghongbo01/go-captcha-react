/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import React, {FC, useEffect, useRef} from 'react';
import classnames from "classnames";
import cstyles from './index.module.less'
import styles from './../../gocaptcha.module.less'
import CloseIcon from './../../assets/icons/CloseIcon'
import RefreshIcon from './../../assets/icons/RefreshIcon'
import LoadingIcon from './../../assets/icons/LoadingIcon'
import ArrowsIcon from './../../assets/icons/ArrowsIcon'
import {SlideData} from "./meta/data";
import {SlideConfig, defaultConfig} from "./meta/config";
import {SlideEvent} from "./meta/event";
import {useHandler} from "./hooks/useHandler";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: SlideData,
  config?: SlideConfig;
  events?: SlideEvent,
}

const Index:FC<Props> = (props: Props) => {
  const conf = {
    ...defaultConfig(),
    ...(props.config || {})
  }

  const dragBarRef = useRef<any>(null)
  const containerRef = useRef<any>(null)
  const dragBlockRef = useRef<any>(null)
  const tileRef = useRef<any>(null)

  const data = props.data || {}
  const handler = useHandler(data, props.events || {}, containerRef, tileRef, dragBlockRef, dragBarRef);

  const hPadding = conf.horizontalPadding || 0
  const vPadding = conf.verticalPadding || 0
  const width = (conf.width || 0) + ( hPadding * 2) + (conf.showTheme ? 2 : 0)

  useEffect(() => {
    dragBlockRef.current.addEventListener('dragstart', (event: any) => event.preventDefault());
  }, [dragBlockRef]);

  return <div className={classnames(styles.wrapper, conf.showTheme ? styles.theme : '')}
              style={{
                width:  width+ "px",
                paddingLeft: hPadding + "px",
                paddingRight: hPadding + "px",
                paddingTop: vPadding + "px",
                paddingBottom: vPadding + "px",
              }}>
    <div className={styles.header}>
      <span>{conf.title}</span>
      <div className={styles.iconBlock}>
        <CloseIcon width={22} height={22} onClick={handler.closeEvent}/>
        <RefreshIcon width={22} height={22} onClick={handler.refreshEvent}/>
      </div>
    </div>
    <div className={styles.body} ref={containerRef} style={{width: conf.width + "px", height: conf.height + "px"}}>
      <div className={styles.loading}>
        <LoadingIcon />
      </div>
      <img className={classnames(styles.picture, data.image == '' ? styles.hide : '')} style={{width: conf.width + "px", height: conf.height + "px"}} src={data.image} alt="..." />
      <div className={cstyles.tile} ref={tileRef} style={{width: (data.thumbWidth || 0) + 'px', height: (data.thumbHeight || 0) + 'px', top: (data.thumbY || 0) + "px", left: handler.getState().thumbLeft + "px"}}>
        <img className={data.thumb == '' ? styles.hide : ''} src={data.thumb} alt="..."/>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.dragSlideBar} ref={dragBarRef}>
        <div className={styles.dragLine} />
        <div className={styles.dragBlock} ref={dragBlockRef} onMouseDown={handler.dragEvent} style={{left: handler.getState().dragLeft + "px"}}>
          <div className={styles.dragBlockInline} onTouchStart={handler.dragEvent}>
            <ArrowsIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default React.memo(Index)