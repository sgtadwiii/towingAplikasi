<template>
  <div class="container">
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col-md-4">
        <div id="pesan">
          <div class="inner" id="inner">
            <div class="row photos md-3">
              <div
                class="
                  rounded-circle
                  bg-white
                  shadow-1-strong
                  d-flex
                  align-items-center
                  justify-content-center
                  mb-4
                  mx-auto
                "
                style="width: 100px; height: 100px"
              >
                <img
                  src="../assets/icon/tgo logo.png"
                  height="70"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <h1 id="title" class="text-white">Calculation</h1>
            <form>
              <br />
              <div class="form">
                <p id="title1" class="text-white" text-alight>
                  Masukkan Lokasi Anda
                </p>
                <gmap-autocomplete
                  :value="start_text"
                  class="form-control"
                  @input="value = $event.target.value"
                  @place_changed="setPlace"
                />
                <select v-model="start" style="display: none">
                  <option value=""></option>
                </select>
              </div>
              <div class="form-group">
                <p id="title1" class="text-white" text-alight>
                  Masukkan Lokasi Tujuan
                </p>
                <gmap-autocomplete
                  :value="end_text"
                  class="form-control"
                  @input="value = $event.target.value"
                  @place_changed="setPlace_end"
                />
                <select v-model="end" style="display: none">
                  <option value=""></option>
                </select>
              </div>
            </form>
            <div id="detail">
              <hr />
              <h4 id="title" class="text-white">Detail</h4>
              <div class="card-custom">
                <table>
                  <tr>
                    <th>Jarak</th>
                    <th>:</th>
                    <td id="distance"></td>
                  </tr>
                  <tr>
                    <th>Durasi</th>
                    <th>:</th>
                    <td id="duration"></td>
                  </tr>
                  <tr>
                    <th>Harga</th>
                    <th>:</th>
                    <td id="price"></td>
                  </tr>
                </table>
              </div>
            </div>
            <br />
            <div class="title">
              <router-link to="/">
                <button type="button" class="btn btn-light">
                  Home
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8" style="margin-left: -25px">
        <GmapMap
          :center="{ lat: -7.296889, lng: 112.74412 }"
          :zoom="10"
          map-type-id="roadmap"
          style="width: 800px; height: 650px"
        >
          <DirectionsRenderer
            travelMode="DRIVING"
            :origin="start"
            :destination="end"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>


<script>
import DirectionsRenderer from "@/components/DirectionsRenderer";

export default {
  components: {
    DirectionsRenderer,
  },

  data: () => ({
    start: "",
    end: "",
    start_text: "",
    end_text: "",
    place: "",
    distance: "",
  }),
  methods: {
    setPlace(place) {
      console.log(place.formatted_address);
      this.start = place.formatted_address;
      this.start_text = place.formatted_address;
    },
    setPlace_end(place) {
      console.log(place.formatted_address);
      this.end = place.formatted_address;
      this.end_text = place.formatted_address;
    },
  },
  computed: {
    origin() {
      if (!this.start) return null;
      return { query: this.start };
    },
    destionation() {
      if (!this.end) return null;
      return { query: this.end };
    },
  },
};
</script>


<style>
body {
  margin: 0;
  padding: 0;
}

#pesan {
  height: 100vh;
  background: #382e2e;
  overflow-y: auto;
  margin-right: 0px !important;
  padding-right: 0px !important;
}

#map {
  width: calc(100% - 400px);
  height: 100vh;
}

#title {
  text-align: center;
  margin: 5px 0;
}
#title1 {
  text-align: left;
  margin: 5px 0;
}

.inner {
  padding: 10px;
}

#detail {
  /* display: none; */
  margin-top: 50px;
}

#detail th,
#detail td {
  padding: 5px;
}

.card-custom {
  background-color: #fff;
  padding: 10px 15px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
</style>