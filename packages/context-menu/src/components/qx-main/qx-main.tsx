import { Component, Host, h, Listen } from '@stencil/core';
import { ContextMenuController } from '../../controllers';

/**
 * 主组件
 *
 * @export
 * @class QxMain
 */
@Component({
  tag: 'qx-main',
  styleUrl: 'qx-main.scss',
})
export class QxMain {
  c = new ContextMenuController();

  @Listen('contextmenu')
  onContextMenu(e: MouseEvent): void {
    this.c.open(e, []);
  }

  render() {
    return <Host class='qx-main'><zoom-container width={1440} height={1024}/></Host>;
  }
}
