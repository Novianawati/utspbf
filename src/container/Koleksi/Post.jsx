import React from "react";

const Post = (props) => {
    return(
            <div class="koleksi">
                <div class="gambar-koleksi">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Buku" />
                </div>
                <div class="konten-koleksi">
                    <div class="judul-koleksi">{props.judul}</div>
                    <p class="isi-koleksi">{props.isi}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
                </div>
            </div>
    )
}

export default Post;