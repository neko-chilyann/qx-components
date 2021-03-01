import { Component, Host, h, Element, Prop, ComponentInterface, Listen, VNode } from '@stencil/core';

/**
 * 界面缩放容器
 *
 * @export
 * @class ZoomContainer
 */
@Component({
  tag: 'zoom-container',
  styleUrl: 'zoom-container.scss',
})
export class ZoomContainer implements ComponentInterface {
  @Element()
  el: HTMLDivElement;
  wrapper: HTMLDivElement;
  contentRef: HTMLDivElement;
  mapRef: HTMLDivElement;

  /**
   * 是否只允许鼠标在容器内空白处才可拖滚动画布
   *
   * @type {boolean}
   * @memberof ZoomContainer
   */
  @Prop()
  isContainerDragScroll: boolean = true;

  /**
   * 最大缩放
   *
   * @memberof ZoomContainer
   */
  @Prop()
  maxZoom: number = 3;

  /**
   * 最小缩放
   *
   * @memberof ZoomContainer
   */
  @Prop()
  minZoom: number = 0.5;

  /**
   * 指定内容宽度
   *
   * @memberof ZoomContainer
   */
  @Prop()
  width: number = 1440;

  /**
   * 指定内容高度
   *
   * @memberof ZoomContainer
   */
  @Prop()
  height: number = 1024;

  /**
   * 当前缩放比例
   *
   * @memberof ZoomContainer
   */
  zoom: number = 1;

  /**
   * 鼠标是否按下
   *
   * @memberof ZoomContainer
   */
  mouseDown = false;

  @Listen('resize', { target: 'window' })
  onresize(): void {
    this.zoomChange();
  }

  @Listen('mousedown')
  onmousedown(e: MouseEvent): void {
    const el = e.target as any;
    if (this.isContainerDragScroll === false || el === this.wrapper || el === this.contentRef) {
      this.enableMouseMove();
    }
  }

  @Listen('mouseup')
  onmouseup(): void {
    this.disableMouseMove();
  }

  @Listen('mouseleave')
  onmouseleave(): void {
    this.disableMouseMove();
  }

  @Listen('mousemove')
  onmousemove(e: MouseEvent): void {
    if (this.mouseDown === true) {
      this.wrapper.scrollTo(this.wrapper.scrollLeft - e.movementX, this.wrapper.scrollTop - e.movementY);
    }
  }

  @Listen('mousewheel', { passive: false })
  onmousewheel(e: WheelEvent): void {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      const y = 1 * (e.deltaY / 100);
      const zoom = (this.zoom * 10 - y) / 10;
      if (zoom < this.minZoom) {
        this.zoom = this.minZoom;
      } else if (zoom > this.maxZoom) {
        this.zoom = this.maxZoom;
      } else {
        this.zoom = zoom;
      }
      this.zoomChange();
    }
  }

  componentDidLoad(): void {
    this.zoomChange();
  }

  /**
   * 禁用鼠标移动监听
   *
   * @memberof ZoomContainer
   */
  enableMouseMove(): void {
    this.mouseDown = true;
    this.wrapper.classList.add('panning');
  }

  /**
   * 启用鼠标移动监听
   *
   * @memberof ZoomContainer
   */
  disableMouseMove(): void {
    this.mouseDown = false;
    this.wrapper.classList.remove('panning');
  }

  /**
   * 呈现比例发生变化
   *
   * @memberof ZoomContainer
   */
  zoomChange(): void {
    const s = this.contentRef.style;
    s.height = this.height * this.zoom + 'px';
    s.width = this.width * this.zoom + 'px';
    const offsetX = this.wrapper.scrollWidth / 2 - this.contentRef.offsetWidth / 2;
    const offsetY = this.wrapper.scrollHeight / 2 - this.contentRef.offsetHeight / 2;
    s.transform = `matrix(${this.zoom}, 0, 0, ${this.zoom}, ${offsetX}, ${offsetY})`;
  }

  renderSvgContent() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
        <rect width='100' height='100' style={{ left: '50px', top: '50px', fill: 'red' }}/>
      </svg>
    );
  }

  render(): VNode {
    return (
      <Host class='zoom-container'>
        <div class='zoom-wrapper' ref={ref => (this.wrapper = ref)}>
          <div class='zoom-content' ref={ref => (this.contentRef = ref)}>
            <div style={{ width: '200px', height: '200px', background: '#666' }}>内容</div>
            <div style={{ width: '200px', height: '200px', background: '#666' }}>测试</div>
          </div>
        </div>
        <div class='zoom-map' ref={ref => (this.mapRef = ref)}>{this.renderSvgContent()}</div>
      </Host>
    );
  }
}
