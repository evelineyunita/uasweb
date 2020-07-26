import React from 'react'
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';
function RowProduct() {

    const { value, setvalue } = useContext(CartContext)
    return (
        < Col >
            <Card>
                <CardImg top width="100%" src="https://cf.shopee.co.id/file/d3904291b190d13b3fcf70f686694a91" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Pensil Mekanik Kenko 0.5</CardTitle>
                    <CardSubtitle>Rp.8.000</CardSubtitle>
                    <Button onClick={()=>setvalue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://cf.shopee.co.id/file/5993a90eaaaa714955eac44578e739de" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Snowman Spidol Gl2 Hitam</CardTitle>
                    <CardSubtitle>Rp.9.000</CardSubtitle>
                    <Button onClick={()=>setvalue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://cf.shopee.co.id/file/e958c4a10bd70f5193b91087430a4b8e" alt="Card image cap" />
                <CardBody>
                    <CardTitle>	Joyko Correction Jk-101</CardTitle>
                    <CardSubtitle>Rp.5.000</CardSubtitle>
                    <Button onClick={()=>setvalue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/20/1895292/1895292_bc3f6d27-75a4-440f-bcc8-eb42a8a19a4a_700_700.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Penggaris Besi 30cm</CardTitle>
                    <CardSubtitle>Rp.2.500</CardSubtitle>
                    <Button onClick={()=>setvalue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/28/310355/310355_1350e336-560e-46df-a37d-2b228fead34b_800_450.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Buku Gambar</CardTitle>
                    <CardSubtitle>Rp.5.000</CardSubtitle>
                    <Button onClick={()=>setvalue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/3/19/9402163/9402163_4a2849cc-b610-4ff9-afde-c947ec30607e_700_700.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Penghapus Stabilo Hitam</CardTitle>
                    <CardSubtitle>Rp.5.000</CardSubtitle>
                    <Button onClick={()=>setvalue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://cf.shopee.co.id/file/ee0fb8cba9ff002b56d4f64dc0c5ddaf" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Flashdisk Toshiba 4GB</CardTitle>
                    <CardSubtitle>Rp.95.000</CardSubtitle>
                    <Button onClick={()=>setvalue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
        </Col >

    )

}
export default RowProduct