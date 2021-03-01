import { Component, Host, h, Prop, Watch, State } from '@stencil/core';

/**
 * 滚动阴影
 *
 * @export
 * @class ScrollDecorationBar
 */
@Component({
  tag: 'scroll-decoration-bar',
  styleUrl: 'scroll-decoration-bar.scss',
  shadow: true,
})
export class ScrollDecorationBar {
  /**
   * 所在位置
   *
   * @type {('top' | 'right')}
   * @memberof ScrollDecorationBar
   */
  @Prop()
  position: 'top' | 'right' = 'top';
  /**
   * 显示的z-index层级
   *
   * @type {number}
   * @memberof ScrollDecorationBar
   */
  @Prop()
  zIndex: number;
  /**
   * 监控滚动条的element节点
   *
   * @type {HTMLDivElement}
   * @memberof ScrollDecorationBar
   */
  @Prop()
  scrollDom: HTMLDivElement;
  @Watch('scrollDom')
  watchScrollDom(): void {
    this.listenerEvent();
    this.calcShowState();
  }
  /**
   * 滚动条距离开始距离，当为0时隐藏滚动阴影
   *
   * @type {number}
   * @memberof ScrollDecorationBar
   */
  @Prop()
  scrollNum = 0;
  @Watch('scrollNum')
  watchScroll(): void {
    if (this.scrollNum > 0) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
  /**
   * 是否隐藏
   *
   * @memberof ScrollDecorationBar
   */
  @State()
  hidden = true;
  /**
   * 是否已经添加监控事件
   *
   * @type {boolean}
   * @memberof ScrollDecorationBar
   */
  isInitEvent = false;

  componentWillLoad(): void {
    if (this.position === 'right') {
      this.hidden = false;
    }
  }

  connectedCallback(): void {
    this.listenerEvent();
    this.calcShowState();
  }

  disconnectedCallback(): void {
    if (this.scrollDom) {
      this.scrollDom.removeEventListener('scroll', this.onScroll);
      this.isInitEvent = false;
    }
  }

  listenerEvent(): void {
    if (this.scrollDom && this.isInitEvent === false) {
      this.scrollDom.addEventListener('scroll', this.onScroll);
      this.isInitEvent = true;
    }
  }

  onScroll = (): void => {
    this.calcShowState();
  };

  /**
   * 根据滚动判断是否显示
   *
   * @memberof ScrollDecorationBar
   */
  calcShowState(): void {
    if (this.scrollDom) {
      if (this.position === 'top') {
        if (this.scrollDom.scrollTop > 0) {
          this.hidden = false;
        } else {
          this.hidden = true;
        }
      } else if (this.position === 'right') {
        if (
          this.scrollDom.scrollLeft >= this.scrollDom.scrollWidth - this.scrollDom.offsetWidth &&
          this.scrollDom.scrollWidth !== this.scrollDom.offsetWidth
        ) {
          this.hidden = true;
        } else {
          this.hidden = false;
        }
      }
    }
  }

  render() {
    return <Host class={{ [this.position]: true, hidden: this.hidden }} style={{ 'z-index': this.zIndex as any }} />;
  }
}
