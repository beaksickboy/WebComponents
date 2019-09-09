import { Component, h } from '@stencil/core';

@Component({
    tag: 'bsb-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    render() {
        return (
            <aside id="side-nav">

            </aside>
        );
    }
}