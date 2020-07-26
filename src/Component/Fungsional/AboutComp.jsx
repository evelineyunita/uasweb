import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Example = (props) => {
  return (
    <div> 
      <Card body inverse color="danger">
        <CardTitle>Eveline Yunita</CardTitle>
        <CardText>Saya membuat website ini untuk tugas Uas Pemrograman Web. Disini saya memilih membuat website mybookstore ini karena saya 
            memiliki kerabat yang usaha alat tulis jadi memudahkan saya untuk mendapat informasi tentang nya,selain itu juga alat tulis dibutuhkan 
            oleh semua orang dan dicari oleh kebanyakan orang jadi saya terpikir untuk membuat website ini.</CardText>
            <CardImg top width="100%" src="https://tokolaris2000.files.wordpress.com/2013/03/logo-bener1.jpg" alt="Card image cap" />

      </Card>
    </div>
  );
};

export default Example;