<template>
  <div>
        <!-- Header -->
    <header id="header" class="pt-2 text-right">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="text-container pt-5 heading">
                        <h1 class="h1-large">آرایشگاه هزاردستان</h1>
                        <p class="p-large text-justify">سالن هزاردستان بخشی طبق آمار سالهاست بالاترین رنکینگ رو در بین آرایشگاه های مردانه دارد.
                            رزومه قوی و موفق و همکاری های شخص حمید بخشی با معتبرترین برندها و آرتیست های داخلی و خارجی ، باعث شد تا این شخص به یکی از قویترین و سرشناس ترین میکاپ آرتیست ها و آرایشگران کرمان تبدیل بشه.
                            نگران چیزی نباشید چون شما نفر اول رو انتخاب کردید…
                            
                            خدمات سالن:
                            – هیرکات سر و صورت
                            – پاکسازی تخصصی پوست (هیدرودرم ، میکرودرم ، نیدلینگ…)
                            – خدمات تخصصی داماد (با بیشترین نمونه کار و رضایت طبق رنکینگ)
                            – خدمات صافی و کراتینه مو (صافی – احیا )
                            از طریق راه های ارتباطی زیر شما مستقیما از خود ایشان وقت میگیرید. حتما پیشنهاد میشود…</p>
                        <h3>آدرس:</h3>
                        <p>کرمان، میدان آزادی، ابتدای خیابان بهمنیار، نبش کوچه 17 روبروی داروخانه دکتر عبدالهیان</p> 
                        <div class="footer">
                            <h4>شبکه‌های اجتماعی:</h4>
                            <div class="text-right">
                                <div class="footer-col third text-center">
                                    <span class="fa-stack d-block">
                                        <a href="#your-link">
                                            <i class="fas fa-circle fa-stack-2x"></i>
                                            <i class="fab fa-telegram fa-stack-1x"></i><span class="mx-5">HezardastanBarber</span>   
                                        </a>
                                    </span>
                                    <span class="fa-stack d-block">
                                        <a href="#your-link">
                                            <i class="fas fa-circle fa-stack-2x"></i>
                                            <i class="fab fa-instagram fa-stack-1x"></i><span class="mx-5">HezardastanBarber</span>   
                                        </a>
                                    </span>
                                    <span class="fa-stack d-block">
                                        <a href="#your-link">
                                            <i class="fas fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-phone fa-stack-1x"></i><span class="mx-5" >{{ test('00989369182547') }}</span> 
                                        </a>
                                    </span>
                                </div> <!-- end of footer-col -->
                            </div> <!-- end of col -->
                        </div>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4 logo-style">
                    <div class="image-container text-center">
                        <img class="img-fluid image-center" src="images/header.png" alt="alternative">
                    </div> <!-- end of image-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </header> <!-- end of header -->
    <!-- end of header -->


    <!-- map -->
    <img class="mx-auto d-block img-fluid" src="images/map.jpg" alt="">

    <!-- image gallery -->
    <div class="m-5">
        <h3 class="text-center">آلبوم تصاویر</h3>
        <div class="gallery">
            <img class="gallery-image" src="images/1.jpg" alt="" />
            <img class="gallery-image" src="images/2.jpg" alt="" />
            <img class="gallery-image" src="images/3.jpg" alt="" />
            <img class="gallery-image" src="images/4.jpg" alt="" />
            <img class="gallery-image" src="images/5.jpg" alt="" />
            <img class="gallery-image" src="images/6.jpg" alt="" />
        </div>
    </div>

    <hr>
    <!-- Copyright -->
    <div class="copyright mt-3  bg-transparent ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-medium text-center"> تمامی حقوق برای <a href="#your-link">جوپیتر</a> محفوظ میباشد</p>
                    <p class="p-small"><a href="#">jupiter.com</a></p>
                </div> <!-- end of col -->
            </div> <!-- enf of row -->
        </div> <!-- end of container -->
    </div> <!-- end of copyright --> 
    <!-- end of copyright -->
    
    <!-- modal -->
    <div id="modall" class="modall">
        <img id="modall-image" class="modall-image" src="" alt="">
    </div>
  </div>
</template>

<script>

import getPersianNumbers from '../assets/latinToPersianNum'

export default {
  name: 'HelloWorld',
  data(){
    return {
      persianNum : ''
    }
  },
  props: {
   
  },
  methods: {
    test: function(test){
      return getPersianNumbers(test)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
