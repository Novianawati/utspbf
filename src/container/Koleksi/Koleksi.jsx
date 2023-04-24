import React, {Component} from "react";
import './Koleksi.css';
import Post from "./Post";

class Koleksi extends Component{
    state = {
        listKoleksi: [],
        insertKoleksi: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState( {
                    listKoleksi: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusKoleksi = (data) => {
        fetch('http://localhost:3001/posts/${data}', {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahKoleksi = (event) => {
        let formInsertKoleksi = {...this.state.insertKoleksi};
        let timestamp = new Date().getTime();
        formInsertKoleksi['id'] = timestamp;
        formInsertKoleksi[event.target.name] = event.target.value;
        this.setState({
            insertKoleksi: formInsertKoleksi
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKoleksi)
        })
        .then( (Response) => {
            this.ambilDataDariServerAPI();
        })
    }

    render() {
        return(
            <div className="post-koleksi">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahKoleksi}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahKoleksi}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Koleksi</h2>
                {
                    this.state.listKoleksi.map(koleksi => {
                        return <Post key={koleksi.id} judul={koleksi.title} isi={koleksi.body} idKoleksi={koleksi.id} hapusKoleksi={this.handleHapusKoleksi}/>
                    })
                }
            </div>
        )
    }
}

export default Koleksi;