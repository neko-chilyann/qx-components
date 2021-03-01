import { ContextMenu } from '../../components/context-menu/context-menu';

/**
 * 上下文菜单控制器
 *
 * @export
 * @class ContextMenuController
 */
export class ContextMenuController {
  /**
   * 上下文菜单控制器
   *
   * @protected
   * @type {HTMLQxContextMenuElement}
   * @memberof ContextMenuController
   */
  protected container: ContextMenu;

  protected addEvents(): void {
    window.addEventListener('mousedown', this.mouseDown);
  }

  protected removeEvents(): void {
    window.removeEventListener('mousedown', this.mouseDown);
  }

  /**
   * 鼠标按下
   *
   * @memberof ContextMenuController
   */
  protected mouseDown = async (): Promise<void> => {
    if ((await this.container.isHover()) === false) {
      this.close();
    }
  };

  /**
   * 打开右键菜单
   *
   * @param {MouseEvent} e
   * @param {any[]} menus
   * @memberof ContextMenuController
   */
  open(e: MouseEvent, menus: any[]): void {
    e.preventDefault();
    e.stopPropagation();
    this.close();
    this.addEvents();
    this.container = document.createElement('qx-context-menu') as any;
    document.body.appendChild(this.container as any);
    this.container.menus = menus;
    this.container.show(e);
  }

  /**
   * 关闭右键菜单
   *
   * @memberof ContextMenuController
   */
  close(): void {
    if (this.container) {
      document.body.removeChild(this.container as any);
      this.container = undefined;
    }
    this.removeEvents();
  }
}
