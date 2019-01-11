import * as React from 'react';
import withFilterBus from './withFilterBus';
import RenderBrands from './features/RenderBrands';
import RenderTypeBus from './features/RenderBusType';
import RenderPrice from './features/RenderPrice';
import RenderTime from './features/RenderTime';

class FilterBus extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            isShowFilter: false
        }
    }


    _onShowFilter = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({ isShowFilter: !prevState.isShowFilter }))
    }

    render() {
        const { isShowFilter } = this.state;
        const { types, brands, prices}  = this.props.brand.data;
        const  {
             filerByBrand, removeFilterByBrand,
             filterByPrice, removeFIlterByPrice,
             filterByBusType, removeFIlterByBusType,
             searchForm, removeAllFilter} = this.props;
        
        return (
            <div className="filter-bus-container">
                <div className="filter-title">
                    <a href="" onClick={this._onShowFilter}>
                        Lọc tuyến đường theo
                    </a>
                    {isShowFilter &&
                        <a href="" className="close-filter" onClick={this._onShowFilter}>
                            <i className="fa fa-window-close" aria-hidden="true"></i>
                        </a>
                    }
                </div>
                {isShowFilter &&
                    <React.Fragment>
                    <ul className="filter">
                        <li>
                            <RenderBrands 
                                brands={brands} 
                                actionChecked={filerByBrand}
                                actionUnChecked={removeFilterByBrand}
                                searchForm={searchForm}
                            />
                        </li>
                        <li>
                            <RenderTypeBus 
                                types={types}
                                actionChecked={filterByBusType}
                                actionUnChecked={removeFIlterByBusType}
                                searchForm={searchForm}
                                />
                        </li>
                        <li>
                            <RenderPrice 
                                prices={prices}
                                actionChecked={filterByPrice}
                                actionUnChecked={removeFIlterByPrice}
                                searchForm={searchForm}
                                />
                        </li>
                        {/* <li>
                            <RenderTime times={times}/>
                        </li> */}
                    </ul>
                    <div className="filter-footer">
                        <a 
                            onClick={(e)=> {
                                e.preventDefault();
                                removeAllFilter()
                            }}
                            href="" 
                            style={{backgroundColor: '#FFB500'}}>Xóa chọn</a>
                    </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}


export default withFilterBus(FilterBus);