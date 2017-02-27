const React = require('react');
// import Dropdown from 'react-dropdown'

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    {
        type: 'group', name: 'group1', items: [
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' }
    ]
    },
    {
        type: 'group', name: 'group2', items: [
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' }
    ]
    }
];

// const defaultOption = options[0];

// module.exports = React.createClass({
//     render: function() {
//         return (
//             <Dropdown
//                 options={options}
//                 onChange={this._onSelect}
//                 value={defaultOption}
//                 placeholder="Select an option"
//             />
//         );
//     }
// });


const Filter = React.createClass({
    getInitialState: function () {
        return {
            filterNmaes: this.props.optionNames
        };
    },

    remove: function () {
        console.log('Removing comment');
        this.props.deleteFilter(this.props.index);
    },

    eachOption: function (optionName, i) {
        return (
            <option name={optionName}>
                {optionName}
            </option>
        );
    },

    render: function() {
        return (
            <div>
                <select name="filterKeys">
                    {this.state.filterNmaes.map(this.eachOption)}
                </select>
                <textarea ref="newText" defaultValue={this.props.children} name="filterValues"></textarea>
                <button onClick={this.remove}>
                    Remove
                </button>
            </div>
        );
    }
});

const FilterBoard = React.createClass({
    getInitialState: function() {
        return {
            filters: []
        };
    },

    add: function(text) {
        var arr = this.state.filters;
        arr.push(text);
        this.setState({filters: arr});
    },

    deleteFilter: function(i) {
        console.log("Removing Filter: " + i);
        var arr = this.state.filters;
        arr.splice(i, 1);
        this.setState({filters: arr});
    },

    updateFilter: function(newText, i) {
        console.log("updating commen: " + i);
        var arr = this.state.filters;
        arr[i] = newText;
        this.setState({filters: arr});
    },

    eachFilter: function(text, i) {
        return (
            <Filter key={i} index={i} updateFilter={this.updateFilter} deleteFilter={this.deleteFilter} optionNames={this.props.optionNames}>
                {text}
            </Filter>
        );
    },

    render: function() {
        return (
            <div>
                <form method="post" action="/" enctype='application/json'>
                    <div>{this.state.filters.map(this.eachFilter)}</div>
                    <button type="button" onClick={this.add.bind(null, "Default text")}>Add Filter</button>
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
});

module.exports = FilterBoard;
