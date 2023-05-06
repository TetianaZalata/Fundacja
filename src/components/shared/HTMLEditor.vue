<template>
  <v-dialog
    v-model="isShow"
    max-width="1200"
  >
    <v-card class="pa-5">
        <v-card-title class="text-h5">HTML Editor</v-card-title>
        <vue-editor
          v-model="content.value"
          :editor-toolbar="customToolbar"
        />
        <v-card-actions class="d-flex justify-end mt-5">
            <v-btn
                tile
                text
                @click="closeDialog"
            >
                Cancel
            </v-btn>
            <v-btn
                tile
                @click="submit"
                text
            >
                save
            </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { VueEditor, Quill } from "vue2-editor";
  import { getDatabase, ref, onValue, push, set, update } from "firebase/database";

  function getFontName(font) {
      return font.toLowerCase().replace(/\s/g, "-");
  }

  // Specify Quill fonts
  const fontList = ['Arial', 'Courier', 'Garamond', 'Tahoma', 'Times New Roman', 'Verdana'];
  const fontNames = fontList.map(font => getFontName(font));
  const fonts = Quill.import('formats/font');
  fonts.whitelist = fontNames;
  Quill.register(fonts, true);

  // Add fonts to CSS style
  let fontStyles = "";
  fontList.forEach(function(font) {
      let fontName = getFontName(font);
      fontStyles += ".ql-snow .ql-picker.ql-font .ql-picker-label[data-value=" + fontName + "]::before, .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=" + fontName + "]::before {" +
          "content: '" + font + "';" +
          "font-family: '" + font + "', sans-serif;" +
          "}" +
          ".ql-font-" + fontName + "{" +
          " font-family: '" + font + "', sans-serif;" +
          "}";
  });

  const node = document.createElement('style');
  node.innerHTML = fontStyles;
  document.body.appendChild(node);

  export default {
    name: 'HtmlEditor',
    components: {
      VueEditor,
    },
    props: {
      dialog: {
        type: Boolean,
        required: true,
      },
      calendarType: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isShow: this.dialog,
        content: {},
        customToolbar: [
          [{ header: [false, 1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "strike"], // toggled buttons
          [
            { align: "" },
            { align: "center" },
            { align: "right" },
            { align: "justify" }
          ],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          ["link", "image", "video"],
          ["clean"], // remove formatting button
          [{ 'font': fonts.whitelist }],
        ]
      }
    },
    watch: {
      dialog(newVal) {
        this.isShow = newVal;
      }
    },
    created() {
      this.getSchoolCalendar();
    },
    methods: {
      getSchoolCalendar() {
        const db = getDatabase();
        const dbRef = ref(db, this.calendarType);

        onValue(dbRef, (snapshot) => {
          this.content.value = snapshot.val().value || '';
        }, {
          onlyOnce: false,
        });
      },
      closeDialog() {
        this.$emit('close');
      },
      editSchedule() {
        const db = getDatabase();
        const dbRef = ref(db, this.calendarType);
        const data = {
            value: this.content.value,
        }

        update(dbRef, data)
        .then(() => {
            this.closeDialog();
        }).catch((err) => {
            console.error(err);
        })
      },
      createSchedule() {
        const db = getDatabase();
        const list = ref(db, this.calendarType);
        const newListItem = push(list);
        set(newListItem, {
            value: this.content.value,
        }).then(() => {
            this.closeDialog();
        }).catch((err) => {
            console.error(err);
        })
      },
      submit() {
        if (this.content) {
          this.editSchedule();
        } else {
          this.createSchedule();
        } 
      }
    },
  }
</script>

<style lang="scss" scoped>
  
</style>