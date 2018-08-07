import React from 'react';
import { connect } from 'react-redux';
import { filterText, activeStatus, sortBy } from '../actions/filters';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ['active', 'not active'],
      sort: ['User Name ASC', 'User Name DESC'] };
  }

  render() {
      return (
        <aside>
          <form>
            <div className="form-group">
              <label htmlFor="filterCtrl">Filter</label>
              <select id="filterCtrl" onChange={(e) => {
                        this.props.dispatch(activeStatus(e.target.value== "true" ? true: false));
                    }}>
                <option value="true">{this.state.filters[0]}</option>
                <option value="false">{this.state.filters[1]}</option>
              </select>
            </div>
            <div className="form-group">
             <label htmlFor="orderCtrl">Order</label>
             <select id="orderCtrl" onChange={(e) => {
                       this.props.dispatch(sortBy(e.target.value))}}>
             <option value="asc">{this.state.sort[0]}</option>
             <option value="desc">{this.state.sort[1]}</option>
             </select>
            </div>
            <div className="form-group">
             <label htmlFor="searchCtrl">Search</label>
             <input id="searchCtrl" onChange={(e) => {
                       this.props.dispatch(filterText(e.target.value))}}/>
            </div>

          </form>
        </aside>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Aside);
