import * as React from 'react';
import withRenderBus from './withRenderBus';
import BusItem from './features/BusItem';
import BusPagination from './features/Pagination';


class RenderBus extends React.Component<any, any> {
    render() {

        const { results, totalRecords, limit, totalPages, page } = this.props['findBus'].data;

        const { from, to } = this.props.findBus.data.route;

        const title = `Xe đi từ ${from['name']} đến ${to['name']}`;

        return (
            <div className="render-bus">
                <h1 className="title">{title}<span className="title-details">Hiển thị {limit} / {totalRecords} kết quả</span></h1>
                <div className="filter-bus"></div>
                <div className="render-bus-item">
                    {results.map(bus => <BusItem data={...bus} key={bus._id} />)}
                </div>
                <div className="loadmore-bus-item">
                    <BusPagination
                        totalItemsCount={totalRecords}
                        itemsCountPerPage={limit}
                        activePage={page}
                        totalPages={totalPages}
                        onChangePage={this.props.loadmoreBus}
                    />
                </div>
            </div>
        )
    }
}

export default withRenderBus(RenderBus);