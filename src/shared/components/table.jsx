import Table from 'rc-table';
const React = require('react');

// const columns = [
//     {title: 'Name', dataIndex: 'name', key:'name', width: 100},
//     {title: 'Age', dataIndex: 'age', key:'age', width: 100},
//     {title: 'Address', dataIndex: 'address', key:'address', width: 200}
//     // {title: 'Apeartions', dataIndex: '', key:'opeartions', render: () => <a href="#">Delete</a>}
// ];

// const data = [
//     { name: 'Jack', age: 28, address: 'some where', key:'1' },
//     { name: 'Rose', age: 36, address: 'some where', key:'2' }
// ];


                
const columns = [
    {title: 'PEP', dataIndex: 'PEP', key:'PEP', width: 100},
    {title: 'PEP Desc.', dataIndex: 'PEP Description', key:'PEP Description', width: 250},
    {title: 'BE Location', dataIndex: 'Backend Location', key:'Backend Location', width: 70},
    {title: 'Component1', dataIndex: 'Component Level 1', key:'Component Level 1', width: 100},
    {title: 'Component1 Desc.', dataIndex: 'Component Level 1 Desc.', key:'Component Level 1 Desc.', width: 250},
    {title: 'Component1 Category', dataIndex: 'Component Level 1 Category', key:'Component Level 1 Category', width: 100},
    {title: 'Component2', dataIndex: 'Component Level 2', key:'Component Level 2', width:100},
    {title: 'Component2 Desc.', dataIndex: 'Component Level 2 Desc.', key:'Component Level 2 Desc.', width: 150},
    {title: 'Component2 Category', dataIndex: 'Component Level 2 Category', key:'Component Level 2 Category', width: 100},
    {title: 'Component2 Location', dataIndex: 'Component Level 2 Location', key:'Component Level 2 Location', width:100},
    {title: 'Component3', dataIndex: 'Component Level 3', key:'Component Level 3', width: 100},
    {title: 'Component3 Desc.', dataIndex: 'Component Level 3 Desc.', key:'Component Level 3 Desc.', width: 150},
    {title: 'Component3 Category', dataIndex: 'Component Level 3 Category', key:'Component Level 3 Category', width: 100},
    {title: 'Component3 Location', dataIndex: 'Component Level 3 Location', key:'Component Level 3 Location', width:100},
    {title: 'Net Good Die', dataIndex: 'Net Good Die', key:'Net Good Die'},
];

module.exports = React.createClass({
    render: function() {
        console.log("In component!!!!!!!");
        console.log(rows);
        return (
            <div>
                <h1>PG Logic BOM - Demo Table</h1>
                <Table
                    useFixedHeader
                    columns={columns}
                    scroll={{x:true, y:500}}
                    data={rows}
                 />
            </div>
        );
    }
});
