import React, {useReducer} from 'react'
import { Container, Row, Col, Card, CardImg, Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'

import { keranjangContext } from '../../../App'

function HookReducer () {

const countContext = useContext(keranjangContext)
    return(
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                <Card>
                    <CardImg top width="100%" src="https://cf.shopee.co.id/file/b11f39d4cb12bab3a3f9246340f9d261" alt="Card image cap" />
                </Card>
                </Col>
                <Col xs="6">
                <h3>Kaset CD-R Plus GT-PRO 700 MB</h3>
                <p>Harga</p>
                <h3>Rp. {countContext.keranjangState.hargatotal}</h3>
                <p>Jumlah </p>
                    <Row>
                        <Col><Button onClick={()=> countContext.keranjangDispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={()=> countContext.keranjangDispatch({type:'kurang'})}color="danger">-</Button></Col>
                    </Row>
                <br/>
                <Button color="danger" size="lg"> Total Rp. {countContext.keranjangState.hargatotal}</Button>
                <hr/>
                <NavLink to='/tagihan'>Tagihan Belanja</NavLink>
                </Col>
            </Row>
        </Container>
    )
}
export default HookReducer