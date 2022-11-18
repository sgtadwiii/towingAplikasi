<template>
  <div >
    
    <br />
  <br />
  <br />
  <br />
    <div class="row">
  <div class="card col-sm-4">
    <div class="cardorderan" >
      <h2 class="headorder">Tampilin Data</h2>
      <br />
      <br />
  <button class="btn btn-success" @click="getCars">Orderan</button>
  <div>
  <ul class="list-group">
    <li v-for="(namalen, b) in Pesanan" :key="b">
      {{ namalen }}
    </li>
  </ul>
</div>
<br />
<button class="btn btn-success" @click="getSopir">Data Sopir</button>
<div>
  <ul class="list-group">
    <li v-for="(namalensp, a) in sopir" :key="a">
      {{ namalensp }}
    </li>
  </ul>
</div>
<br />
<div>
<button class="btn btn-success" @click="getTrek">Data Truk</button>
<div class="card">
  <ul class="list-group">
    <li v-for="(jenistruk, c) in truck" :key="c">
      {{ jenistruk }}
    </li>
  </ul>
</div>
</div>
<br />
</div>
</div>

<div class="col-sm-4">
    <div class="card">
      <h2 class="headorder">Data Sopir</h2>
      <div class="card-body">
        <form>
          <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nama Lengkap</label>
      <input type="Text" v-model="namalensp" class="form-control"  placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Whatsapp</label>
      <input type="number" v-model="nowasp" class="form-control"  placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Id</label>
      <input type="number" v-model="idsp" class="form-control"  placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">jenistruk</label>
      <select v-model="jnstruksp" class="form-control">
        <option >Izuzu</option>
        <option>Man</option>
        <option>Hino</option>
      </select>
    </div>
  </div>
        </form>
        <a class="btn btn-primary" style="background-color: blueviolet;" href="#!" @click="storePir" value="Store" role="button">submit</a>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card">
      <h2 class="headorder">Data Truk</h2>
      <div class="card-body">
        <form>
          <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputState">Jenis Truk</label>
      <select v-model="jenistruk" class="form-control">
        <option >Izuzu</option>
        <option>Man</option>
        <option>Hino</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">No Plat</label>
      <input type="text" v-model="noplat" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Id Truk</label>
      <input type="number" v-model="idtruk" class="form-control" id="inputEmail4" placeholder="">
    </div>
    </div>
        </form>
        <a class="btn btn-primary" style="background-color: blueviolet;" href="#!" @click="storeTruk" value="Store" role="button">submit</a>
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
      sopir: [],
      namalensp: "",
      nowasp: "",
      idsp: "",
      jnstruksp: "",
      truck: [],
      jenistruk: "",
      noplat: "",
      idtruk: "",
    };
  },
  methods: {
    storePir() {
      if (this.namalensp, this.nowasp, this.idsp, this.jnstruksp.length){
        // push the new car to list
        this.sopir.push(this.namalensp);
        this.sopir.push(this.nowasp);
        this.sopir.push(this.idsp);
        this.sopir.push(this.jnstruksp);

        // store the data in localStorage
        localStorage.setItem("sopir", JSON.stringify(this.sopir));

        // clear the input
        this.namalensp= "";
        this.nowasp= "";
        this.idsp= "";
        this.jnstruksp= "";
      }
    },

    storeTruk() {
      if (this.jenistruk, this.noplat, this.idtruk.length){
        // push the new car to list
        this.truck.push(this.jenistruk);
        this.truck.push(this.noplat);
        this.truck.push(this.idtruk);

        // store the data in localStorage
        localStorage.setItem("truck", JSON.stringify(this.truck));

        // clear the input
        this.jenistruk= "";
        this.noplat= "";
        this.idtruk= "";
      }
    },

    getSopir() {
      this.sopir = JSON.parse(localStorage.getItem("sopir"));
    },

    getTrek() {
      this.truck = JSON.parse(localStorage.getItem("truck"));
    },
 

    getCars() {
      this.Pesanan = JSON.parse(localStorage.getItem("Pesanan"));
    },
  },

};

</script>


<style>
.headorder{
  font-family:  Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: normal;
    font-style: normal;
}
.bgadmin{
  background-color: rgba(0, 0, 0, 0);
  
}
</style>