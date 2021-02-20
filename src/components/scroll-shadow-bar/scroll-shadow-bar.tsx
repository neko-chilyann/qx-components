import { Component, Host, h } from '@stencil/core';

/**
 * 滚动阴影
 *
 * @export
 * @class ScrollShadowBar
 */
@Component({
  tag: 'scroll-shadow-bar',
  styleUrl: 'scroll-shadow-bar.scss',
  shadow: true,
})
export class ScrollShadowBar {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
