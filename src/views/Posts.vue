<template>
<div >
<br />
<br />
<div class="container-fluid">

<TamAtas />
<div class="card text-dark bg-light">
</div>
<br />
<Kontak />
<br />
</div>
<br />
<Service />
<br />
<truk />
<Galery />
<Footer />


  </div>



</template>

<script>
// @ is an alias to /src
import Galery from "@/components/Galery.vue";
import Kontak from '../components/Kontak.vue';
import Footer from '../components/Footer.vue';
import Service from '../components/Service.vue';
import TamAtas from '../components/TamAtas.vue';
import truk from '../components/truk.vue';


export default {
  components: {
    Galery,
    Kontak,
    Footer,
    Service,
    TamAtas,
    truk
  }
};
</script>


<style>

</style>