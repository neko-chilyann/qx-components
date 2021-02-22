import { Component, Host, h, Prop, Method, Element, Listen, ComponentInterface } from '@stencil/core';

/**
 * 系统上下文菜单
 *
 * @export
 * @class QxContextMenu
 */
@Component({
  tag: 'qx-context-menu',
  styleUrl: 'qx-context-menu.scss',
})
export class QxContextMenu implements ComponentInterface {
  @Element()
  el: HTMLElement;
  /**
   * 菜单数据
   *
   * @type {any[]}
   * @memberof QxContextMenu
   */
  @Prop()
  menus: any[] = [];
  /**
   * 是否悬浮在菜单中
   *
   * @memberof QxContextMenu
   */
  hover = false;

  @Listen('mouseenter')
  mouseenter(): void {
    this.hover = true;
  }

  @Listen('mouseleave')
  mouseleave(): void {
    this.hover = false;
  }

  @Listen('contextmenu')
  contextmenu(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return <Host class='qx-context-menu'>上下文菜单</Host>;
  }

  /**
   * 是否悬浮
   *
   * @return {*}  {Promise<boolean>}
   * @memberof QxContextMenu
   */
  @Method()
  async isHover(): Promise<boolean> {
    return this.hover;
  }

  /**
   * 显示菜单
   *
   * @param {MouseEvent} e
   * @return {*}  {Promise<void>}
   * @memberof QxContextMenu
   */
  @Method()
  async show(e: MouseEvent): Promise<void> {
    this.el.style.top = e.pageY + 'px';
    this.el.style.left = e.pageX + 'px';
  }
}
