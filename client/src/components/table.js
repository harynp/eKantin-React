import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.rows = {
            contacts : [
                {
                  name: 'Hary',
                  position: 'IT Officer',
                  office: 'Jakarta',
                  age: 26,
                  start_date: '2018/01/31',
                  salary: '$2000'
                },
                {
                  name: 'Yonathan',
                  position: 'Customer Service',
                  office: 'Bandung',
                  age: 24,
                  start_date: '2017/12/31',
                  salary: '$400'
                },
                {
                  name: 'Kautsar',
                  position: 'Payroll Tax Staff',
                  office: 'Depok',
                  age: 29,
                  start_date: '2015/01/20',
                  salary: '$790'
                },
                {
                  name: 'Icha',
                  position: 'Instructure',
                  office: 'Jakarta',
                  age: 32,
                  start_date: '2014/12/31',
                  salary: '$10000'
                },
                {
                  name: 'Candra',
                  position: 'Security',
                  office: 'Jakarta',
                  age: 27,
                  start_date: '2018/01/31',
                  salary: '$1000'
                },
                {
                  name: 'Prana',
                  position: 'IT Officer',
                  office: 'Bogor',
                  age: 23,
                  start_date: '2018/09/25',
                  salary: '$2100'
                },
                {
                  name: 'Qory',
                  position: 'IT Officer',
                  office: 'Palembang',
                  age: 28,
                  start_date: '2017/05/28',
                  salary: '$2000'
                },
                {
                  name: 'Prastiyanto',
                  position: 'Sales',
                  office: 'Jakarta',
                  age: 35,
                  start_date: '2017/07/14',
                  salary: '$3000'
                },
                {
                  name: 'Agung',
                  position: 'Chief Executive Office (CEO)',
                  office: 'Jakarta',
                  age: 46,
                  start_date: '2011/01/30',
                  salary: '$25000'
                },{
                  name: 'Hilman',
                  position: 'Security',
                  office: 'Bogor',
                  age: 19,
                  start_date: '2016/08/17',
                  salary: '$1000'
                }
              ]
        }
        this.state = {
            searchName: '',
            sortDir: null,
            sortBy: 'id',
            filteredDataList: this.rows.contacts
        }
        
    }

    searchHandle (event) {
        this.setState({
            searchName : event.target.value.substr(0,20) 
        })
    }

    sortChange (cellDataKey) {
        console.log(cellDataKey)
        var sortDir = this.state.sortDir;
        var sortBy = cellDataKey;
        if (sortBy === this.state.sortBy) {
          sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
        } else {
          sortDir = 'DESC';
        }
        var rows = this.state.filteredDataList
        rows.sort((a, b) => {
          var sortVal = 0;
          if (a[sortBy] > b[sortBy]) {
            sortVal = 1;
          }
          if (a[sortBy] < b[sortBy]) {
            sortVal = -1;
          }
          if (sortDir === 'DESC') {
            sortVal = sortVal * -1;
          }
          return sortVal
        });
       
        this.setState({
            sortBy, 
            sortDir, 
            filteredDataList: rows
        })
    }
    render() {
        let filteredContacts = this.rows.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.searchName.toLowerCase()) !== -1;
            }
        )
        const { thStyle, tableStyle, tdStyle} = styles
        var sortDirArrow = '';
        if (this.state.sortDir !== null){
        sortDirArrow = this.state.sortDir === 'DESC' ? ' ↓' : ' ↑';
        }
        return (
            <div>
            <div className="row">
                <div className="countPage">
                    Show : 
                    <select>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    entries
                </div>
                <div className="inputSearch">
                    Search : <input type="text" placeholder="Search By Name" value={this.state.searchName} onChange={this.searchHandle.bind(this)}/>
                </div>
            </div>
            <table style={tableStyle}>
            <thead>
            <tr>
                <th style={thStyle} onClick={this.sortChange.bind(this, 'name')}>Name {this.state.sortBy === 'name' ? sortDirArrow: ''}</th>
                <th style={thStyle} onClick={this.sortChange.bind(this, 'position')}>Position {this.state.sortBy === 'position' ? sortDirArrow: ''} </th>
                <th style={thStyle} onClick={this.sortChange.bind(this, 'office')}>Office {this.state.sortBy === 'office' ? sortDirArrow: ''}</th>
                <th style={thStyle} onClick={this.sortChange.bind(this, 'age')}>Age {this.state.sortBy === 'age' ? sortDirArrow: ''}</th>
                <th style={thStyle}>Start Date</th>
                <th style={thStyle}>Salary</th>
            </tr>
            </thead>
            <tbody>
            {filteredContacts.map((data,idx) => {
                return (
                <tr key={idx}>
                    <td style={tdStyle}>{data.name}</td>
                    <td style={tdStyle}>{data.position}</td>
                    <td style={tdStyle}>{data.office}</td>
                    <td style={tdStyle}>{data.age}</td>
                    <td style={tdStyle}>{data.start_date}</td>
                    <td style={tdStyle}>{data.salary}</td>
                </tr>
                )
            })}
            </tbody>
            </table>
        </div>
        )
    }

}

const styles = {
    thStyle: {
      paddingTop: '12px',
      paddingBottom: '12px',
      textAlign: 'left',
      backgroundColor: '#00008B',
      color: 'white'
    },
    tdStyle: {
      border: '1px solid #ddd',
      padding: '8px',
    },
    tableStyle: {
      fontFamily: 'Trebuchet MS',
      borderCollapse: 'collapse',
      width: '100%'
    }
  }

export default Table