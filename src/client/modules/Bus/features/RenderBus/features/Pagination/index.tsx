import * as React from 'react';
import Pagination from 'react-js-pagination';


class BusPagination extends React.Component<any, any> {
    render() {

        const { activePage, itemsCountPerPage, totalItemsCount, onChangePage } = this.props;

        return (
            <div>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={5}
                    onChange={(pageNumber) => onChangePage(pageNumber)}
                />
            </div>
        );
    }
}

export default BusPagination;