import * as React from "react";
import { Button } from "react-bootstrap";
import cx from "classnames";

class CustomButton extends React.Component<any, any> {
  render() {
    const { fill, simple, pullRight, round, block, ...rest } = this.props;

    const btnClasses = cx({
      "btn-fill": fill,
      "btn-simple": simple,
      "pull-right": pullRight,
      "btn-block": block,
      "btn-round": round
    });

    return <Button className={btnClasses} {...rest} />;
  }
}

export default CustomButton;
