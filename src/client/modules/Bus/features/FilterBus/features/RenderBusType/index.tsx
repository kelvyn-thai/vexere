import * as React from "react";
import CustomCheckbox from "BaseComponent/BaseCustomCheckbox";
import { isElementExistByField } from "Library/isElementExist";

class RenderTypeBus extends React.Component<any, any>{

    render() {

        const { types, actionChecked, actionUnChecked} = this.props;
        const { types: typesChoosen}  = this.props.searchForm.data.conditions;

        return (
            <div className="bus-type-container">
                <h6>LOẠI XE</h6>
                <table className="table">
                    <tbody>
                        {types.map(type =>
                            <tr key={type.type} className="bus-type-item">
                                <td colSpan={2}>
                                    <CustomCheckbox
                                     actionChecked={()=> actionChecked(type)}
                                     actionUnChecked={()=> actionUnChecked(type)}    
                                     number={type.type} 
                                     isChecked={isElementExistByField(typesChoosen, type.type, 'type')}
                                     />
                                </td>
                                <td>
                                    <span>{type.describe}</span>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}


export default RenderTypeBus;

