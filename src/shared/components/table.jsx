import Table from 'rc-table';
const React = require('react');
// const Table = require('rc-table').Table;

const columns = [
    {title: 'Name', dataIndex: 'name', key:'name', width: 100},
    {title: 'Age', dataIndex: 'age', key:'age', width: 100},
    {title: 'Address', dataIndex: 'address', key:'address', width: 200}
    // {title: 'Apeartions', dataIndex: '', key:'opeartions', render: () => <a href="#">Delete</a>}
];

const data = [
    { name: 'Jack', age: 28, address: 'some where', key:'1' },
    { name: 'Rose', age: 36, address: 'some where', key:'2' }
];

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Anxin Table</h1>
                <Table
                    columns={columns}
                    scroll={{x:200, y:200}}
                    data={data}
                />
            </div>
        );
    }
});
