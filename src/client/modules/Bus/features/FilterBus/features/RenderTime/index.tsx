import * as React from "react";
import CustomCheckbox from "BaseComponent/BaseCustomCheckbox";

class RenderTime extends React.Component<any, any>{

    render() {
        const { times } = this.props;

        return (
            <div className="Time-container">
                <h6>THỜI GIAN</h6>
                <table className="table">
                    <tbody>
                        {times.map( time =>
                            <tr key={time.type} className="time-item">
                                <td colSpan={2}>
                                    <CustomCheckbox number={time.type} />
                                </td>
                                <td>
                                    <span>{time.describe}</span>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}


export default RenderTime;

