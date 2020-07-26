import React, {useState} from 'react'
import TampilComp from './TampilComp';
const HooksComp = () => {
    const [jumlah, tambahJumlah] = useState(0)

    //login
    const [dataLogin, setDataLogin] = useState({username:'eveline', token:'123abcd', isiLogin: true})

    //cek kondisi sudah login / belum

    let tampil;
    if(dataLogin.isiLogin){
        tampil = <TampilComp
        username = {dataLogin.username}
        fungsi = {tambahJumlah.bind(this)}
        jumlah = {jumlah} />
    }else{
        tampil= <TampilComp username="Maaf anda belum login" disable= {false}/>
    }

    return (
        <div>
            {tampil}
        </div>
    )

    }

export default HooksComp;