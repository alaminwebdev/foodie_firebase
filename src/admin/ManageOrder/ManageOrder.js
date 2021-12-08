import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchAllOrder } from '../../redux/adminActionCreators'
import OrderTable from './ManageOrderTable/OrderTable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'


// accept state as a props from intial state 
const mapStateToProps = state => {
    return {
        orders: state.customBurger.orders,
        customOrderLoading: state.customBurger.orderLoading,

        defaultOrders: state.dishes.defaultOrders,
        defaultOrderLoading: state.dishes.orderLoading,

        ingredientPrice: state.customBurger.ingredientPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllOrder: () => dispatch(fetchAllOrder()),
    }
}



function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
console.log(rows)



const ManageOrder = props => {

    useEffect(() => {
        props.fetchAllOrder();
    }, [])

    // props.defaultOrders.map((item)=>{
    //     console.log(item)
    // })

    return (
        <Container maxWidth="lg" sx={{ my: 5 }}>
            <Typography variant="h4" color="initial" sx={{ my: 5 }}>Default Order</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Order No.</TableCell>
                            <TableCell  >Address</TableCell>
                            <TableCell >Phone No.</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.defaultOrders.map((order) => (
                            <OrderTable key={order.id} order={order} details={order.cartItems} price={order.totalPrice} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h4" color="initial" sx={{ my: 5 }}>Custom Order</Typography>
            <TableContainer component={Paper} >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Order No.</TableCell>
                            <TableCell  >Address</TableCell>
                            <TableCell >Phone No.</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.orders.map((order) => (
                            <OrderTable key={order.id} order={order} details={order.ingredients} price={order.orderPrice}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrder)

