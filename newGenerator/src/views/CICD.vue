<template>
  <div class="ci">
    <div class="color">
    <b-container fluid>
      <b-row>
        <b-col md="12" lg="6">
          <!-- Colors -->
          <h1 class="header">{{ $t('CI.color') }}</h1>
          <b-row>
            <b-col class="color-box-size green-light"></b-col>
            <b-col class="color-box-size green-dark"></b-col>
            <b-col class="color-box-size blue-light"></b-col>
            <b-col class="color-box-size blue-dark"></b-col>
            <div class="w-100"></div>
            <b-col class="color-font">#82B43C</b-col>
            <b-col class="color-font">#004B32</b-col>
            <b-col class="color-font">#119CD4</b-col>
            <b-col class="color-font">#052A39</b-col>
            <div class="w-100"></div>
            <b-col class="color-font">Green RYB</b-col>
            <b-col class="color-font">British Racing Green</b-col>
            <b-col class="color-font">Caroline Blue</b-col>
            <b-col class="color-font">Gunmetal</b-col>            
          </b-row>

          <!-- Color Fonts -->
          <h1 class="header">{{ $t('CI.font_color') }}</h1>
          <b-row>
            <b-col cols="3" class="color-box-size font-black"></b-col>
            <b-col cols="3" class="color-box-size font-white"></b-col>
            <div class="w-100"></div>
            <b-col cols="3" class="color-font">#82B43C</b-col>
            <b-col cols="3" class="color-font">#004B32</b-col>
            <div class="w-100"></div>
            <b-col cols="3" class="color-font">Black</b-col>
            <b-col cols="3" class="color-font">White</b-col>          
          </b-row>

          <!-- Graphics -->
          <b-row>
            <h1 class="header mt-4">{{ $t('CI.graphics_elements') }}</h1>
          </b-row>
        </b-col>

        <!-- Second Column -->
        <b-col class="font" md="12" lg="6">

          <!-- Fonts -->
          <h1 class="header">{{ $t('CI.fonts') }}</h1>
          <b-row class="font-ubuntu">
            <b-col><h3><b>Ubuntu</b></h3></b-col>
            <div class="w-100"></div>
            <b-col>	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	 	Ä	Ö	Ü	</b-col>
            <div class="w-100"></div>
            <b-col>a	b	c	d	e	f	g	h	i	j	k	l	m	n	o	p	q	r	s	t	u	v	w	x	y	z	 	ä	ö	ü</b-col>
          </b-row>
          <b-row class="font-oswald-medium mt-4">
            <b-col><h3><b>Oswald Medium</b></h3></b-col>
            <div class="w-100"></div>
            <b-col>	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	 	Ä	Ö	Ü	</b-col>
            <div class="w-100"></div>
            <b-col>a	b	c	d	e	f	g	h	i	j	k	l	m	n	o	p	q	r	s	t	u	v	w	x	y	z	 	ä	ö	ü</b-col>
          </b-row>
          <b-row class="font-oswald-semibold mt-4">
            <b-col><h3><b>Oswald Medium</b></h3></b-col>
            <div class="w-100"></div>
            <b-col>	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	 	Ä	Ö	Ü	</b-col>
            <div class="w-100"></div>
            <b-col>a	b	c	d	e	f	g	h	i	j	k	l	m	n	o	p	q	r	s	t	u	v	w	x	y	z	 	ä	ö	ü</b-col>
          </b-row>
          <b-row class="font-oswald-bold mt-4">
            <b-col><h3><b>Oswald Medium</b></h3></b-col>
            <div class="w-100"></div>
            <b-col>	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	 	Ä	Ö	Ü	</b-col>
            <div class="w-100"></div>
            <b-col>a	b	c	d	e	f	g	h	i	j	k	l	m	n	o	p	q	r	s	t	u	v	w	x	y	z	 	ä	ö	ü</b-col>
          </b-row>

          <!-- Fonts rules -->
          <b-row class="mt-4">
            <b-col><h3>{{ $t('CI.use') }}</h3></b-col>
            <div class="w-100"></div>
            <b-col><b>{{ $t('CI.use_title') }}</b> <p>{{ $t('CI.use_title_desc') }}</p></b-col>
            <div class="w-100"></div>
            <b-col><b>{{ $t('CI.use_text') }}</b> <p>{{ $t('CI.use_text_desc') }}</p></b-col>
            <div class="w-100"></div>
            <b-col><b>{{ $t('CI.use_italic') }}</b> <p>{{ $t('CI.use_italic_desc') }}</p></b-col>
            <div class="w-100"></div>
            <b-col><b>{{ $t('CI.use_hyperlinks') }}</b> <p>{{ $t('CI.use_hyperlinks_desc') }}</p></b-col>
            <div class="w-100"></div>
            <b-col><b>{{ $t('CI.use_hashtag') }}</b> <p>{{ $t('CI.use_hashtag_desc') }}</p></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ci{
  text-align: left;
  padding: 30px;
}

.header{
  color: $font-dark;
  font-weight: bold;
}

.color-box-size{
  height: 200px;
}

.green-light{
  background-color: $green-light;
}

.green-dark{
  background-color: $green-dark;
}

.blue-light{
  background-color: $blue-light;
}

.blue-dark{
  background-color: $blue-dark;
}

.font-black{
  background-color: $font-dark;
}

.font-white{
  background-color: $font-light;
}

.color-font{
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 0.7em;
  }

  @media screen and (max-width: 370px) {
    font-size: 0.4em;
  }
}

.font{
  font-size: 1.3em;

  @media screen and (max-width: 990px) {
    padding: 0;
  }
}

.font-ubuntu{
  font-family: $font-ubuntu;
}

.font-oswald-medium{
  font-family: $font-oswald;
  font-weight: $font-oswald-medium;
}

.font-oswald-semibold{
  font-family: $font-oswald;
  font-weight: $font-oswald-semibold;
}

.font-oswald-bold{
  font-family: $font-oswald;
  font-weight: $font-oswald-bold;
}
</style>
