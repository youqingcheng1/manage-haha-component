import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HaDialog',
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    size: {
      type: String,
      default: 'default'
    },
    title: String,
    titleIcon: String,
    buttons: {
      type: Array,
      default() {
        return []
      }
    },
    extraClass: {
      type: String,
      default: ''
    },
    contentLoading: false
  },
  emits: [
    'update:visible',
    'button-click',
    'open',
    'close'
  ],
  created() {
    this.initButtons()
    this.customClass = `${this.extraClass} f-dialog f-dialog--${this.size}`
  },
  watch: {
    buttons() {
      this.initButtons()
    },
    visible(value) {
      this.innerVisible = value
    },
    innerVisible(value) {
      if (!value) {
        this.$emit('update:visible', false)
      } else {
        for (let item of this.buttonList) {
          item.isLoading = false
        }
      }
    }
  },
  data() {
    return {
      buttonList: [],
      innerVisible: this.visible,
      customClass: ''
    }
  },
  methods: {
    initButtons() {
      let buttonList = _.cloneDeep(this.buttons)
      for (let button of buttonList) {
        if (!button.type || (button.type && button.type == 'plain')) {
          button.plain = true
          button.type = undefined
        }
      }
      this.buttonList = buttonList
    },
    handleButtonClick(button) {
      this.$emit('button-click', button.key, () => {
        this.innerVisible = false
      })
      if (button.async) {
        let buttonList = _.cloneDeep(this.buttonList)
        for (let item of buttonList) {
          if (item.key == button.key) {
            item.isLoading = true
          }
        }
        this.buttonList = buttonList
      }
      if (!button.async && !button.manualClose) {
        this.innerVisible = false
      }
    },
    handleDialogOpen() {
      this.$emit('open')
    },
    handleDialogClose() {
      this.$emit('close')
    }
  }
})
