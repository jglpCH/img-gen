<template>
  <div>
    <v-style id="style">
      @font-face { font-family: 'Oswald'; font-style: normal; font-weight: 400;
      src: local('Oswald Regular'), local('Oswald-Regular'),
      url(data:font/woff2;base64,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)
      format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153,
      U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } #outer * { font-family:
      'Oswald'; } #outer { position:relative; background-size: cover;
      background-color: #f0f0f0; display: flex; flex-direction: column;
      justify-content: center; align-items: center; background-position: center;
      background-repeat: no-repeat; overflow:hidden; } #content { position:
      relative; display: flex; flex-direction: column; align-items: center; }
      #content div { padding-bottom: 3px; color: white; white-space: nowrap; }
      #upper { padding-left: 0.4em !important; padding-right: 0.4em !important;
      } #logoBackground { position: absolute; background-color: white; bottom:
      -93%; width: 200%; height: 100%; transform: rotate(-10deg) } #logo {
      position: absolute; background-size: cover; right: 10px; bottom: 10px;
      background-repeat: no-repeat; }
    </v-style>
    <div class="container-fluid mt-3">
      <div class="alert alert-info">
        Aktuell funktioniert der Generator nur im
        <a href="https://www.google.com/chrome/">Google Chrome!</a> <br />

        Fehler und Verbesserungsvorschläge können hier hinzugefügt werden:
        <a
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/12gYzp4hnc4tvvLzGqMi59lJMe90oHHPct2l-x7ZAXro/edit"
          >Feature-Liste</a
        >
        <br />
        Bei sonstigen Fragen und Bemerkungen: @frickman (<a
          target="_blank"
          href="https://grunliberale.slack.com"
          >Slack</a
        >)
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Preset für Soziale Medien auswählen:</h4>
              <div class="card-text">
                <ul class="inline presets">
                  <li>
                    <router-link :to="{ query: { preset: 'sharepic' } }"
                      >SocialMedia-Sharepic
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'testimonial' } }"
                      >Testimonial
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'insta-story' } }"
                      >Instagram-Story
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'insta-post-hoch' } }"
                      >Instagram-Beitrag-Hochformat
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'insta-post-quer' } }"
                      >Instagram-Beitrag-Querformat
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'fb-cover' } }"
                      >Facebook Cover
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'fb-feed' } }"
                      >Facebook Feed
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'fb-link' } }"
                      >Facebook Linkvorschau
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'fb-event' } }"
                      >Facebook Event
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'fb-story' } }"
                      >Facebook Story
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'twitter-cover' } }"
                      >Twitter Cover
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ query: { preset: 'twitter-feed' } }"
                      >Twitter Feed
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <div class="card-body">
              <h4 class="card-title">Einstellungen</h4>

              <label for="backgroundImage">Hintergrundbild</label>

              <div class="row">
                <div class="col-md-8">
                  <input
                    class="form-control"
                    type="url"
                    id="backgroundImage"
                    v-model="backgroundImage"
                  />
                </div>
                <div class="col-md-4">
                  <label for="upload" class="btn btn-secondary btn-block"
                    >Datei hochladen</label
                  ><input
                    class="hidden"
                    type="file"
                    id="upload"
                    @change="useLocalFile"
                  /><br />
                </div>
              </div>

              Quellen für lizenzfreie Bilder:
              <ul class="inline external">
                <li>
                  <a
                    target="_blank"
                    href="https://www.pexels.com/de-de/royalty-free-images/"
                    >Pexels</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://pixabay.com/">Pixabay</a>
                </li>
                <li>
                  <a target="_blank" href="https://unsplash.com/">Unsplash</a>
                </li>
                <li>
                  <a target="_blank" href="https://gratisography.com/"
                    >Gratisopraphy</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.google.ch/imghp?tbs=sur:fm&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj4lbuW8b3fAhVLtYsKHXDaCbkQ_AUIDigB&biw=2048&bih=1011"
                    >Google Lizenfrei</a
                  >
                </li>
              </ul>

              <h4 class="card-title mt-4">Logo Einstellungen</h4>
              <div class="row">
                <div class="col-md-4">
                  <label for="region">Logo</label>
                  <select id="region" v-model="logo" class="form-control">
                    <option
                      v-for="logo in logos"
                      v-bind:value="logo.image"
                      v-bind:key="logo.value"
                      >{{ logo.text }}
                    </option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="logosize">Logo-Grösse</label>
                  <input
                    class="form-control"
                    type="number"
                    id="logosize"
                    v-model="logoSize"
                  />
                </div>

                <!-- <div class="col-md-4"><label for="twitterBorder">Rahmen ums Bild</label>
                  <div class="row">
                    <input class="form-control input-sm col-md-2" type="checkbox" id="twitterBorder" v-model="twitterBorder">
                    <Sketch v-if="showTwitterColor" v-model="twitterColor" class="mb-2"></Sketch>
                    <button @click="showTwitterColor = !showTwitterColor" class="btn btn-primary col-md-7" :style="{backgroundColor: twitterColor.hex, borderColor: twitterColor.hex}">Farbepicker ein/ausklappen</button>
                  </div>
                </div>-->
              </div>

              <div class="row">
                <div class="col-md-4">
                  <label for="saturation">Bild-Overlay</label>
                  <input
                    class="form-control"
                    type="range"
                    id="saturation"
                    v-model="backgroundOverlay"
                    min="0"
                    max="100"
                  />
                  <input
                    class="form-control"
                    type="number"
                    id="saturation2"
                    v-model="backgroundOverlay"
                  />
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-6">
                      <label for="width">Breite</label
                      ><input
                        class="form-control"
                        v-model="width"
                        type="number"
                        id="width"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="height">Höhe</label
                      ><input
                        class="form-control"
                        v-model="height"
                        type="number"
                        id="height"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label for="x">X-Position</label
                      ><input
                        class="form-control"
                        v-model="xPosition"
                        type="number"
                        id="x"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="y">Y-Position</label
                      ><input
                        class="form-control"
                        v-model="yPosition"
                        type="number"
                        id="y"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <h4 class="card-title mt-4">Balken Einstellungen</h4>
              <button class="btn btn-success mr-2" @click="addNewBar">
                Balken hinzufügen
              </button>
              <button class="btn btn-warning" @click="deleteOneBar">
                Balken entfernen
              </button>
              <div class="row mt-4">
                <div class="col-md-12">
                  <div
                    v-for="(bar, index) in bars"
                    v-bind:item="bar"
                    v-bind:index="index"
                    v-bind:key="bar.id"
                  >
                    <div class="bg-light mr-4 mb-4 pb-4 border row">
                      <div class="col-md-4">
                        <label for="xPosition">X-Position</label>
                        <input
                          class="form-control"
                          type="number"
                          id="xPosition"
                          v-model="bar.x"
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="yPosition">Y-Position</label>
                        <input
                          class="form-control"
                          type="number"
                          id="yPosition"
                          v-model="bar.y"
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="fontSize"
                          >Schriftgrösse (in <i>em</i>)</label
                        >
                        <input
                          class="form-control"
                          type="number"
                          step="0.1"
                          id="fontSize"
                          v-model="bar.fontSize"
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="rotation">Winkel</label>
                        <input
                          class="form-control"
                          type="number"
                          id="rotation"
                          v-model="bar.rotation"
                          disabled
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="fontUpperCase">Text Transformation</label>
                        <select
                          id="fontUpperCase"
                          v-model="bar.textTransform"
                          class="form-control"
                        >
                          <option value="uppercase">Alles gross</option>
                          <option value="none">Manuell</option>
                          <option value="lowercase">Alles klein</option>
                          <option value="capitalize"
                            >Erste Buchstabe vom Wort gross</option
                          >
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label for="color">Farbe</label>
                        <Sketch
                          v-if="bar.showColorPicker"
                          v-model="bar.colors"
                          class="mb-2"
                        ></Sketch>
                        <button
                          @click="bar.showColorPicker = !bar.showColorPicker"
                          class="btn btn-primary btn-block"
                          :style="{
                            backgroundColor: bar.colors.hex,
                            borderColor: bar.colors.hex
                          }"
                        >
                          Farbepicker ein/ausklappen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                id="button"
                @click="generate"
                class="btn btn-primary btn-lg btn-block mt-4"
              >
                Erstellen
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-2">
          <h2>Vorschau</h2>
          Du kannst:
          <em
            >Durch anklicken den Text editieren, durch ziehen den Textblock
            verschieben</em
          >
          <br />

          <div class="scale-relative mt-2" :style="scaleRelative">
            <div class="scale" :style="imageScale">
              <div id="container">
                <div id="outer" ref="outer" :style="outerStyles">
                  <div
                    id="content"
                    ref="content"
                    v-for="(bar, index) in bars"
                    v-bind:item="bar"
                    v-bind:index="index"
                    v-bind:key="bar.id"
                    @mousedown="startDrag"
                    @mouseup="stopDrag"
                    @mouseout="stopDrag"
                    @mousemove="shiftElement($event, bar)"
                    :style="contentStyles(bar)"
                  >
                    <div
                      id="upper"
                      lang="de-CH"
                      contenteditable
                      @keydown.enter.prevent=""
                      :style="barStyle(bar)"
                    >
                      für eine lebenswerte Stadt
                    </div>
                  </div>
                  <div id="logoBackground"></div>
                  <div id="logo" :style="logoStyles"></div>
                </div>
              </div>
            </div>
          </div>
          <h2 class="mt-4">Output</h2>
          <p>
            <em>Rechtslick->Bild kopieren</em> oder
            <em>Rechtslick->Bild speichern unter</em> um das Bild zu verwenden.
          </p>
          <div id="output" class="mb-4">
            <p>Klicke auf "Erstellen" um das Bild zu generieren.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Sketch } from "vue-color";

function toDataURL(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.onerror = function() {
    alert(
      "Das Bild konnte wegen eines Fehlers nicht geladen werde. Probiere ein anderes." +
        "\n\n" +
        "Mögliche Fehler: \n" +
        "Du bist offline. Geh online!\n" +
        "Cross-Origin-Header ist gesetzt: Da kannst du nichts machen, such dir ein anderes Bild."
    );
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}

let defaultProps = {
  hex: "#2D9CDB",
  hsl: {
    h: 201.7,
    s: 70.7,
    l: 51.8,
    a: 1
  },
  hsv: {
    h: 202,
    s: 79,
    v: 89,
    a: 1
  },
  rgba: {
    r: 45,
    g: 156,
    b: 219,
    a: 1
  },
  a: 0.9
};

let defaultPropsGreen = {
  hex: "#BED933",
  hsl: {
    h: 69.8,
    s: 68.6,
    l: 52.5,
    a: 1
  },
  hsv: {
    h: 286,
    s: 5,
    v: 76,
    a: 1
  },
  rgba: {
    r: 190,
    g: 217,
    b: 51,
    a: 1
  },
  a: 0.9
};

const presets = {
  sharepic: {
    width: 800,
    height: 600,
    logoSize: 177,
    xPosition: -80,
    yPosition: -124
  },
  testimonial: {
    width: 600,
    height: 800,
    logoSize: 165,
    xPosition: -12,
    yPosition: -211
  },
  "insta-story": {
    width: 1080,
    height: 1920,
    logoSize: 166,
    xPosition: -2,
    yPosition: -211
  },
  "insta-post-hoch": {
    width: 1080,
    height: 1350,
    logoSize: 206,
    xPosition: -52,
    yPosition: -211
  },
  "insta-post-quer": {
    width: 1080,
    height: 566,
    logoSize: 206,
    xPosition: -52,
    yPosition: -211
  },
  "fb-cover": {
    width: 640,
    height: 360,
    logoSize: 159,
    xPosition: -39,
    yPosition: -99
  },
  "fb-feed": {
    width: 1200,
    height: 1200,
    logoSize: 159,
    xPosition: -39,
    yPosition: -99
  },
  "fb-link": {
    width: 1200,
    height: 628,
    logoSize: 159,
    xPosition: -39,
    yPosition: -99
  },
  "fb-event": {
    width: 640,
    height: 360,
    logoSize: 159,
    xPosition: -39,
    yPosition: -99
  },
  "fb-story": {
    width: 1080,
    height: 1920,
    logoSize: 159,
    xPosition: -39,
    yPosition: -99
  },
  "twitter-cover": {
    width: 1500,
    height: 500,
    logoSize: 275,
    xPosition: -74,
    yPosition: -45
  },
  "twitter-feed": {
    width: 1024,
    height: 512,
    logoSize: 275,
    xPosition: -74,
    yPosition: -45
  }
};

const logos = [
  {
    text: "Schweiz",
    value: "CH-DE",
    image: require("./../assets/SVG/Schweiz.svg")
  },
  {
    text: "Suisse",
    value: "CH-FR",
    image: require("./../assets/SVG/Suisse.svg")
  },
  {
    text: "Zürich",
    value: "ZH",
    image: require("./../assets/SVG/Zürich.svg")
  },
  {
    text: "Stadt Züri",
    value: "STZH",
    image: require("./../assets/SVG/StadtZurich.svg")
  },
  {
    text: "Winterthur",
    value: "Winti",
    image: require("./../assets/SVG/Winti.svg")
  },
  {
    text: "Bern",
    value: "BE",
    image: require("./../assets/SVG/Bern.svg")
  },
  {
    text: "Aargau",
    value: "AG",
    image: require("./../assets/SVG/Aargau.svg")
  },
  {
    text: "Graubünden",
    value: "GR",
    image: require("./../assets/SVG/Graubünden.svg")
  },
  {
    text: "Luzern",
    value: "LU",
    image: require("./../assets/SVG/Luzern.svg")
  },
  {
    text: "Glarus",
    value: "GL",
    image: require("./../assets/SVG/Glarus.svg")
  },
  {
    text: "St. Gallen",
    value: "SG",
    image: require("./../assets/SVG/STGallen.svg")
  },
  {
    text: "Thurgau",
    value: "TG",
    image: require("./../assets/SVG/Thurgau.svg")
  },
  {
    text: "Zug",
    value: "ZG",
    image: require("./../assets/SVG/Zug.svg")
  },
  {
    text: "Solothurn",
    value: "SO",
    image: require("./../assets/SVG/Solothurn.svg")
  },
  {
    text: "Schwyz",
    value: "SZ",
    image: require("./../assets/SVG/Schwyz.svg")
  },
  {
    text: "Svizzera",
    value: "SV",
    image: require("./../assets/SVG/svizzera.svg")
  },
  {
    text: "Uni Bern",
    value: "UNIB",
    image: require("./../assets/SVG/UniBärn.svg")
  },
  {
    text: "Uri",
    value: "URI",
    image: require("./../assets/SVG/Uri.svg")
  },
  {
    text: "Beide Basel",
    value: "BB",
    image: require("./../assets/SVG/BeideBasel.svg")
  },
  {
    text: "Schaffhausen",
    value: "SH",
    image: require("./../assets/SVG/Schaffhausen.svg")
  },
  {
    text: "Tessin",
    value: "TI",
    image: require("./../assets/SVG/Tessin.svg")
  },
  {
    text: "Vaud",
    value: "VD",
    image: require("./../assets/SVG/Vaud.svg")
  },
  {
    text: "Genève",
    value: "GE",
    image: require("./../assets/SVG/Geneve.svg")
  },
  {
    text: "Fribourg",
    value: "FR",
    image: require("./../assets/SVG/Fribourg.svg")
  },
  {
    text: "Neuchâtel",
    value: "NE",
    image: require("./../assets/SVG/Neuchatel.svg")
  },
  {
    text: "Nid- und Obwalden",
    value: "NOW",
    image: require("./../assets/SVG/NidObWalden.svg")
  }
];

export default {
  name: "Configurator",
  components: {
    Sketch
  },
  data() {
    return {
      logos: logos,
      dragging: false,
      logo: undefined,
      logoDataUrl: "",
      backgroundImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Limmat-Quaibr%C3%BCcke.jpg/1280px-Limmat-Quaibr%C3%BCcke.jpg",
      height: 600,
      width: 800,
      xPosition: -40,
      yPosition: -100,
      logoImageRatio: "",
      backgroundOverlay: 10.0,
      backgroundImageDataUrl: "",
      logoSize: 199,
      upperCase: "uppercase",
      twitterBorder: false,
      twitterColor: defaultPropsGreen,
      showTwitterColor: false,
      bars: [
        {
          x: -47,
          y: -51,
          fontSize: 3,
          rotation: 10,
          colors: defaultProps,
          textTransform: "uppercase",
          showColorPicker: false
        },
        {
          x: -50,
          y: -52,
          fontSize: 3.5,
          rotation: 10,
          colors: defaultPropsGreen,
          textTransform: "uppercase",
          showColorPicker: false
        }
      ],
      bg: {
        x: "",
        y: "",
        width: "",
        height: ""
      }
    };
  },

  computed: {
    imageScale() {
      return {
        transform: "scale(1)",
        transformOrigin: "top left"
      };
    },

    scaleRelative() {
      return {
        minHeight: this.height * 0.4 + 10 + "px"
      };
    },

    outerStyles() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        fontSize: this.fontSize + "px",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, " +
          this.backgroundOverlay / 100 +
          ")" +
          ",rgba(255, 255, 255, " +
          this.backgroundOverlay / 100 +
          "))" +
          ",url(" +
          this.backgroundImageDataUrl +
          ")"
      };
    },

    logoStyles() {
      return {
        width: this.logoSize + "px",
        height: this.logoSize * this.logoImageRatio + "px",
        backgroundImage: "url('" + this.logoDataUrl + "')"
      };
    }
  },

  mounted() {
    this.logo = require("./../assets/SVG/Zürich.svg");
    toDataURL(this.backgroundImage, dataUrl => {
      this.backgroundImageDataUrl = dataUrl;
    });
    if (this.$route.query.preset) {
      this.loadPreset(this.$route.query.preset);
    } else {
      this.loadPreset("sharepic");
    }
  },

  methods: {
    loadPreset(preset) {
      Object.assign(this, presets[preset]);
    },

    startDrag() {
      this.dragging = true;
    },

    stopDrag() {
      this.dragging = false;
    },

    shiftElement(event, bar) {
      if (this.dragging) {
        bar.y += event.movementX;
        bar.x += event.movementY;
      }
    },

    useLocalFile(event) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          this.backgroundImageDataUrl = reader.result;
        },
        false
      );
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
      }
    },

    addNewBar() {
      this.bars.push({
        x: 10,
        y: 10,
        fontSize: 1.2,
        rotation: 10,
        colors: defaultProps,
        textTransform: "uppercase",
        showColorPicker: false
      });
    },

    deleteOneBar() {
      this.bars.pop();
    },

    contentStyles(bar) {
      return {
        top: bar.x + "px",
        left: bar.y + "px",
        textTransform: bar.textTransform,
        transform:
          "rotate(-" + bar.rotation + "deg) skewX(-" + bar.rotation + "deg)"
      };
    },

    barStyle(bar) {
      return {
        backgroundColor: bar.colors.hex,
        fontSize: bar.fontSize + "em"
      };
    },

    generate() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = this.width;
      canvas.height = this.height;
      var pixelRatio = window.devicePixelRatio || 1;

      // lets scale the canvas and change its CSS width/height to make it high res.
      canvas.style.width = canvas.width + "px";
      canvas.style.height = canvas.height + "px";
      canvas.width *= pixelRatio;
      canvas.height *= pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const tempImg = document.createElement("img");
      const htmlm = document.getElementById("container").innerHTML;
      const style = document.getElementById("style").innerHTML;
      tempImg.addEventListener("load", onTempImageLoad);
      tempImg.src =
        "data:image/svg+xml," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
            this.width +
            '" height="' +
            this.height +
            '"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>' +
            style +
            "</style>" +
            htmlm +
            "</div></foreignObject></svg>"
        );

      const targetImg = document.createElement("img");

      targetImg.style.width = canvas.style.width;
      targetImg.style.height = canvas.style.height;

      document.getElementById("output").innerHTML = "";
      document.getElementById("output").appendChild(targetImg);

      window.scrollTo(
        0,
        document.getElementById("output").offsetTop +
          document.getElementById("output").offsetHeight
      );

      function onTempImageLoad(e) {
        ctx.drawImage(e.target, 0, 0);
        targetImg.src = canvas.toDataURL();
        targetImg.addEventListener("click", function() {
          window.open(targetImg.src, "_blank");
        });
      }
    }
  },
  watch: {
    backgroundImage: function() {
      toDataURL(this.backgroundImage, dataUrl => {
        this.backgroundImageDataUrl = dataUrl;
      });
    },
    logo: function() {
      toDataURL(this.logo, dataUrl => {
        this.logoDataUrl = dataUrl;
        const tempImage = new Image();
        tempImage.onload = () => {
          this.logoImageRatio = tempImage.height / tempImage.width;
        };
        tempImage.src = dataUrl;
      });
    },
    $route(to) {
      if (to.query.preset) {
        this.loadPreset(to.query.preset);
      }
    }
  }
};
</script>

<style scoped lang="scss">
ol {
  margin: auto;
  width: 300px;
  text-align: left;
}

#container {
  margin: auto;
  display: inline-block;
}

#content {
  cursor: move;

  &:hover {
    background-color: rgba(#fff, 0.8);
  }
}

input[type="file"] {
  width: initial;
}

ul.inline {
  list-style: none;

  li {
    display: inline-block;

    a {
      padding: 2px 15px 2px 0;
    }
  }
}

a {
  color: #2d9cdb;
  text-decoration: none;

  &:hover,
  &.router-link-active-exact {
    color: #bed933;
  }
}

.external a {
  background-position: center right;
  background-repeat: no-repeat;
  background-image: linear-gradient(transparent, transparent),
    url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E");
  padding-right: 13px;
}

.hidden {
  display: none;
}

.presets,
.external {
  margin: 0;
  padding: 0;
}

.presets li,
.external li {
  margin: 0;
  padding: 0;
}

.external li {
  margin-right: 10px;
}

.scale {
  transform: scale(0.4) translate(-75%, -80%);
  top: 0;
  left: 0;
}

.scale-relative {
  position: relative;
  min-height: 350px;
}

.alert-info a {
  color: #fff;
}

h2,
.h2 {
  font-size: 1.5rem;
}

label {
  margin-top: 0.8rem;
  margin-bottom: 0.2rem;
}

label.btn {
  margin-top: 0;
}

#output img {
  max-width: 100%;
  height: auto !important;
}
</style>
