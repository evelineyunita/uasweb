import React, { useContext } from 'react'
import { Container, Card } from 'reactstrap'
import { Jumbotron, Button, CardBody } from 'reactstrap';
import { keranjangContext } from '../../../App';

function Tagihan() {

    const countContext = useContext(keranjangContext)

    return (
        <Container>
            <Jumbotron>
            <Card body inverse color="danger">
                <h1 className="display-3">Tagihan</h1>
                <p className="lead">({countContext.keranjangState.jumlah}x) Action Figure Naruto.</p>
                <hr className="my-2" />
                <p>Harga Total Rp. {countContext.keranjangState.hargatotal}.</p>
                <p className="lead">
                    <Button color="primary">Lanjutkan Pembayaran</Button>
                </p>
                </Card>
            </Jumbotron>
        </Container>
    )
}
export default Tagihan