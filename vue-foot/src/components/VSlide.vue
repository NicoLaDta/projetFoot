<template>
<div class="slider">
    <agile :options="options">
        <div class="slide">
            <!-- <h3>slide 1</h3> -->
            <img class="logo-club" :src="photo" />
        </div>
        
        <div class="slide">
           <img class="logo-club" :src="logo" />
        </div>
         <template slot="prevButton">prev</template>
    <template slot="nextButton">next</template>
    </agile>
</div>
</template>

<script>
export default {
    data() {
    return {
      photo: require("@/assets/actual.png"),
      logo: require("@/assets/logo.png"),
      responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        dots: false
                    }
                },
                
                {
                    breakpoint: 900,
                    settings: {
                        arrows: true,
                        dots: true,
                        infinite: false
                    }
                }
            ]
        }
    }
    }

</script>

<style scoped>
.slider{
    width: 100%;
}

</style>