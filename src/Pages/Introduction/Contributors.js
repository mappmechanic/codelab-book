import React, { Component } from 'react';

const tableStyle = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	border: '1px solid #eaeaea'
};


const rowStyle = {
	display: 'flex',
	flexDirection: 'row'
};

const borderRow = {
	...rowStyle,
	borderBottom: tableStyle.border
}


const rowHeadStyle = {
	...rowStyle,
	background: '#aeaeae',
	color: '#fff'	
}

const colStyle = {
	flex:1,
	border: '1px solid #fff',
	padding: 7
};

const dynColStyle = (flex, align = 'left') => {
	return {
		...colStyle,
		flex: flex,
		textAlign: align
	}
};

const dynLinkStyle = (lineHeight) => {
	return {
		lineHeight: `${lineHeight}px`,
		color: '#000'
	}
}

const socialIconLinks = {
	"twitter": "http://www.freeiconspng.com/uploads/-van-nederland-elgie-gaat-haar-ontwikkeling-posten-op-twitter-24.png",
	"github": "https://www.macupdate.com/images/icons256/39062.png",
	"linkedin": "https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png"
}

class Contributors extends Component {

	renderSocialLinkRow(type, label, link) {
		return (
			<div style={rowStyle}>
				<div style={dynColStyle(1, 'right')}>
					<img width="30px" src={socialIconLinks[type]} />
				</div>
				<div style={dynColStyle(5)}>
					<a style={dynLinkStyle(30)} href={link}>
						 {label}
					</a>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h2>Contributors</h2>
				<div style={tableStyle}>
					<div style={rowHeadStyle}>
						<div style={colStyle}>
							Name
						</div>
						<div style={dynColStyle(2)}>
							Bio
						</div>
						<div style={colStyle}>
							Social Links
						</div>
					</div>
					<div style={borderRow}>
						<div style={colStyle}>
							<p>Rahat Khanna</p>
						</div>
						<div style={dynColStyle(2)}>
							 <p><b>Expertise</b> : [ ReactJS, Angular 2, Ionic 2, ES6, Typescript, Hybrid Mobile Apps, HTML5, User Experience ] </p>
							 <p><b>Interests</b> : [ Wearables, Internet of Things, M2M ]</p>
						</div>
						<div style={colStyle}>
							{this.renderSocialLinkRow("twitter","@mappmechanic","http://twitter.com/mappmechanic")}
							{this.renderSocialLinkRow("github","mappmechanic","http://github.com/mappmechanic")}
							{this.renderSocialLinkRow("linkedin","@rahatkh","http://linkedin.com/in/rahatkh")}
						</div>
					</div>
					<div style={borderRow}>
						<div style={colStyle}>
							<p>{'<Contributor value="Can be You" />'}</p>
						</div>
						<div style={dynColStyle(2)}>
							 <p><b>Expertise</b> : [ Your Bio ] </p>
						</div>
						<div style={colStyle}>
							{this.renderSocialLinkRow("twitter","<@twitter_handle>","http://twitter.com")}
							{this.renderSocialLinkRow("github","<github_handle>","http://github.com")}
							{this.renderSocialLinkRow("linkedin","<LinkedInProfile>","http://linkedin.com")}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contributors;