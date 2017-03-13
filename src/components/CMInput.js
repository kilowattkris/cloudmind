import React from 'react';

var CMInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },
    render: function(){
        var wrapperClass = 'form-input-wrapper';
        if(this.props.error && this.props.error.length > 0){
            wrapperClass+= ' ' + 'has-error';
        }
        return (
            <span className={wrapperClass}>
                <label className="form-input-label" htmlFor={this.props.name}>
                    <i className="material-icons md-18">{this.props.label}</i>
                </label>
                <input type="text"
                    name={this.props.name}
                    className="form-input"
                    placeholder={this.props.placeholder}
                    ref={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    onChange={this.props.onChange} />
                <div className="input">{this.props.error}</div>
            </span>
        );
    }
});

export default CMInput;
