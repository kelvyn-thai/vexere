import * as React from 'react';

class CustomCheckbox extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      is_checked: props.isChecked ? true : false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ is_checked: !this.state.is_checked });
  }

  componentDidUpdate(prevProps, prevState) {
    
    const { is_checked } = this.state;
    const { actionChecked, actionUnChecked, isChecked } = this.props;

    if(prevState.is_checked !== is_checked) {
      if(is_checked) {
        actionChecked();
      }
      else {
        actionUnChecked();
      }
    }

    if(prevProps.isChecked !== isChecked){
      this.setState({is_checked: isChecked})
    }

  }

  render() {
    const { isChecked, number, label, inline, actionChecked, actionUnChecked, ...rest } = this.props;
    const classes =
      inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
    return (
      <div className={classes}>
        <input
          id={number}
          type="checkbox"
          onChange={this.handleClick}
          checked={this.state.is_checked}
          {...rest}
        />
        <label htmlFor={number}>{label}</label>
      </div>
    );
  }
}

export default CustomCheckbox;
