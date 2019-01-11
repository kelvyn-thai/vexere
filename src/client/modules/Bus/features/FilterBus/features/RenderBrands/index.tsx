import * as React from "react";
import CustomCheckbox from "BaseComponent/BaseCustomCheckbox";
import { isElementExistByField } from "Library/isElementExist";

class RenderBrands extends React.Component<any, any>{

    render() {
        const { brands, actionChecked, actionUnChecked} = this.props;
        const { brands: brandsChoosen}  = this.props.searchForm.data.conditions;

        return (
            <div className="brands-container">
                <h6>HÃNG XE</h6>
                <table className="table">
                    <tbody>
                        {brands.map(brand =>
                            <tr key={brand.code} className="brand-item">
                                <td colSpan={2}>
                                    <CustomCheckbox 
                                        actionChecked={()=> actionChecked({code: brand.code, name: brand.name})}
                                        actionUnChecked={()=> actionUnChecked({code: brand.code, name: brand.name})}    
                                        number={brand.code} 
                                        isChecked={isElementExistByField(brandsChoosen, brand.code, 'code')}
                                    />
                                </td>
                                <td>
                                    <span> {brand.name}</span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default RenderBrands;

