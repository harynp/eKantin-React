import React, { Component } from 'react'

class DropDown extends Component {
    constructor() {
        super()
        this.rows = {
            menus: ['About','Profile', 'Vision', 'Contact', 'Tools' ,'Mision', 'Support']
        }
        this.state = {
            listMenu: this.rows.menus,
            searchMenu: ''
        }
    }
    searchMenuHandle (event) {
        this.setState({
            searchMenu : event.target.value
        })
    }

    render() {
        let filteredMenus = this.state.listMenu.filter(
            (menu) => {
                return menu.toLowerCase().indexOf(this.state.searchMenu.toLowerCase()) !== -1;
            }
        )
        return (
            <div class="dropdown">
            <button class="dropbtn">Dropdown Menu</button>
            <div class="dropdown-content">
            Search : <input type="text" placeholder="Search By Menu" value={this.state.searchMenu} onChange={this.searchMenuHandle.bind(this)}/>
                {filteredMenus.map((data,idx) => {
                    return (
                        <a href="/">{data}</a>
                    )
                })}
            </div>
            </div>
        )
        
    }
}

export default DropDown 