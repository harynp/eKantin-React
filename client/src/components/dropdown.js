import React, { Component } from 'react'

class DropDown extends Component {
    constructor() {
        super()
        this.rows = {
            menus: ['About','Profile', 'Vision', 'Contact', 'Tools' ,'Mision', 'Support']
        }
        this.state = {
            filteredMenu: this.rows.menus,
            searchMenu: ''
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.openedDropDownMenu} className="button"><h1>Dropdown Menu</h1></button>
            </div>
        )
        
    }
}

export default DropDown 