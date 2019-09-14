import { Component, h, Prop, Method } from '@stencil/core';

@Component({
    tag: 'bsb-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @Prop({reflect: true, mutable: true}) opened: boolean;

    @Method() 
    toggle() {
        this.opened = !this.opened;
    }

    render() {
        return (
            <aside id="side-nav">
            </aside>
        );
    }
}