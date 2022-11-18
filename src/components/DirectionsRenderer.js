import { MapElementFactory } from "vue2-google-maps";
{/* <template>
<div id="detail">
                            <hr />
                            <h4>Detail Pesanan</h4>
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
</template> */}


export default MapElementFactory({
  name: "directionsRenderer",

  ctr() {
    return window.google.maps.DirectionsRenderer;
  },

  events: [],

  mappedProps: {},

  data:() => ({
    response: ""
  }),

  props: {
    origin: { type: String },
    destination: { type: String },
    travelMode: { type: String }
  },

  methods:{
    getDistance(response){
      this.$emit('get-distance', response.routes[0].legs[0].distance.text);
    }
  },

  afterCreate(directionsRenderer) {
    let directionsService = new window.google.maps.DirectionsService();


    
    this.$watch(      
      () => [this.origin, this.destination, this.travelMode],
      () => {       
        let { origin, destination, travelMode} = this;
        console.log('origin : '+origin);
        if (!origin || !destination || !travelMode) return;

        directionsService.route(
          {
            origin,
            destination,
            travelMode
          },
          (response, status) => {
            if (status !== "OK") return;
            directionsRenderer.setDirections(response);
            this.response = response;
            var directionData = response.routes[0].legs[0];
            var harga = 8;
            if(!directionData){
              return;
            }else{
              document.getElementById('distance').innerHTML += directionData.distance.text ;
              document.getElementById('duration').innerHTML += directionData.duration.text ;
              document.getElementById('price').innerHTML += 'Rp' + directionData.distance.value * harga ;
            }

          }
        );
      }
    );
  }
});

