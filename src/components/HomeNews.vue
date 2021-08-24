<template>

   <main><br>
  <div class="container" id="inputs"><input type="text"  v-model=pers /> &nbsp;<i @click="getFilter(pers)" class="fa fa-search" id="search">&nbsp; Search countries by 2-letter ISO 3166-1 code</i></div>
    <div class="container"  v-for="result in news" :key="result.articles[0].source.author" id="main">

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[0].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[0].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[0].title}}</h4>
<img :src=result.articles[0].urlToImage alt="">


<h6>{{result.articles[0].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[0].author}},&nbsp;{{result.articles[0].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[0].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[1].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[1].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[1].title}}</h4>
<img :src=result.articles[1].urlToImage alt="">


<h6>{{result.articles[1].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[1].author}},&nbsp;{{result.articles[1].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[1].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[3].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[3].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[3].title}}</h4>
<img :src=result.articles[3].urlToImage alt="">


<h6>{{result.articles[3].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[3].author}},&nbsp;{{result.articles[3].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[3].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[4].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[4].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[4].title}}</h4>
<img :src=result.articles[4].urlToImage alt="">


<h6>{{result.articles[4].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[4].author}},&nbsp;{{result.articles[4].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[4].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[5].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[5].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[5].title}}</h4>
<img :src=result.articles[5].urlToImage alt="">


<h6>{{result.articles[5].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[5].author}},&nbsp;{{result.articles[5].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[5].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[6].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[6].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[6].title}}</h4>
<img :src=result.articles[6].urlToImage alt="">


<h6>{{result.articles[6].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[6].author}},&nbsp;{{result.articles[6].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[6].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[7].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[7].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[7].title}}</h4>
<img :src=result.articles[7].urlToImage alt="">


<h6>{{result.articles[7].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[7].author}},&nbsp;{{result.articles[7].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[7].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 



<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[10].author}}</span>
</div>

<div>
<span id="date">{{result.articles[10].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[10].title}}</h4>
<img :src=result.articles[10].urlToImage alt="">


<h6>{{result.articles[10].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[10].author}},&nbsp;{{result.articles[10].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[10].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[15].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[15].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[15].title}}</h4>
<img :src=result.articles[15].urlToImage alt="">


<h6>{{result.articles[15].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[15].author}},&nbsp;{{result.articles[15].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[15].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 
<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[16].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[16].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[16].title}}</h4>
<img :src=result.articles[16].urlToImage alt="">


<h6>{{result.articles[16].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[16].author}},&nbsp;{{result.articles[16].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[16].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 


<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[17].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[17].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[17].title}}</h4>
<img :src=result.articles[17].urlToImage alt="">


<h6>{{result.articles[17].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[17].author}},&nbsp;{{result.articles[17].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[17].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[18].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[18].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[18].title}}</h4>
<img :src=result.articles[18].urlToImage alt="">


<h6>{{result.articles[18].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[18].author}},&nbsp;{{result.articles[18].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[18].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 
<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[19].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[19].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[19].title}}</h4>
<img :src=result.articles[19].urlToImage alt="">


<h6>{{result.articles[19].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[19].author}},&nbsp;{{result.articles[19].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[19].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[9].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[9].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[9].title}}</h4>
<img :src=result.articles[9].urlToImage alt="">


<h6>{{result.articles[9].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[9].author}},&nbsp;{{result.articles[9].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[9].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[8].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[8].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[8].title}}</h4>
<img :src=result.articles[8].urlToImage alt="">


<h6>{{result.articles[8].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[8].author}},&nbsp;{{result.articles[8].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[8].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 
<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[11].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[11].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[11].title}}</h4>
<img :src=result.articles[11].urlToImage alt="">


<h6>{{result.articles[11].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[11].author}},&nbsp;{{result.articles[11].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[11].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 
<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[12].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[12].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[12].title}}</h4>
<img :src=result.articles[12].urlToImage alt="">


<h6>{{result.articles[12].description}}</h6>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[12].source.name}},&nbsp;{{result.articles[12].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[12].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[12].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[12].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[13].title}}</h4>
<img :src=result.articles[13].urlToImage alt="">


<h6>{{result.articles[13].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[13].author}},&nbsp;{{result.articles[13].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[13].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 
<div class="first">
<hr>

<div class="top">

<div>
<span id="abc">{{result.articles[2].source.name}}</span>
</div>

<div>
<span id="date">{{result.articles[2].publishedAt}}</span>
</div>


</div>

<div class="total">

<h4>{{result.articles[2].title}}</h4>
<img :src=result.articles[2].urlToImage alt="">

<h6>{{result.articles[2].description}}</h6>
</div>

<div class="down">

<div>
<h5>Author:&nbsp;{{result.articles[2].author}},&nbsp;{{result.articles[2].source.name}}</h5>
</div>

<div>
<h5 id="cat"><a v-bind:href=result.articles[2].url>Read More ...</a></h5>
</div>

</div>

<hr>
</div> 

    </div>
    </div>
   </main>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mapActions, mapState} from 'vuex';
    export default {

        data(){
      return{
      pers: "",

      }


        },
        methods: {
            ...mapActions(['fetchNews']),
            ...mapActions(['getFilter']),
                
            
        },
        created(){

            this.fetchNews();
        },
        computed:{
         ...mapState(['news']),

        }
    }
</script>

<style lang="scss" scoped>

.down{
display: flex;

color: black;
padding-left: 10px;
}
h5{
margin-top: 18px;
font-size: 13px;
font-weight: bold;
}
h4{
margin-top: 12px;
font-weight: bold;
text-align: start;
margin-bottom: 12px;
}

*{
box-sizing: border-box;
margin:0;
}
#main{
text-align: start;



}

img{

width: 300px;
height: 220px;

}

#date{
font-weight: bold;
font-size: 13px;
padding-left: 181px;
display: flex;
color: red;
}
#inputs{

text-align: center;
}
#abc{

font-weight: bold;
font-size: 16px;
}






.first{

text-align: start;
padding: 5px;
padding-left: 20px;
padding-bottom: 20px;

}

.top{
display: flex;
color: black;

padding-left: 12px;
}
h6{

color: grey;
margin-top: 12px;
}

#cat{
margin-top: 18px;
font-size: 13px;
font-weight: bold;
padding-left: 80px;


}
input[type="text"]{

width: 300px;
text-align: center;
border: solid 1px black;
border-radius: 5px 5px 5px 5px;
}

</style>