<template>
    <div >
  <br />
  <br />
<div class="card ">
  <div class="container">
            <div class="intro">
                <br />
                <h2 class="text-center">Gallery</h2>
                <p class="text-center">Beberapa ini adalah gambar truk kami yang sedang melakukan pelayanan ke customer. </p>
                
            </div>
            <div class="row photos">
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk1.jpg"></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk2.jpg"></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk3.jpg"></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk4.jpg"></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk5.jpg"></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk6.jpg"></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk7.jpg"></div>
                <div class="col-sm-6 col-md-4 col-lg-3 item"><img class="img-fluid" src="../assets/truk8.jpg"></div>
            </div>
            <br />
            <br />
        </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style>
.photo-gallery {
  color:#313437;
  background-color:#fff;
}

.photo-gallery p {
  color:#7d8285;
}

.photo-gallery h2 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .photo-gallery h2 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.photo-gallery .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto 40px;
}

.photo-gallery .intro p {
  margin-bottom:0;
}

.photo-gallery .photos {
  padding-bottom:20px;
}

.photo-gallery .item {
  padding-bottom:30px;
}

</style>