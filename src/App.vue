<template>
<div class="container mx-auto my-5">
  <div class="grid grid-cols-12 xxs:px-3 px-0 mx-2">
    <div class="border-b border-black xxs:col-span-12 md:col-span-7 lg:col-span-6 2xl:col-span-5" id="heading-cont">
      <p class="uppercase xxs:tracking-tight md:tracking-tightest xxs:pb-10 sm:pb-2 bg-right-bottom xxs:text-6xl md:text-8xl lg:text-9xl bg-signature bg-no-repeat xxs:font-semibold sm:font-normal md:font-semibold" id="heading">Latest</p>
    </div>
  </div>

    <div class="grid grid-cols-12">

      <div class="xxs:col-span-12 md:col-span-6 lg:col-span-5 mt-5 mx-2">
        <p class="text-xs text-gray-700">POP-PUNK WEEK</p>
        <p class="xxs:w-3/4 md:w-4/5 text-4xl my-3 font-medium tracking-insane uppercase">A look back at wrapped tour's most formative beauty moments</p>
        <img src="/imgs/img1.jpg" class="object-fill h-auto w-full" alt="" srcset="">
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
 
 #heading{
   /* background: url(https://cdn2.bustle.com/nylon/2020/scribble-920a660055.svg) no-repeat; */
   background-position: right;
    padding-top: 15px;
   padding-bottom: 70px;
   margin-bottom: -50px; 
   margin-right: -10px;
   font-size: 80px;
    background-size: 150px 100px;
 }
 
@media (min-width: 576px) { 
  
 }


@media (min-width: 768px) { 
   #heading{
    padding-top: 60px;
    padding-bottom: 200px;
    margin-bottom: -200px; 
    margin-right: -465px;
    background-size: 350px 250px;
   font-size: 250px;
  }  
 }


@media (min-width: 992px) { 
   #heading{
    padding-top: 50px;
    padding-bottom: 200px;
    margin-bottom: -200px; 
    margin-right: -320px;
    background-size: 240px 200px;
  }
 }

@media (min-width: 1440px) { 
   #heading{
    padding-top: 50px;
    padding-bottom: 200px;
    margin-bottom: -200px; 
    margin-right: -195px;
    background-size: 240px 200px;
  }
 }




@media (min-width: 2550px) { 
  #heading{
    padding-top: 50px;
    padding-bottom: 200px;
    margin-bottom: -200px; 
    margin-right: -195px;
    background-size: 240px 200px;
  }
 }


#heading::first-letter{
  margin-right: -10px; 
}


</style>
