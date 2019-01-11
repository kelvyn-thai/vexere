import * as React from "react";
import CustomCheckbox from "BaseComponent/BaseCustomCheckbox";
import { isElementExistByField } from "Library/isElementExist";

class RenderPrice extends React.Component<any, any>{

    render() {
        const { prices, actionChecked, actionUnChecked } = this.props;
        const { prices: pricesChosen} = this.props.searchForm.data.options.sort;
        return (
            <div className="price-container">
                <h6>GIÁ</h6>
                <table className="table">
                    <tbody>
                        {prices.map(price =>
                            <tr key={price.type} className="price-item">
                                <td colSpan={2}>
                                    <CustomCheckbox
                                        actionChecked={() => actionChecked(price)}
                                        actionUnChecked={() => actionUnChecked(price)}
                                        number={price.type}
                                        isChecked={isElementExistByField(pricesChosen, price.type, 'type')}
                                    />
                                </td>
                                <td>
                                    <span>{price.describe}</span>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}


export default RenderPrice;

