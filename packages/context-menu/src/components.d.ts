/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ContextMenu {
        /**
          * 是否悬浮
          * @return {Promise<boolean>}
          * @memberof ContextMenu
         */
        "isHover": () => Promise<boolean>;
        /**
          * 菜单数据
          * @type {any[]}
          * @memberof ContextMenu
         */
        "menus": any[];
        /**
          * 显示菜单
          * @param e
          * @return {Promise<void>}
          * @memberof ContextMenu
         */
        "show": (e: MouseEvent) => Promise<void>;
    }
    interface QxMain {
    }
    interface ScrollDecorationBar {
        /**
          * 所在位置
          * @type {('top' | 'right')}
          * @memberof ScrollDecorationBar
         */
        "position": 'top' | 'right';
        /**
          * 监控滚动条的element节点
          * @type {HTMLDivElement}
          * @memberof ScrollDecorationBar
         */
        "scrollDom": HTMLDivElement;
        /**
          * 滚动条距离开始距离，当为0时隐藏滚动阴影
          * @type {number}
          * @memberof ScrollDecorationBar
         */
        "scrollNum": number;
        /**
          * 显示的z-index层级
          * @type {number}
          * @memberof ScrollDecorationBar
         */
        "zIndex": number;
    }
    interface ZoomContainer {
        /**
          * 指定内容高度
          * @memberof ZoomContainer
         */
        "height": number;
        /**
          * 是否只允许鼠标在容器内空白处才可拖滚动画布
          * @type {boolean}
          * @memberof ZoomContainer
         */
        "isContainerDragScroll": boolean;
        /**
          * 最大缩放
          * @memberof ZoomContainer
         */
        "maxZoom": number;
        /**
          * 最小缩放
          * @memberof ZoomContainer
         */
        "minZoom": number;
        /**
          * 指定内容宽度
          * @memberof ZoomContainer
         */
        "width": number;
    }
}
declare global {
    interface HTMLContextMenuElement extends Components.ContextMenu, HTMLStencilElement {
    }
    var HTMLContextMenuElement: {
        prototype: HTMLContextMenuElement;
        new (): HTMLContextMenuElement;
    };
    interface HTMLQxMainElement extends Components.QxMain, HTMLStencilElement {
    }
    var HTMLQxMainElement: {
        prototype: HTMLQxMainElement;
        new (): HTMLQxMainElement;
    };
    interface HTMLScrollDecorationBarElement extends Components.ScrollDecorationBar, HTMLStencilElement {
    }
    var HTMLScrollDecorationBarElement: {
        prototype: HTMLScrollDecorationBarElement;
        new (): HTMLScrollDecorationBarElement;
    };
    interface HTMLZoomContainerElement extends Components.ZoomContainer, HTMLStencilElement {
    }
    var HTMLZoomContainerElement: {
        prototype: HTMLZoomContainerElement;
        new (): HTMLZoomContainerElement;
    };
    interface HTMLElementTagNameMap {
        "context-menu": HTMLContextMenuElement;
        "qx-main": HTMLQxMainElement;
        "scroll-decoration-bar": HTMLScrollDecorationBarElement;
        "zoom-container": HTMLZoomContainerElement;
    }
}
declare namespace LocalJSX {
    interface ContextMenu {
        /**
          * 菜单数据
          * @type {any[]}
          * @memberof ContextMenu
         */
        "menus"?: any[];
    }
    interface QxMain {
    }
    interface ScrollDecorationBar {
        /**
          * 所在位置
          * @type {('top' | 'right')}
          * @memberof ScrollDecorationBar
         */
        "position"?: 'top' | 'right';
        /**
          * 监控滚动条的element节点
          * @type {HTMLDivElement}
          * @memberof ScrollDecorationBar
         */
        "scrollDom"?: HTMLDivElement;
        /**
          * 滚动条距离开始距离，当为0时隐藏滚动阴影
          * @type {number}
          * @memberof ScrollDecorationBar
         */
        "scrollNum"?: number;
        /**
          * 显示的z-index层级
          * @type {number}
          * @memberof ScrollDecorationBar
         */
        "zIndex"?: number;
    }
    interface ZoomContainer {
        /**
          * 指定内容高度
          * @memberof ZoomContainer
         */
        "height"?: number;
        /**
          * 是否只允许鼠标在容器内空白处才可拖滚动画布
          * @type {boolean}
          * @memberof ZoomContainer
         */
        "isContainerDragScroll"?: boolean;
        /**
          * 最大缩放
          * @memberof ZoomContainer
         */
        "maxZoom"?: number;
        /**
          * 最小缩放
          * @memberof ZoomContainer
         */
        "minZoom"?: number;
        /**
          * 指定内容宽度
          * @memberof ZoomContainer
         */
        "width"?: number;
    }
    interface IntrinsicElements {
        "context-menu": ContextMenu;
        "qx-main": QxMain;
        "scroll-decoration-bar": ScrollDecorationBar;
        "zoom-container": ZoomContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "context-menu": LocalJSX.ContextMenu & JSXBase.HTMLAttributes<HTMLContextMenuElement>;
            "qx-main": LocalJSX.QxMain & JSXBase.HTMLAttributes<HTMLQxMainElement>;
            "scroll-decoration-bar": LocalJSX.ScrollDecorationBar & JSXBase.HTMLAttributes<HTMLScrollDecorationBarElement>;
            "zoom-container": LocalJSX.ZoomContainer & JSXBase.HTMLAttributes<HTMLZoomContainerElement>;
        }
    }
}