<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
  import name from '../../common/js/name'

  const PREFIX_CLS = name.libShortName.toLowerCase() + '-' + name.componentsName.icon.toLowerCase()
  const sizeArr = [
    'xxx-small',
    'xx-small',
    'x-small',
    'small',
    'medium',
    'large',
    'x-large',
    'xx-large',
    'xxx-large'
  ]
  const positionObj = {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
    leftTop: ['left', 'top'],
    rightTop: ['right', 'top'],
    leftBottom: ['left', 'bottom'],
    rightBottom: ['right', 'bottom']
  }
  const animationArr = [
    'scale',
    'rotate-y',
    'fade-in'
  ]

  export default {
    name: name.componentsName.icon,
    props: {
      name: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      custom: {
        type: String,
        default: ''
      },
      animated: {
        type: Boolean,
        default: false
      },
      animation: {
        type: String,
        default: 'scale'
      }
    },
    computed: {
      classes () {
        let classes = [
          `${PREFIX_CLS}`
        ]
        if (this.name) {
          classes.push(`${PREFIX_CLS}` + '-' + this.name)
        } else if (this.custom) {
          this.size || (this.size = 'small')
          if (sizeArr.indexOf(this.size) !== -1) {
            classes.push(`${PREFIX_CLS}` + '-size-' + this.size)
          }
        }
        if (this.animated) {
          if (animationArr.indexOf(this.animation) !== -1) {
            classes.push(`${PREFIX_CLS}` + '-' + this.animation)
          }
        }

        return classes
      },
      styles () {
        let styles = ''
        if (this.name) {
          if (this.size && sizeArr.indexOf(this.size) === -1) {
            styles += 'font-size: ' + this.size + '; '
          }
        } else if (this.custom) {
          if (this.size && sizeArr.indexOf(this.size) === -1) {
            styles += 'width: ' + this.size + '; height: ' + this.size + '; '
          }
          styles += 'background-image: url(' + this.custom + '); '
        }
        if (this.position && positionObj.hasOwnProperty(this.position)) {
          styles += 'position: absolute; '
          if (positionObj[this.position] instanceof Array) {
            positionObj[this.position].map((item, key) => {
              styles += item + ': 0; '
            })
          } else {
            styles += positionObj[this.position] + ': 0; '
          }
        }
        return styles
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('iconClick', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/style/icon";
</style>