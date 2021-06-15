<template>
  <div class="upload-container">
    <div class="upload">
      <!-- <ul>
        <li v-for="file in files" :key="file.id">
          <span>{{ file.name }}</span> -
          <span>{{ $formatSize(file.size) }}</span> -
          <span v-if="file.error">{{ file.error }}</span>
          <span v-else-if="file.success">success</span>
          <span v-else-if="file.active">active</span>
          <span v-else></span>
        </li>
      </ul> -->
      <div class="example-btn">
        <ClientOnly>
          <file-upload
            class="btn btn-primary"
            post-action="/upload/post"
            extensions="gif,jpg,jpeg,png,webp"
            accept="image/png,image/gif,image/jpeg,image/webp"
            :multiple="true"
            :size="1024 * 1024 * 10"
            v-model="files"
            ref="upload"
          >
            <i class="fa fa-plus"></i>
            Додади слики
          </file-upload>
        </ClientOnly>
        <div class="upload-info">
          <p>
            За најоптимални резултати завртете го вашиот телефон/таблет
            хоризонтално додека фотографирате
          </p>
        </div>
        <!-- <button
          type="button"
          class="btn btn-success"
          v-if="!$refs.upload || !$refs.upload.active"
          @click.prevent="$refs.upload.active = true"
        >
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          Start Upload
        </button>
        <button
          type="button"
          class="btn btn-danger"
          v-else
          @click.prevent="$refs.upload.active = false"
        >
          <i class="fa fa-stop" aria-hidden="true"></i>
          Stop Upload
        </button> -->
        <div v-if="blobs.length > 0">
          <img
            class="post-img"
            v-for="blob in blobs"
            :key="blob.id"
            :src="blob.url"
            width="80"
            height="80"
            @click="showImgModal(blob.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import FileUpload from "vue-upload-component";
export default {
  components: {
    FileUpload
  },
  created() {
    this.blobs = [...this.$store.getters["create/getFiles"]];
  },
  watch: {
    files() {
      if (this.files.length > 0) {
        const blobki = [];
        for (let i = 0; i < this.files.length; i++) {
          let blobka = {};
          blobka.id = this.files[i].id;
          blobka.url = URL.createObjectURL(this.files[i].file);
          blobki.push(blobka);
          this.blobs.push(blobka);
        }
        // console.log(this.files);
        // debugger;
        this.files = [];
        //this.blobs = blobki;
      }
      //this.$store.commit("updateFiles", this.files);
      console.log(this.blobs);

      this.$store.commit("create/updateFiles", [...this.blobs]);
    }
  },
  // updated() {
  //   if (this.files.length > 0) {
  //     const blobki = [];
  //     for (let i = 0; i < this.files.length; i++) {
  //       blobki.push(URL.createObjectURL(this.files[i].file));
  //     }

  //     this.blobs = blobki;
  //   }

  //   console.log(this.files);
  // },
  // computed: {
  //   ...mapState(["files"]),
  // },
  data() {
    return {
      files: [],
      blobs: []
    };
  },
  methods: {
    showImgModal(id) {
      this.$router.push("/test/" + id);
    }
    //   inputUpdate(files) {
    //     debugger;
    //     console.log(files);
    //     this.url = URL.createObjectURL(files[0]);

    //     this.$store.commit("updateFiles", files);
    //   },
  }
};
</script>

<style scoped>
.post-img {
  object-fit: contain;
  border-radius: 5px;
  padding: 3px;
  border: 1px grey solid;
  margin: 0.3rem;
}

.upload-info {
  background-color: #ffffd0;
  padding: 2%;
  margin: 2% 0;
}
</style>
