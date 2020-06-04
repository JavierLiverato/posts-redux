import React, { Component } from "react";
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar';
import SidenavDropdown from './SidenavDropdown';
import SidenavItem from './SidenavItem';
import MenuRoutes from '../../routes/menuRoutes';
import { connect } from "react-redux";

import { Sidenav, Nav, Icon, IconButton } from 'rsuite';
import 'rsuite/dist/styles/rsuite.css'
import './sidenav.css'

/**
 * SideNav class ( component with full sidenav integration )
 *
 * @exports Redux Connect
 * @class SideNav
 * @extends {Component}
 * @return Component
 */
class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: true,
			full: false,
			barsColor: 'black',
			closeColor: 'white',
			activeKey: '2',
			containerMode: ''
		};
		let trigger = null;
	}

	async componentDidMount() {
		this.trigger = await document.getElementsByClassName('sidenav-trigger')[0];
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
	}

	handleResize = () => {
		this.changeTrigger(0, this.state.barsColor)
		this.setState({
			expanded: window.innerWidth >= 992 || window.innerWidth <= 600 ? true : false,
			containerMode: '',
			full: false
		})
	};

	toggleSidenav = e => {
		this.changeTrigger(
			this.state.full ? 0 : -360,
			this.state.full ? this.state.barsColor : this.state.closeColor
		)
		if (window.innerWidth <= 600) {
			this.setState({
				full: !this.state.full,
				containerMode: !this.state.full ? '-full' : ''
			})
		}
	}

	changeTrigger = (degrees, color) => {
		this.trigger.style.transform = 'rotate('+degrees+'deg)';
		this.trigger.style.color = color;
		this.trigger.style.borderColor = color;
	}

	render() {
		return (
			<div className={'sidenav-container' + this.state.containerMode}>
				<Sidenav
					expanded={this.state.expanded}
					defaultOpenKeys={[0]}
					activeKey={this.state.activeKey}
					onSelect={this.handleSelect}
					appearance="inverse"
					>
					<Sidenav.Body>
						<Nav id="header-nav">
							{<HeaderSidebar />}
							<IconButton
								icon={<Icon icon={this.state.full ? "close" : "bars"} />}
								onClick={this.toggleSidenav}
								appearance="ghost"
								className={"sidenav-trigger"}
							/>
						</Nav>
						<Nav>
							{MenuRoutes.map((route, key) => {
								return route.type === 'dropdown' ?
									<SidenavDropdown group={route} groupKey={key} key={key} />
									:
									<SidenavItem route={route} itemKey={key} key={key} />
							})}
						</Nav>
					</Sidenav.Body>
				</Sidenav>
			</div >
		);
	}
}

const mapStateToProps = state => ({
	sidenavReducer: state.sidenavReducer
});

export default connect(mapStateToProps, {})(SideNav);

