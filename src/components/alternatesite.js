import React from "react";
import SectionHeader from './sectionheader.js';
class AlternateSite extends React.Component {
    render() {
        return (
            <div className="AppSection" >
                <div className="SectionBody"><a href={this.props.data['psuedonymurl']}>{this.props.data['psuedonym']}</a></div>
                
            </div>);
    }

}
export default AlternateSite