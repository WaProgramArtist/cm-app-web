
import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const PaginationHandler = ({
        currentPage = 1,
        showLimit,
        limitPage,
        handlerOnClick,
    }) => {
    
    currentPage = parseInt(currentPage);
    showLimit = parseInt(showLimit);
    limitPage = parseInt(limitPage);

    const r_startPage = () => { 
        let temp = parseInt(currentPage - Math.floor(showLimit /  2 ));
        if(temp <= 0){
            return 1;
        }else{ 
            return temp;
        }
    };

    const cal_r_startPage = r_startPage();
    let shiftLeft = r_startPage();

    const r_endPage = () => { 
        let temp_r_end = (cal_r_startPage + (showLimit));
        if(temp_r_end > limitPage){
            if(r_startPage() - ((limitPage - temp_r_end)*(-1)) > 0){
                shiftLeft = (cal_r_startPage - ((limitPage - temp_r_end)*(-1)));
            }else{
                shiftLeft = 0;
            }
            return limitPage;
        }else{
            return (cal_r_startPage + showLimit);
        } 
    };

    const r_currentPage = currentPage > 0 ? parseInt(currentPage) : 1;
    
    const ActionOnClick = (key) => {
        handlerOnClick(parseInt(key));
    }

    const cal_r_endPage = r_endPage();

    const render_pagination = () => { 
        let pageItems = [];
        for(let i = shiftLeft; i <= cal_r_endPage; i += 1){
            pageItems.push(<Pagination.Item key={i} page={i} active={r_currentPage == i} onClick={(e) => ActionOnClick(e.currentTarget.getAttribute("page"))}>{i}</Pagination.Item>);
        }
        return pageItems;
    };
    
    return (
        <div>
            <Pagination>{render_pagination()}</Pagination>
        </div>
    )

}
/** PropTypes */
PaginationHandler.propTypes = {
    currentPage: PropTypes.number.isRequired,
    showLimit: PropTypes.number.isRequired,
    limitPage: PropTypes.number.isRequired,
    handlerOnClick: PropTypes.func.isRequired,
};

export default PaginationHandler;