<template>
  <div>
    <!-- awal -->
    <!-- <div class="row">
  <div class="card col-sm-4">
    <div class="cardorderan" >
      <h5 class="card-title">Contact us for information and orders</h5>
        <br />
        <p class="card-text">Kami Selalu siap untuk kepuasan pelanggan,buka 24jam untuk layanan.</p>
    <p>"Pemesanan bisa melalui Telpon, Whatsapp & Website"</p>
    <br />
    <br />
  <br />

    <a class="btn btn-primary" style="background-color: green;" href="https://wa.me/081252526816?text=towing" role="button"
  ><i class="fab fa-whatsapp me-2"></i>Whatsapp</a>
  <br />

</div>
</div>

<div class="col-sm-4">
    <div class="card">
      <h5 class="card-title">A Better Way to Use Our Services</h5>
        <br />
        <div scale="20">
     <a><i class="fa-solid fa-location-dot me-3"></i>Lokasi Penjemputan</a>
    </div>
    <div>
     <a><i class="fa-solid fa-route me-3"></i>Destinasi Pengiriman</a>
    </div>
    <div>
     <a><i class="fa-solid fa-calculator me-3"></i>Kalkulasi Biaya anda</a>
    </div>
    <div>
      <a><i class="fa-solid fa-truck-fast me-3"></i>Pesan Layanan Derek</a>
    </div>
    <div></div>
    <br />
    <br />
  <br />
  <br />
    <router-link to="/order">
    <a class="btn btn-primary" style="background-color: green;" href="#!" role="button">Calculate</a>
  </router-link>
  <br />
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card">
      
        <form>
          <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nama Lengkap</label>
      <input type="Text" v-model="namalen" class="form-control" id="inputEmail4" placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Whatsapp</label>
      <input type="number" v-model="nowa" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Lokasi Jemput</label>
      <input type="Text" v-model="lokjem" class="form-control" id="inputEmail4" placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Lokasi Tujuan</label>
      <input type="Text" v-model="loktuj" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Tanggal</label>
      <input type="date" v-model="tgl" class="form-control" id="inputEmail4" placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Jam</label>
      <input type="number" v-model="jam" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
        </form>
        <a class="btn btn-primary" style="background-color: green;" href="#!" @click="storeCar" value="Store" role="button">submit</a>
      </div>
  </div>

  </div> -->
    <!-- akhir -->
    <div class="row ">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Contact us for information and orders</h5>
        <br />
        <p class="card-text">Kami Selalu siap untuk kepuasan pelanggan,buka 24jam untuk layanan.</p>
    <p>"Pemesanan bisa melalui Telpon, Whatsapp & Website"</p>
    <br />
    <br />
  <br />

    <a class="btn btn-primary" style="background-color: green;" href="https://wa.me/081252526816?text=towing" role="button"
  ><i class="fab fa-whatsapp me-2"></i>Whatsapp</a>
  <br />
      </div>
      <br />
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">A Better Way to Use Our Services</h5>
        <br />
        <div scale="20">
     <a><i class="fa-solid fa-location-dot me-3"></i>Lokasi Penjemputan</a>
    </div>
    <div>
     <a><i class="fa-solid fa-route me-3"></i>Destinasi Pengiriman</a>
    </div>
    <div>
     <a><i class="fa-solid fa-calculator me-3"></i>Kalkulasi Biaya anda</a>
    </div>
    <div>
      <a><i class="fa-solid fa-truck-fast me-3"></i>Pesan Layanan Derek</a>
    </div>
    <div></div>
    <br />
    <br />
  <br />
  <br />
    <router-link to="/order">
    <a class="btn btn-primary" style="background-color: green;" href="#!" role="button">Calculate</a>
  </router-link>
  <br />
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <form>
          <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nama Lengkap</label>
      <input type="Text" v-model="namalen" class="form-control" id="inputEmail4" placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Whatsapp</label>
      <input type="number" v-model="nowa" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Lokasi Jemput</label>
      <input type="Text" v-model="lokjem" class="form-control" id="inputEmail4" placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Lokasi Tujuan</label>
      <input type="Text" v-model="loktuj" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Tanggal</label>
      <input type="date" v-model="tgl" class="form-control" id="inputEmail4" placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Jam</label>
      <input type="text" v-model="jam" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
        </form>
        <a class="btn btn-primary" style="background-color: green;" href="#!" @click="Pesan" value="Store" role="button">submit</a>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      Pesanan: [],
      namalen: "",
      nowa: "",
      lokjem: "",
      loktuj: "",
      tgl: "",
      jam: "",
    };
  },
  methods: {
    Pesan() {
      if (this.namalen, this.nowa, this.lokjem, this.loktuj, this.tgl, this.jam.length){
        // push the new car to list
        this.Pesanan.push(this.namalen);
        this.Pesanan.push(this.nowa);
        this.Pesanan.push(this.lokjem);
        this.Pesanan.push(this.loktuj);
        this.Pesanan.push(this.tgl);
        this.Pesanan.push(this.jam);

        // store the data in localStorage
        localStorage.setItem("Pesanan", JSON.stringify(this.Pesanan));

        // clear the input
        this.namalen = "";
        this.nowa = "";
        this.lokjem = "";
        this.loktuj = "";
        this.tgl = "";
        this.jam = "";
      }
    },

    getCars() {
      this.Pesanan = JSON.parse(localStorage.getItem("Pesanan"));
    },
  },
};

</script>
