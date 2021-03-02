import { Component, Host, h, Element, ComponentInterface } from '@stencil/core';
import interact from 'interactjs';

/**
 * 缩放界面拖拽项
 *
 * @export
 * @class ZoomDragItem
 */
@Component({
  tag: 'zoom-drag-item',
  styleUrl: 'zoom-drag-item.scss',
})
export class ZoomDragItem implements ComponentInterface {
  @Element()
  el: HTMLDivElement;

  /**
   * 当前偏移量
   *
   * @type {{ x: number, y: number }}
   * @memberof ZoomDragItem
   */
  offset: { x: number; y: number } = { x: 0, y: 0 };

  componentDidLoad(): void {
    interact(this.el).draggable({
      onmove: (e: any) => {
        this.offset.x += e.dx;
        this.offset.y += e.dy;
        this.el.style.left = this.offset.x + 'px';
        this.el.style.top = this.offset.y + 'px';
      },
    });
  }

  render() {
    return <Host class='zoom-drag-item'>拖拽项</Host>;
  }
}
